import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CloudCog,
  Code2,
  Cookie,
  DatabaseZap,
  FileCheck2,
  Globe2,
  GraduationCap,
  Handshake,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const navItems = [
  ["Home", "/"],
  ["Company", "/company"],
  ["Services", "/services"],
  ["Platform", "/platform"],
  ["Impact", "/impact"],
  ["Standards", "/standards"],
  ["Contact", "/contact"]
];

const proofPoints = [
  { icon: Globe2, title: "UK + India delivery", text: "Strategy, build, growth and support across global time zones." },
  { icon: LockKeyhole, title: "Secure enquiry flow", text: "Consent-led contact capture connected to the local API." },
  { icon: FileCheck2, title: "Launch-ready structure", text: "SEO, accessibility, policy signals and production build hygiene." }
];

const servicePillars = [
  { icon: Code2, title: "Product Engineering", text: "SaaS platforms, dashboards, portals, CRM modules, APIs and workflow products for operational teams.", cta: "Scope a build" },
  { icon: CloudCog, title: "AI Operations", text: "Automation for onboarding, support, reporting, lead routing, knowledge retrieval and team handovers.", cta: "Automate work" },
  { icon: BarChart3, title: "Growth Systems", text: "SEO, analytics, campaign journeys, content operations and conversion infrastructure for serious buyers.", cta: "Grow demand" },
  { icon: GraduationCap, title: "Learning Programmes", text: "Internships, digital skills, mentorship, live project practice and career-readiness pathways for young talent.", cta: "Explore talent" }
];

const audiences = [
  ["Enterprises", "Operational software, automation and analytics for teams that need fewer manual handoffs."],
  ["Education Providers", "Learner portals, admissions workflows, progress tracking and programme delivery systems."],
  ["Growth Teams", "High-converting websites, marketing operations, reporting and CRM visibility."],
  ["Young Talent", "Practical training, portfolio projects, internships and mentorship connected to real digital work."]
];

const platformModules = [
  ["OpsDashboard CRM", "Consultation pipelines, task queues, ownership, follow-up automation and executive summaries."],
  ["AI Workflow Assistant", "Internal knowledge, response drafts, support triage, onboarding checklists and report generation."],
  ["Digital Operations Portal", "Secure client, student, partner or staff workspaces with approvals, dashboards and reporting."],
  ["Growth Intelligence Hub", "Lead sources, campaign signals, conversion data and decision-ready marketing reports."]
];

const capabilityRows = [
  { metric: "01", title: "Map the operation", text: "We clarify the commercial goal, data model, user journeys, compliance needs and delivery priorities." },
  { metric: "02", title: "Design the system", text: "We shape interfaces, architecture, workflows and content paths before production engineering begins." },
  { metric: "03", title: "Build and improve", text: "We ship, test, measure and iterate with a roadmap that keeps the platform useful after launch." }
];

const standards = [
  { icon: ShieldCheck, title: "Privacy aware", text: "Focused enquiry fields, consent capture and space for full UK GDPR policy detail before public launch." },
  { icon: BadgeCheck, title: "Accessible by default", text: "Semantic layout, visible focus, readable contrast, responsive typography and reduced-motion support." },
  { icon: Cookie, title: "Cookie clarity", text: "This local build uses only essential storage for the notice. Analytics can be added behind consent." },
  { icon: Building2, title: "Business confidence", text: "Address, phone, email, company information area and policy links are visible for trust." }
];

function normalisePath(pathname) {
  const clean = pathname.replace(/\/$/, "") || "/";
  return navItems.some(([, path]) => path === clean) ? clean : "/";
}

function useRoute() {
  const [path, setPath] = useState(() => normalisePath(window.location.pathname));

  useEffect(() => {
    const syncRoute = () => setPath(normalisePath(window.location.pathname));
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const navigate = (to) => {
    const nextPath = normalisePath(to);
    if (nextPath !== path) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { path, navigate };
}

function Link({ to, navigate, children, className, onNavigate, ...props }) {
  return (
    <a
      className={className}
      href={to}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
        onNavigate?.();
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function BrandLogo() {
  return <span className="brand-lockup" aria-label="learnifyops"><span className="brand-mark" aria-hidden="true">L</span><span className="brand-name">learnifyops</span></span>;
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link className="brand" to="/" navigate={navigate} onNavigate={() => setOpen(false)} aria-label="learnifyops home"><BrandLogo /></Link>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
        <div className="nav-links">
          {navItems.map(([label, target]) => <Link key={target} to={target} navigate={navigate} onNavigate={() => setOpen(false)} className={path === target ? "active" : undefined}>{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}

function Eyebrow({ icon: Icon = Sparkles, children }) {
  return <span className="eyebrow"><Icon size={15} aria-hidden="true" />{children}</span>;
}

function SectionIntro({ eyebrow, icon, title, text }) {
  return <div className="section-intro reveal"><Eyebrow icon={icon}>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function PageHero({ eyebrow, icon, title, text, image = "/assets/hero-learnifyops.png" }) {
  const backgroundImage = "linear-gradient(90deg, rgba(7, 16, 24, 0.98), rgba(7, 16, 24, 0.74)), url(" + image + ")";
  return <section className="page-hero"><div className="page-hero-media" style={{ backgroundImage }} aria-hidden="true" /><div className="container page-hero-inner reveal visible"><Eyebrow icon={icon}>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p></div></section>;
}

function Hero({ navigate }) {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal visible">
          <Eyebrow icon={Globe2}>International software, operations and learning partner</Eyebrow>
          <h1>Digital systems for organisations ready to operate globally.</h1>
          <p>learnifyops designs and builds SaaS platforms, AI workflow engines, CRM systems, websites, mobile experiences and talent programmes for ambitious teams in the UK, India and beyond.</p>
          <div className="hero-actions"><Link className="btn btn-primary" to="/contact" navigate={navigate}>Start a Project <ArrowRight size={18} aria-hidden="true" /></Link><Link className="btn btn-secondary" to="/services" navigate={navigate}>View Services</Link></div>
        </div>
        <div className="command-centre reveal visible" aria-label="learnifyops global delivery snapshot">
          <div className="command-top"><span>Global Delivery OS</span><strong>Live</strong></div>
          <div className="command-map"><span className="pin pin-uk">UK</span><span className="pin pin-in">IN</span><span className="route route-a" /><span className="route route-b" /></div>
          <div className="command-metrics"><article><strong>4</strong><span>Service pillars</span></article><article><strong>2</strong><span>Delivery hubs</span></article><article><strong>24h</strong><span>Workflow mindset</span></article></div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return <section className="proof-strip" aria-label="Credibility highlights"><div className="container proof-grid reveal">{proofPoints.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={22} aria-hidden="true" /><strong>{title}</strong><span>{text}</span></article>)}</div></section>;
}

function PlatformPreview() {
  return <div className="platform-preview reveal" aria-label="Platform dashboard preview"><div className="preview-sidebar" aria-hidden="true"><span /><span /><span /><span /></div><div className="preview-main"><div className="preview-top"><span>Operating Console</span><strong>Q2</strong></div><div className="preview-kpis"><article><strong>68%</strong><span>Automated follow-ups</span></article><article><strong>31</strong><span>Active workflows</span></article></div><div className="preview-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div><ul>{platformModules.map(([name]) => <li key={name}><CheckCircle2 size={16} aria-hidden="true" />{name}</li>)}</ul></div></div>;
}

function CompanySection() {
  return <section className="section company"><div className="container company-layout"><div className="copy-block reveal"><Eyebrow icon={Building2}>Company</Eyebrow><h2>A technology company with product, growth and talent in one operating model.</h2><p>We help organisations replace scattered manual processes with well-designed digital systems. The result is clearer sales visibility, stronger learner journeys, faster delivery and more confident leadership decisions.</p></div><div className="audience-grid reveal">{audiences.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function ServicesSection({ navigate }) {
  return <section className="section services"><div className="container"><SectionIntro eyebrow="Services" icon={Layers3} title="Built for international buyers, not local brochure traffic." text="The website, product layer, automation stack and training programmes are designed as one connected growth system." /><div className="service-grid">{servicePillars.map(({ icon: Icon, title, text, cta }) => <article className="service-card reveal" key={title}><span className="service-icon"><Icon size={25} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><Link to="/contact" navigate={navigate}>{cta}<ChevronRight size={16} aria-hidden="true" /></Link></article>)}</div></div></section>;
}

function PlatformSection() {
  return <section className="section platform"><div className="container platform-layout"><PlatformPreview /><div className="copy-block reveal"><Eyebrow icon={DatabaseZap}>Platform</Eyebrow><h2>One operational command centre for learning, sales and service delivery.</h2><p>Use learnifyops as a studio for custom systems or as a strategic partner for portals, admissions CRM, analytics dashboards and AI-assisted workflow tools.</p><div className="module-list">{platformModules.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section>;
}

function ImpactSection() {
  return <section className="impact-band"><div className="container impact-layout reveal"><div><Eyebrow icon={Target}>Impact</Eyebrow><h2>From consultation to launch, the work stays commercially useful.</h2></div><div className="impact-steps">{capabilityRows.map(({ metric, title, text }) => <article key={metric}><span>{metric}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function TalentSection() {
  return <section className="section talent"><div className="container talent-layout"><div className="talent-image reveal"><img src="/assets/youth-uk-ready.png" alt="Students learning digital skills with mentors" /></div><div className="copy-block reveal"><Eyebrow icon={Users}>Talent programmes</Eyebrow><h2>Creating practical technology pathways for young people.</h2><p>learnifyops supports students and early-career professionals through coding, AI tools, online learning, internships, hackathons, CV preparation, interview practice and live project delivery.</p><div className="tag-row"><span>Coding</span><span>AI workflows</span><span>Mentorship</span><span>Internships</span></div></div></div></section>;
}

function StandardsSection() {
  return <section className="section standards"><div className="container"><SectionIntro eyebrow="Standards" icon={ClipboardCheck} title="Trust foundations for a serious public launch." text="Clear compliance signals, accessible interface choices and visible business information help the brand feel credible from the first visit." /><div className="standards-grid">{standards.map(({ icon: Icon, title, text }) => <article className="standard-card reveal" key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function ContactSection({ handleSubmit, formState, formStatus }) {
  return <section className="section contact"><div className="container contact-layout"><div className="copy-block reveal"><Eyebrow icon={MessageSquareText}>Contact</Eyebrow><h2>Start a focused conversation with learnifyops.</h2><p>Tell us what you want to build, improve, market or teach. The form connects to the local API and stores enquiries in MongoDB when the database is running.</p><div className="contact-lines"><a href="mailto:info@britinstitute.uk"><Mail size={18} aria-hidden="true" />info@britinstitute.uk</a><a href="tel:+447520664011"><Phone size={18} aria-hidden="true" />+44 7520 664011</a><span><MapPin size={18} aria-hidden="true" />Office 7084, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, UK</span><span><BriefcaseBusiness size={18} aria-hidden="true" />Monday to Friday, 9am to 5pm</span></div></div><form className="contact-form reveal" onSubmit={handleSubmit} aria-describedby="privacy-help form-status"><label htmlFor="name">Name<input id="name" type="text" name="name" placeholder="Your name" autoComplete="name" required /></label><label htmlFor="email">Email<input id="email" type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label><label htmlFor="phone">Phone<input id="phone" type="tel" name="phone" placeholder="+44..." autoComplete="tel" /></label><label htmlFor="type">Interest<select id="type" name="type" required><option>Product engineering</option><option>AI operations</option><option>Website or mobile app</option><option>Digital marketing</option><option>Training programme</option><option>Partnership</option></select></label><label htmlFor="message">Message<textarea id="message" name="message" placeholder="Tell us about your goal" required /></label><label className="consent-row" htmlFor="consent"><input id="consent" name="consent" type="checkbox" required />I agree to be contacted about this enquiry and understand my details should be handled according to the privacy notice.</label><p id="privacy-help" className="form-help">Only the details you enter are used for this enquiry. Add a full UK GDPR privacy notice before launching with a live backend.</p><button className="btn btn-primary" type="submit" disabled={formState === "saving"}>{formState === "saving" ? "Saving..." : "Send Message"}<ArrowRight size={18} aria-hidden="true" /></button><p id="form-status" className={"form-status " + formState} role="status">{formStatus}</p></form></div></section>;
}

function FinalCta({ navigate }) {
  return <section className="final-cta"><div className="container final-cta-inner reveal"><Handshake size={34} aria-hidden="true" /><h2>Build intelligent systems. Grow capable teams. Operate with international confidence.</h2><Link className="btn btn-secondary" to="/contact" navigate={navigate}>Plan Your Next System</Link></div></section>;
}

function HomePage({ navigate, contactProps }) {
  return <><Hero navigate={navigate} /><ProofStrip /><CompanySection /><ServicesSection navigate={navigate} /><PlatformSection /><ImpactSection /><TalentSection /><StandardsSection /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}
function CompanyPage({ navigate }) {
  return <><PageHero eyebrow="Company" icon={Building2} title="A global-standard technology partner with education in its DNA." text="learnifyops combines product engineering, AI operations, growth strategy and talent development into one delivery model for serious organisations." /><CompanySection /><TalentSection /><FinalCta navigate={navigate} /></>;
}
function ServicesPage({ navigate }) {
  return <><PageHero eyebrow="Services" icon={Layers3} title="Software, automation, growth and learning programmes under one roof." text="Choose focused delivery or a full operating system across product, marketing, data, AI workflows and talent pathways." image="/assets/global-ai-hero.png" /><ServicesSection navigate={navigate} /><ImpactSection /><FinalCta navigate={navigate} /></>;
}
function PlatformPage({ navigate }) {
  return <><PageHero eyebrow="Platform" icon={DatabaseZap} title="Operational dashboards and workflow products built around visibility." text="Bring enquiries, students, clients, staff, campaigns and delivery actions into cleaner digital systems." /><PlatformSection /><ServicesSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}
function ImpactPage({ navigate }) {
  return <><PageHero eyebrow="Impact" icon={Target} title="Every build is measured by operational clarity and practical outcomes." text="The process connects discovery, design, production and improvement so the work keeps creating value after launch." /><ImpactSection /><ProofStrip /><FinalCta navigate={navigate} /></>;
}
function StandardsPage({ navigate }) {
  return <><PageHero eyebrow="Standards" icon={ClipboardCheck} title="Trust, accessibility and launch discipline for international credibility." text="The site includes visible compliance foundations, business signals, policy paths and user-friendly interface decisions." /><StandardsSection /><ProofStrip /><FinalCta navigate={navigate} /></>;
}
function ContactPage({ navigate, contactProps }) {
  return <><PageHero eyebrow="Contact" icon={MessageSquareText} title="Talk to learnifyops about the next system you need to build." text="Use the form for product engineering, AI operations, digital marketing, training programmes, partnerships or consulting." image="/assets/youth-uk-ready.png" /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}

function Footer({ navigate }) {
  return <footer className="footer"><div className="container footer-grid"><div><Link className="brand footer-brand" to="/" navigate={navigate}><BrandLogo /></Link><p>International-grade product engineering, AI operations, digital growth and youth technology training from the UK.</p></div><div className="legal-grid" aria-label="Legal and policy information"><span>Company number: add registered England & Wales number</span><span>Registered office: Office 7084, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, UK</span><span><Link to="/standards" navigate={navigate}>Privacy Policy</Link> / <Link to="/standards" navigate={navigate}>Terms</Link> / <Link to="/standards" navigate={navigate}>Cookie Policy</Link></span><span>Copyright 2026 learnifyops. All rights reserved.</span></div></div></footer>;
}

function App() {
  const { path, navigate } = useRoute();
  const [formStatus, setFormStatus] = useState("");
  const [formState, setFormState] = useState("idle");
  const [cookieDismissed, setCookieDismissed] = useState(() => localStorage.getItem("learnifyops-cookie-note") === "dismissed");

  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.remove("visible"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    const page = navItems.find(([, route]) => route === path)?.[0] || "Home";
    document.title = path === "/" ? "learnifyops | Global Software & EdTech Solutions" : "learnifyops | " + page;
  }, [path]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState("saving");
    setFormStatus("Saving your enquiry...");
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
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to save enquiry.");
      setFormState("success");
      setFormStatus("Thank you. Your consultation enquiry has been saved. Reference: " + result.enquiryId);
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormStatus(error.message || "Could not save the enquiry. Please try again.");
    }
  };

  const contactProps = { handleSubmit, formState, formStatus };
  const pages = {
    "/": <HomePage navigate={navigate} contactProps={contactProps} />,
    "/company": <CompanyPage navigate={navigate} />,
    "/services": <ServicesPage navigate={navigate} />,
    "/platform": <PlatformPage navigate={navigate} />,
    "/impact": <ImpactPage navigate={navigate} />,
    "/standards": <StandardsPage navigate={navigate} />,
    "/contact": <ContactPage navigate={navigate} contactProps={contactProps} />
  };

  return <><a className="skip-link" href="#main">Skip to content</a><Header path={path} navigate={navigate} /><main id="main">{pages[path] || pages["/"]}</main>{!cookieDismissed && <div className="cookie-note" role="region" aria-label="Cookie notice"><p><strong>Cookie notice:</strong> this local build uses essential browser storage only to remember this message. No analytics or marketing cookies are active.</p><button type="button" onClick={() => { localStorage.setItem("learnifyops-cookie-note", "dismissed"); setCookieDismissed(true); }}>OK</button></div>}<Footer navigate={navigate} /></>;
}

createRoot(document.getElementById("root")).render(<App />);
