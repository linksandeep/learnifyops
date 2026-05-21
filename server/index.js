import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5001);
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/learnifyops";
const clientOrigin = process.env.CLIENT_ORIGIN || "http://127.0.0.1:5174";
const adminToken = process.env.ADMIN_TOKEN || "learnifyops-local-admin";

app.use(cors({ origin: clientOrigin }));
app.use(express.json({ limit: "24kb" }));

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 180 },
    phone: { type: String, trim: true, maxlength: 60 },
    interest: {
      type: String,
      required: true,
      enum: [
        "SaaS development",
        "Web or app development",
        "Digital marketing",
        "Training programme",
        "Internship enquiry",
        "Partnership"
      ]
    },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    consent: { type: Boolean, required: true },
    source: { type: String, default: "learnifyops homepage" },
    userAgent: { type: String, maxlength: 500 },
    status: { type: String, default: "new", enum: ["new", "contacted", "closed"] }
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

let databaseReady = false;

mongoose
  .connect(mongoUri)
  .then(() => {
    databaseReady = true;
    console.log(`MongoDB connected: ${mongoUri}`);
  })
  .catch((error) => {
    databaseReady = false;
    console.error("MongoDB connection failed:", error.message);
  });

app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    databaseReady,
    databaseName: mongoose.connection.name || "learnifyops"
  });
});

app.post("/api/enquiries", async (request, response) => {
  if (!databaseReady) {
    return response.status(503).json({
      message: "Database is not connected. Start MongoDB locally and try again."
    });
  }

  if (request.body.consent !== true) {
    return response.status(400).json({
      message: "Please provide consent before submitting the enquiry."
    });
  }

  try {
    const enquiry = await Enquiry.create({
      name: request.body.name,
      email: request.body.email,
      phone: request.body.phone,
      interest: request.body.interest,
      message: request.body.message,
      consent: request.body.consent === true,
      userAgent: request.get("user-agent")
    });

    return response.status(201).json({
      message: "Enquiry saved successfully.",
      enquiryId: enquiry._id
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return response.status(400).json({
        message: "Please check the form fields and try again."
      });
    }

    console.error("Enquiry save failed:", error);
    return response.status(500).json({
      message: "Something went wrong while saving the enquiry."
    });
  }
});

app.get("/api/enquiries", async (_request, response) => {
  const providedToken = _request.get("x-admin-token") || _request.query.token;

  if (providedToken !== adminToken) {
    return response.status(401).json({
      message: "Admin token required to view enquiries."
    });
  }

  if (!databaseReady) {
    return response.status(503).json({
      message: "Database is not connected. Start MongoDB locally and try again."
    });
  }

  const enquiries = await Enquiry.find()
    .sort({ createdAt: -1 })
    .limit(50)
    .select("name email phone interest message consent status createdAt");

  response.json({ enquiries });
});

app.listen(port, () => {
  console.log(`learnifyops API running on http://127.0.0.1:${port}`);
});
