import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Phone,
  Quote,
  ShieldCheck,
  Users,
  X
} from "lucide-react";
import {
  admissionsSteps,
  audience,
  curriculum,
  eligibility,
  faq,
  outcomes
} from "../../data/siteContent.js";
import { Eyebrow, PrimaryButton, SecondaryButton, SectionIntro } from "../ui/Actions.jsx";

export function AudienceSection({ navigate }) {
  return (
    <section className="section section-sky">
      <div className="container">
        <SectionIntro
          eyebrow="Candidate Profile"
          icon={Users}
          title="Who is the DBA for?"
          text="Built for professionals with significant business and leadership experience."
        />
        <div className="audience-grid">
          {audience.map(([title, text]) => <article className="audience-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="center-action"><PrimaryButton to="/admissions" navigate={navigate}>Check Your Eligibility</PrimaryButton></div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section className="section section-sky">
      <div className="container outcome-layout">
        <div className="outcome-copy reveal">
          <Eyebrow icon={Award}>Research Capabilities</Eyebrow>
          <h2>Develop practical doctoral research skills.</h2>
          <p>Build the research literacy, analytical judgement and communication skills required for applied business research.</p>
        </div>
        <div className="outcome-list reveal">
          {outcomes.map((item) => <div key={item}><CheckCircle2 size={19} aria-hidden="true" /><span>{item}</span></div>)}
        </div>
      </div>
    </section>
  );
}

export function CurriculumSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionIntro
          eyebrow="Core Framework"
          icon={BookOpen}
          title="Modular, research-focused curriculum tailored for management professionals."
          text="While exact modules depend on your selected university, this framework communicates the vital knowledge domains necessary for a defense-ready doctoral thesis."
        />
        <div className="curriculum-grid">
          {curriculum.map(({ number, title, text }) => (
            <article className="curriculum-card reveal" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CohortSection() {
  return (
    <section className="section section-white">
      <div className="container split-layout reverse">
        <div className="split-copy reveal">
          <Eyebrow icon={Network}>Executive Experience</Eyebrow>
          <h2>Learn with experienced professionals across industries and markets.</h2>
          <p>The LearnifyOps cohort model connects you with executives, founders, and consultants across major trade zones. Collaborate on modules, critique research frameworks, and build lifelong professional relationships.</p>
          <div className="mini-grid">
            <article><Globe2 size={22} /><strong>Global Perspective</strong><span>Examine management trends across US, European, and Asian markets.</span></article>
            <article><Users size={22} /><strong>Experienced Peers</strong><span>Collaborate with founders, managers, consultants and corporate directors.</span></article>
            <article><Clock3 size={22} /><strong>Flexible Milestones</strong><span>Structured deadlines allowing you to continue active employment.</span></article>
            <article><BookOpen size={22} /><strong>Advisor Supervision</strong><span>1-on-1 supervision from research faculty throughout your thesis.</span></article>
          </div>
        </div>
        <div className="experience-canvas reveal" aria-label="Global DBA community">
          <span className="experience-globe"><Globe2 size={46} aria-hidden="true" /></span>
          <span className="experience-node node-europe">United Kingdom</span>
          <span className="experience-node node-america">North America</span>
          <span className="experience-node node-australia">Australia</span>
          <span className="experience-node node-global">Global Cohort</span>
          <div className="experience-quote">
            <Network size={24} aria-hidden="true" />
            <strong>Unified ambition. Global perspective.</strong>
            <p>Build valuable advisory relationships with senior managers who understand high-stakes corporate execution.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="quote-band">
      <div className="container quote-inner reveal">
        <Quote size={36} aria-hidden="true" />
        <blockquote>"A Doctor of Business Administration empowers seasoned executives to conceptualize complex corporate behavior and orchestrate systemic transformation."</blockquote>
        <p>Strategic Cohort Positioning for Professional Scholars</p>
      </div>
    </section>
  );
}

export function AdmissionsSection({ navigate }) {
  return (
    <section className="section admissions-section">
      <div className="container admissions-layout">
        <div className="admissions-copy reveal">
          <Eyebrow icon={ShieldCheck}>Admissions Review</Eyebrow>
          <h2>Find the DBA pathway that fits your experience and goals.</h2>
          <p>LearnifyOps reviews your profile, explains applicable university options and helps you understand the information required before you apply.</p>
          <ul className="check-list">
            {eligibility.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}
          </ul>
          <PrimaryButton to="/contact" navigate={navigate}>Request an Eligibility Review</PrimaryButton>
        </div>
        <div className="admissions-steps reveal">
          {admissionsSteps.map(([title, text], index) => (
            <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section section-sky">
      <div className="container">
        <SectionIntro eyebrow="Support & Advice" icon={FileText} title="Clear guidance for your doctoral journey." />
        <div className="faq-grid">
          {faq.map(([question, answer]) => <article className="faq-card reveal" key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ handleSubmit, formState, formStatus }) {
  return (
    <section className="section section-white">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <Eyebrow icon={Mail}>Advisor Onboarding</Eyebrow>
          <h2>Schedule a confidential profiles discussion.</h2>
          <p>Share your academic background, research interests, or corporate tech consulting requirements. An expert will guide you through credit reviews, university pathways, and deployment timelines.</p>
          <div className="contact-lines">
            <a href="mailto:info@learnifyops.com"><Mail size={18} />info@learnifyops.com</a>
            <a href="tel:+447447177848"><Phone size={18} />+44 7447 177848</a>
            <span><MapPin size={18} />United Kingdom & India Admissions Support Office</span>
            <span><Globe2 size={18} />Consultations scheduled across UK, USA, Australia, and Middle East time zones.</span>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit} aria-describedby="privacy-help form-status">
          <div className="form-row">
            <label htmlFor="name">Full Name<input id="name" type="text" name="name" placeholder="Your full name" autoComplete="name" required /></label>
            <label htmlFor="email">Work Email<input id="email" type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label>
          </div>
          <div className="form-row">
            <label htmlFor="phone">Contact Number<input id="phone" type="tel" name="phone" placeholder="+44 / +1 / +61..." autoComplete="tel" /></label>
            <label htmlFor="type">Primary Interest<select id="type" name="type" required><option>Request the DBA prospectus</option><option>Arrange a profile review</option><option>Discuss certification support</option><option>Discuss placement support</option><option>Discuss technology services</option><option>Compare university pathways</option></select></label>
          </div>
          <label htmlFor="message">Research Area / Project Goals<textarea id="message" name="message" placeholder="Briefly describe your executive career, target research areas, or custom software requirements." required /></label>
          <label className="consent-row" htmlFor="consent"><input id="consent" name="consent" type="checkbox" required /><span>I consent to admissions contact regarding my DBA enquiry and agree to the storage of my profile details.</span></label>
          <p id="privacy-help" className="form-help">Admissions records are processed in strict compliance with GDPR guidelines.</p>
          <button className="btn btn-primary submit-button" type="submit" disabled={formState === "saving"}>{formState === "saving" ? "Submitting..." : "Submit Inquiry"}<ArrowRight size={18} /></button>
          <p id="form-status" className={`form-status ${formState}`} role="status">{formStatus}</p>
        </form>
      </div>
    </section>
  );
}

export function FinalCta({ navigate, tone = "doctoral", title = "Start Your DBA Journey", eyebrow = "Speak with a DBA admissions adviser.", text = "Discuss your professional background, career goals and research interests and explore DBA pathways available through the LearnifyOps partner network." }) {
  return (
    <section className={`final-cta final-cta-${tone}`}>
      <div className="container final-cta-inner reveal">
        <div><Eyebrow icon={GraduationCap}>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>
        <div className="final-actions">
          <PrimaryButton to="/contact" navigate={navigate}>Book a DBA Consultation</PrimaryButton>
          <SecondaryButton to="/program" navigate={navigate}>View Programme Details</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

export function DownloadGateModal({ request, onClose }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  if (!request) return null;

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = request.file;
    link.download = request.file.split("/").pop() || request.label;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDownloadLead = async (event) => {
    event.preventDefault();
    setStatus("saving");
    setMessage("Saving your details...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      document: request.label,
      source: "download_gate",
      page: window.location.pathname,
      consent: formData.get("consent") === "on",
      submittedAt: new Date().toISOString()
    };

    try {
      const previous = JSON.parse(localStorage.getItem("learnifyops-download-leads") || "[]");
      localStorage.setItem("learnifyops-download-leads", JSON.stringify([...previous, payload]));
    } catch {
      // Local storage can be unavailable in strict browser modes; the form should still work.
    }

    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          interest: `Download: ${request.label}`,
          message: `Requested ${request.label} from ${window.location.pathname}`
        })
      });
    } catch {
      // If the API is not available in the static build, keep the gated download flow working.
    }

    setStatus("success");
    setMessage("Thank you. Your download is starting now.");
    triggerDownload();
    window.setTimeout(onClose, 900);
  };

  return (
    <div className="download-modal-backdrop" role="presentation">
      <div className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-modal-title">
        <button className="download-modal-close" type="button" onClick={onClose} aria-label="Close download form">
          <X size={18} aria-hidden="true" />
        </button>
        <Eyebrow icon={FileText}>Before Download</Eyebrow>
        <h2 id="download-modal-title">Enter your details to download the {request.label}.</h2>
        <p>We use this information to share DBA admissions guidance and follow up on your program enquiry.</p>
        <form className="download-form" onSubmit={handleDownloadLead}>
          <label htmlFor="download-name">Full name</label>
          <input id="download-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
          <label htmlFor="download-email">Email address</label>
          <input id="download-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
          <label htmlFor="download-phone">Phone number</label>
          <input id="download-phone" name="phone" type="tel" autoComplete="tel" required placeholder="+44 / +91 / +1..." />
          <label className="consent-row" htmlFor="download-consent">
            <input id="download-consent" name="consent" type="checkbox" required />
            <span>I consent to be contacted about the DBA program and document I requested.</span>
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === "saving"}>
            {status === "saving" ? "Preparing..." : `Download ${request.label}`} <ArrowRight size={18} aria-hidden="true" />
          </button>
          {message && <p className={`download-status ${status}`}>{message}</p>}
        </form>
      </div>
    </div>
  );
}


