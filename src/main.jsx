import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { createRouteHelpers } from "./hooks/useRoute.js";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import FloatingContact from "./components/FloatingContact.jsx";
import { UniversityDetailPage } from "./components/content/UniversitySections.jsx";
import { DownloadGateModal } from "./components/content/AdmissionsSections.jsx";
import HomePage from "./pages/HomePage.jsx";
import {
  AdmissionsPage,
  ContactPage,
  CurriculumPage,
  ExperiencePage,
  PartnershipPage,
  ProgramPage
} from "./pages/ProgramPages.jsx";
import {
  britInstituteUrl,
  getUniversityByPath,
  logo,
  megaMenus,
  navItems
} from "./data/siteContent.js";

const useRoute = createRouteHelpers({ navItems, getUniversityByPath });

function App() {
  const { path, navigate } = useRoute();
  const [formStatus, setFormStatus] = useState("");
  const [formState, setFormState] = useState("idle");
  const [cookieDismissed, setCookieDismissed] = useState(() => localStorage.getItem("learnifyops-cookie-note") === "dismissed");
  const [downloadRequest, setDownloadRequest] = useState(null);

  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.remove("visible"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    const university = getUniversityByPath(path);
    const page = university?.name || navItems.find(([, route]) => route === path)?.[0] || "Home";
    document.title = path === "/" ? "Doctor of Business Administration (DBA) | LearnifyOps" : `${page} | LearnifyOps`;
  }, [path]);

  useEffect(() => {
    const openDownloadGate = (event) => setDownloadRequest(event.detail);
    window.addEventListener("learnifyops:download-gate", openDownloadGate);
    return () => window.removeEventListener("learnifyops:download-gate", openDownloadGate);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState("saving");
    setFormStatus("Submitting your profile inquiry...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      interest: formData.get("type")?.toString(),
      message: formData.get("message")?.toString().trim(),
      consent: formData.get("consent") === "on"
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to process your inquiry.");
      setFormState("success");
      setFormStatus(`Thank you. Your inquiry has been received. Reference ID: ${result.enquiryId}`);
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormStatus(error.message || "Could not process your inquiry. Please try again.");
    }
  };

  const contactProps = { handleSubmit, formState, formStatus };
  const universityPage = getUniversityByPath(path);
  const pages = {
    "/": <HomePage navigate={navigate} />,
    "/program": <ProgramPage navigate={navigate} />,
    "/curriculum": <CurriculumPage navigate={navigate} />,
    "/experience": <ExperiencePage navigate={navigate} />,
    "/admissions": <AdmissionsPage navigate={navigate} />,
    "/partnership": <PartnershipPage navigate={navigate} />,
    "/contact": <ContactPage navigate={navigate} contactProps={contactProps} />
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header path={path} navigate={navigate} megaMenus={megaMenus} logo={logo} britInstituteUrl={britInstituteUrl} />
      <main id="main">{universityPage ? <UniversityDetailPage navigate={navigate} university={universityPage} /> : (pages[path] || pages["/"])}</main>
      <DownloadGateModal request={downloadRequest} onClose={() => setDownloadRequest(null)} />
      {!cookieDismissed && (
        <div className="cookie-note" role="region" aria-label="Cookie notice">
          <p><strong>GDPR Statement:</strong> This website uses local storage exclusively for session performance. No marketing cookies are active.</p>
          <button type="button" onClick={() => { localStorage.setItem("learnifyops-cookie-note", "dismissed"); setCookieDismissed(true); }}>OK</button>
        </div>
      )}
      <Footer navigate={navigate} logo={logo} />
      <FloatingContact hidden={Boolean(downloadRequest)} cookieNoticeVisible={!cookieDismissed} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
