import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CloudCog,
  Code2,
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
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  X
} from "lucide-react";
const learnifyOpsLogo = "/assets/learnifyops-logo-transparent.png";
import "./styles.css";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Capabilities", "/capabilities"],
  ["Industries", "/industries"],
  ["Products", "/products"],
  ["Placements", "/placements"],
  ["Contact", "/contact"]
];

const proofPoints = [
  { icon: Globe2, title: "UK and India offices", text: "Operating from London, Essex and Noida, with remote-first delivery for clients and partners worldwide." },
  { icon: DatabaseZap, title: "Product-led delivery", text: "SaaS platforms, LMS systems, automation tools and custom software built for real business use." },
  { icon: GraduationCap, title: "Global career pathways", text: "Placement support, job assistance and international university partnerships, including Canada." }
];

const capabilities = [
  { icon: DatabaseZap, title: "SaaS Products", text: "We design and build scalable SaaS platforms, portals, dashboards, LMS systems and workflow products for growing teams." },
  { icon: CloudCog, title: "AI Automation", text: "We automate repetitive work across job applications, reporting, lead handling, onboarding and internal business workflows." },
  { icon: Code2, title: "Software Development", text: "Modern web applications, APIs, admin panels and custom software built with clean architecture and reliable delivery standards." },
  { icon: Users, title: "Placement and Job Assistance", text: "Resume readiness, interview preparation, job application support and structured pathways for employability outcomes." },
  { icon: GraduationCap, title: "University Partnerships", text: "International education partnerships, including Canadian university connections, to support global learning and career routes." },
  { icon: Workflow, title: "Business Automation Tools", text: "In-house workflow systems that reduce manual effort, improve visibility and help teams operate with better control." }
];

const industries = [
  ["Education and Universities", "LMS platforms, learner journeys, admissions workflows, international partnerships and outcome tracking."],
  ["Startups and Growing Businesses", "Custom SaaS, software development, automation, dashboards and scalable digital operations."],
  ["Recruitment and Placement", "Candidate pipelines, resume readiness, job application systems, interview support and placement reporting."],
  ["Professional Services", "Client portals, workflow automation, document handling, reporting and internal operating systems."],
  ["Training Providers", "Course delivery, learner management, mentor workflows, assessments and employability support."],
  ["Global Partnerships", "Technology and education collaborations designed for cross-border delivery and long-term growth."]
];

const products = [
  ["Automated Job Application System", "A structured platform to manage profiles, applications, follow-ups and job search activity at scale."],
  ["Learning Management Software (LMS)", "A complete learning platform for courses, learners, mentors, assessments and progress tracking."],
  ["Business & Workflow Automation Tools", "Automation products that reduce manual work across operations, reporting and team coordination."],
  ["Custom SaaS Platforms", "Scalable web products, dashboards, portals and admin systems built around your business model."]
];

const productDetails = {
  "Automated Job Application System": {
    bestFor: "Placement teams, training institutes, recruitment support providers and career programmes.",
    includes: ["Candidate profile management", "Application tracking", "Resume and cover letter support", "Follow-up reminders", "Status dashboards", "Placement reporting"],
    outcome: "A more organised job search process with clear visibility across applications, candidates and placement progress."
  },
  "Learning Management Software (LMS)": {
    bestFor: "Education providers, training companies, universities and corporate learning teams.",
    includes: ["Course and batch management", "Learner profiles", "Assessments and progress tracking", "Mentor workflows", "Certificates", "Admin dashboards"],
    outcome: "A reliable learning environment that improves delivery, learner visibility and programme management."
  },
  "Business & Workflow Automation Tools": {
    bestFor: "Businesses that need better control over approvals, reporting, task ownership and repeated operations.",
    includes: ["Process mapping", "Task automation", "Lead and enquiry workflows", "Internal dashboards", "Notifications", "Management reporting"],
    outcome: "Cleaner operations with fewer manual steps, faster decisions and better accountability."
  },
  "Custom SaaS Platforms": {
    bestFor: "Startups, SMEs and institutions that need a tailored product instead of a generic off-the-shelf tool.",
    includes: ["Product discovery", "UX and interface design", "Frontend and backend development", "API integrations", "Admin panels", "Scalable deployment support"],
    outcome: "A modern software product aligned with your users, workflows and growth plans."
  }
};

const placementTracks = [
  ["Resume and Profile Readiness", "Professional CV structure, profile positioning and job-market alignment."],
  ["Job Application Support", "Organised application workflows, role targeting, tracking and follow-up support."],
  ["Interview Preparation", "Communication practice, technical readiness and confidence-building sessions."],
  ["University and Career Pathways", "Guidance supported by international education partnerships, including Canada." ]
];

const process = [
  { metric: "01", title: "Understand the goal", text: "We clarify users, workflows, product requirements, placement goals and business outcomes before execution." },
  { metric: "02", title: "Design the solution", text: "We shape the user journey, technical architecture, automation flow and delivery roadmap." },
  { metric: "03", title: "Build and integrate", text: "We develop SaaS products, software platforms, AI workflows and career-support systems with practical handover." },
  { metric: "04", title: "Scale and improve", text: "We monitor adoption, improve workflows and support long-term growth across global delivery needs." }
];

const stories = [
  ["Automated job application workflows", "A structured system for candidate profiles, applications, status tracking and placement-team visibility."],
  ["Learning delivery through LMS", "A modern learning platform that supports courses, learner progress, mentor activity and reporting."],
  ["Business automation for teams", "Workflow tools that replace scattered manual processes with clear task ownership and operational visibility." ]
];

const standards = [
  { icon: ShieldCheck, title: "Global delivery standards", text: "Clear communication, structured delivery, documentation and support for clients across regions." },
  { icon: FileCheck2, title: "Scalable engineering", text: "Modern architecture, clean interfaces, reliable workflows and maintainable product foundations." },
  { icon: ClipboardCheck, title: "Business clarity", text: "Transparent service information, clear office presence and conversion-focused communication." }
];

const insights = [
  ["SaaS products built for scale", "Custom platforms, dashboards, portals and LMS solutions designed around real operational needs."],
  ["AI automation for smarter operations", "Automate repetitive tasks, job workflows, reports and internal processes with controlled human oversight."],
  ["Software development for modern teams", "Build reliable web applications, APIs and admin systems with clean engineering practices."],
  ["Placement and job assistance", "Support candidates with resumes, applications, interviews and structured career pathways."]
];

const globalStats = [
  ["Noida", "India office"],
  ["London", "UK office in Essex"],
  ["Global", "Services delivered worldwide"],
  ["4", "Core focus areas"],
  ["Canada", "International university partnerships"],
  ["3+", "In-house software product lines"]
];

const partnerAreas = ["SaaS Products", "AI Automation", "Software Development", "Placement Support", "Job Assistance", "Canadian Universities", "International Partnerships", "Global Delivery"];

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
    <a className={className} href={to} onClick={(event) => { event.preventDefault(); navigate(to); onNavigate?.(); }} {...props}>
      {children}
    </a>
  );
}

function BrandLogo() {
  return <span className="brand-lockup"><img className="brand-logo-image" src={learnifyOpsLogo} alt="LearnifyOps" /></span>;
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      {open && <button className="nav-backdrop" type="button" aria-label="Close navigation" onClick={() => setOpen(false)} />}
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link className="brand" to="/" navigate={navigate} onNavigate={() => setOpen(false)} aria-label="LearnifyOps home"><BrandLogo /></Link>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-controls="primary-navigation-links" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
        <Search className="search-icon" size={31} aria-hidden="true" />
        <div className="nav-links" id="primary-navigation-links">
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
  const backgroundImage = "linear-gradient(90deg, rgba(5, 15, 32, 0.96), rgba(5, 15, 32, 0.66)), url(" + image + ")";
  return <section className="page-hero"><div className="page-hero-media" style={{ backgroundImage }} aria-hidden="true" /><div className="container page-hero-inner reveal visible"><Eyebrow icon={icon}>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p></div></section>;
}

function Hero({ navigate }) {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal visible">
          <Eyebrow icon={Globe2}>SaaS, AI automation, software development and career solutions</Eyebrow>
          <h1>BUILD SMARTER<br />GLOBAL FUTURES</h1>
          <p>LearnifyOps builds scalable software, AI automation and career-support systems from offices in Noida and London, Essex, serving clients and partners worldwide.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact" navigate={navigate}>Discuss a Project <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="btn btn-secondary" to="/capabilities" navigate={navigate}>Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmartIntro({ navigate }) {
  return <section className="smart-intro"><div className="container smart-intro-inner reveal"><h2>Technology and talent solutions for global growth.</h2><p>We help organisations launch better software, automate business operations and support candidates through structured placement and job-assistance pathways.</p><div className="intro-links"><Link to="/contact" navigate={navigate}>Start a Conversation <ArrowRight size={18} /></Link><Link to="/placements" navigate={navigate}>Explore Job Assistance <ArrowRight size={18} /></Link></div></div></section>;
}

function ProofStrip() {
  return <section className="proof-strip" aria-label="Credibility highlights"><div className="container proof-grid reveal">{proofPoints.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={22} aria-hidden="true" /><strong>{title}</strong><span>{text}</span></article>)}</div></section>;
}

function CapabilitiesSection({ navigate }) {
  return <section className="section capabilities"><div className="container"><SectionIntro eyebrow="Capabilities" icon={Layers3} title="Four focus areas. One global delivery partner." text="LearnifyOps combines product engineering, automation, software development and career-support services into a clear, scalable delivery model." /><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article className="capability-card reveal" key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p><Link to="/contact" navigate={navigate}>Discuss this <ChevronRight size={16} aria-hidden="true" /></Link></article>)}</div></div></section>;
}

function IndustriesSection() {
  return <section className="section industries"><div className="container"><SectionIntro eyebrow="Industries" icon={Building2} title="Built for education, business and career ecosystems." text="Our work supports organisations that need dependable software, clearer operations and stronger learning or placement outcomes." /><div className="industry-grid">{industries.map(([title, text]) => <article className="industry-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(products[0][0]);
  const detail = productDetails[selectedProduct];
  return <section className="section products"><div className="container product-layout"><div className="product-console reveal" aria-label="SaaS product console"><div className="console-top"><span>In-house solutions</span><strong>Scale-ready</strong></div><div className="console-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div><ul>{products.map(([name]) => <li key={name} className={selectedProduct === name ? "active" : ""}><CheckCircle2 size={16} aria-hidden="true" />{name}</li>)}</ul></div><div className="copy-block reveal"><Eyebrow icon={DatabaseZap}>Products</Eyebrow><h2>In-house products and custom SaaS built for scale.</h2><p>We create software that solves practical problems: job applications, learning delivery, workflow automation and business operations.</p><div className="module-list product-picker">{products.map(([title, text]) => <button type="button" className={selectedProduct === title ? "product-card active" : "product-card"} key={title} onClick={() => setSelectedProduct(title)}><span>Solution</span><h3>{title}</h3><p>{text}</p><strong>Explore solution <ArrowRight size={15} aria-hidden="true" /></strong></button>)}</div><article className="product-detail-panel" aria-live="polite"><span>Selected solution</span><h3>{selectedProduct}</h3><p>{detail.bestFor}</p><div><strong>What it includes</strong><ul>{detail.includes.map((item) => <li key={item}><CheckCircle2 size={15} aria-hidden="true" />{item}</li>)}</ul></div><p><strong>Business outcome:</strong> {detail.outcome}</p></article></div></div></section>;
}

function InsightsSection({ navigate }) {
  const insightRoutes = ["/products", "/capabilities", "/placements", "/capabilities"];
  return <section className="dark-feed"><div className="container"><h2>What we deliver for global clients and career partners</h2><div className="feed-grid">{insights.map(([title, text], index) => <article className={"feed-card feed-card-" + index} key={title}><div><h3>{title}</h3><p>{text}</p><Link to={insightRoutes[index]} navigate={navigate}>View Details <ArrowRight size={16} /></Link></div></article>)}</div><Link className="view-all" to="/capabilities" navigate={navigate}>View All <ArrowRight size={18} /></Link></div></section>;
}

function CaseStudyBand({ navigate }) {
  return <section className="case-band"><div className="container case-layout"><div className="case-copy reveal"><span>Smarter by Design</span><h2>Technology Meets Opportunity</h2><h3>Software delivery with career outcomes</h3><p>We combine product engineering, automation and placement support so organisations can scale while learners and professionals move closer to real opportunities.</p><Link to="/contact" navigate={navigate}>Start a Discussion <ArrowRight size={18} /></Link></div><div className="case-media reveal"><img src="/assets/youth-uk-ready.png" alt="Learners and professionals collaborating on digital projects" /></div></div></section>;
}

function GlobalPresenceSection({ navigate }) {
  return <section className="presence-band"><div className="container presence-layout"><div className="presence-copy reveal"><h2>India Office.<br />UK Office.<br />Global Services.</h2><p>With teams connected across Noida and London, Essex, LearnifyOps supports businesses, education partners and career programmes with worldwide service delivery.</p><Link to="/about" navigate={navigate}>Read More <ArrowRight size={18} /></Link></div><div className="presence-grid reveal">{globalStats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></div></section>;
}

function PartnerBand({ navigate }) {
  return <section className="partner-band"><div className="container"><h2>International partnerships and delivery ecosystem</h2><div className="partner-row">{partnerAreas.map((item) => <span key={item}>{item}</span>)}</div><Link to="/contact" navigate={navigate}>Discuss a Partnership <ArrowRight size={18} /></Link></div></section>;
}

function PlacementsSection() {
  return <section className="section placements"><div className="container placement-layout"><div className="placement-image reveal"><img src="/assets/youth-uk-ready.png" alt="Students preparing for digital careers with mentors" /></div><div className="copy-block reveal"><Eyebrow icon={GraduationCap}>Placements</Eyebrow><h2>Placement and job assistance with global career pathways.</h2><p>We support candidates with professional readiness, job applications, interview preparation and international education connections, including Canada.</p><div className="track-list">{placementTracks.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section>;
}

function ProcessSection() {
  return <section className="impact-band"><div className="container impact-layout reveal"><div><Eyebrow icon={Target}>Delivery Model</Eyebrow><h2>A delivery model built for quality, scale and clarity.</h2></div><div className="impact-steps">{process.map(({ metric, title, text }) => <article key={metric}><span>{metric}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function StoriesSection() {
  return <section className="section stories"><div className="container"><SectionIntro eyebrow="Solutions" icon={BarChart3} title="Focused products with practical business value." text="Our in-house solutions are designed to simplify operations, improve visibility and support growth." /><div className="story-grid">{stories.map(([title, text]) => <article className="story-card reveal" key={title}><span>Solution focus</span><h3>{title}</h3><p>{text}</p><a href="/contact">Discuss readiness</a></article>)}</div></div></section>;
}

function StandardsSection() {
  return <section className="section standards"><div className="container"><SectionIntro eyebrow="Trust" icon={ClipboardCheck} title="Built for professional global delivery." text="We focus on clarity, scalability and dependable execution across technology, automation and career-support services." /><div className="standards-grid">{standards.map(({ icon: Icon, title, text }) => <article className="standard-card reveal" key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function ContactSection({ handleSubmit, formState, formStatus }) {
  return <section className="section contact"><div className="container contact-layout"><div className="copy-block reveal"><Eyebrow icon={MessageSquareText}>Contact</Eyebrow><h2>Tell us what you want to build, automate or achieve.</h2><p>Speak with LearnifyOps about SaaS products, AI automation, software development, placement support or international partnership opportunities.</p><div className="contact-lines"><a href="mailto:contact@learnifyops.com"><Mail size={18} aria-hidden="true" />contact@learnifyops.com</a><a href="tel:+447520664011"><Phone size={18} aria-hidden="true" />+44 7520 664011</a><span><MapPin size={18} aria-hidden="true" />UK office: London, Essex, United Kingdom</span><span><MapPin size={18} aria-hidden="true" />India office: Noida, Uttar Pradesh, India</span><span><BriefcaseBusiness size={18} aria-hidden="true" />Global services available remotely</span></div></div><form className="contact-form reveal" onSubmit={handleSubmit} aria-describedby="privacy-help form-status"><label htmlFor="name">Name<input id="name" type="text" name="name" placeholder="Your name" autoComplete="name" required /></label><label htmlFor="email">Email<input id="email" type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label><label htmlFor="phone">Phone<input id="phone" type="tel" name="phone" placeholder="+44 / +91..." autoComplete="tel" /></label><label htmlFor="type">Interest<select id="type" name="type" required><option>SaaS product development</option><option>AI automation</option><option>Software development</option><option>Placement and job assistance</option><option>Automated job application system</option><option>LMS or training platform</option><option>University partnership</option></select></label><label htmlFor="message">Message<textarea id="message" name="message" placeholder="Tell us about your requirement" required /></label><label className="consent-row" htmlFor="consent"><input id="consent" name="consent" type="checkbox" required />I agree to be contacted about this enquiry and understand my details should be handled according to the privacy notice.</label><p id="privacy-help" className="form-help">Your details are used only to respond to your enquiry.</p><button className="btn btn-primary" type="submit" disabled={formState === "saving"}>{formState === "saving" ? "Saving..." : "Submit Enquiry"}<ArrowRight size={18} aria-hidden="true" /></button><p id="form-status" className={"form-status " + formState} role="status">{formStatus}</p></form></div></section>;
}

function FinalCta({ navigate }) {
  return <section className="final-cta"><div className="container final-cta-inner reveal"><Handshake size={34} aria-hidden="true" /><h2>Build scalable software. Automate operations. Support global careers.</h2><Link className="btn btn-secondary" to="/contact" navigate={navigate}>Contact LearnifyOps</Link></div></section>;
}

function HomePage({ navigate, contactProps }) {
  return <><Hero navigate={navigate} /><SmartIntro navigate={navigate} /><InsightsSection navigate={navigate} /><CaseStudyBand navigate={navigate} /><GlobalPresenceSection navigate={navigate} /><PartnerBand navigate={navigate} /><CapabilitiesSection navigate={navigate} /><ProductsSection /><PlacementsSection /><ProcessSection /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}
function AboutPage({ navigate }) {
  return <><PageHero eyebrow="About" icon={Building2} title="A global technology and career-solutions company with offices in India and the UK." text="LearnifyOps delivers SaaS products, AI automation, software development and placement support from Noida and London, Essex to clients and partners worldwide." /><ProofStrip /><ProcessSection /><StoriesSection /><FinalCta navigate={navigate} /></>;
}
function CapabilitiesPage({ navigate }) {
  return <><PageHero eyebrow="Capabilities" icon={Layers3} title="SaaS, AI automation, software development and placement support under one roof." text="Capabilities shaped for organisations that need reliable execution, scalable technology and clear outcomes." image="/assets/global-ai-hero.png" /><CapabilitiesSection navigate={navigate} /><ProductsSection /><FinalCta navigate={navigate} /></>;
}
function IndustriesPage({ navigate }) {
  return <><PageHero eyebrow="Industries" icon={Building2} title="Technology solutions for education, business and global career ecosystems." text="We support organisations that need better software, stronger workflows and practical placement or learning outcomes." /><IndustriesSection /><StoriesSection /><FinalCta navigate={navigate} /></>;
}
function ProductsPage({ navigate }) {
  return <><PageHero eyebrow="Products" icon={DatabaseZap} title="In-house software products for learning, automation and job assistance." text="Automated job application systems, LMS platforms, workflow automation tools and custom SaaS products built for daily execution." /><ProductsSection /><CapabilitiesSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}
function PlacementsPage({ navigate }) {
  return <><PageHero eyebrow="Placements" icon={GraduationCap} title="Placement and job assistance for globally focused candidates." text="Structured support for resumes, job applications, interview readiness and international education pathways, including Canada." image="/assets/youth-uk-ready.png" /><PlacementsSection /><ProcessSection /><FinalCta navigate={navigate} /></>;
}
function ContactPage({ navigate, contactProps }) {
  return <><PageHero eyebrow="Contact" icon={MessageSquareText} title="Talk to LearnifyOps about your next product, automation or career-support goal." text="Use the form for SaaS products, AI automation, software development, placement assistance or international partnerships." image="/assets/youth-uk-ready.png" /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}

function Footer({ navigate }) {
  return <footer className="footer"><div className="container footer-grid"><div><Link className="brand footer-brand" to="/" navigate={navigate}><BrandLogo /></Link><p>SaaS products, AI automation, software development and placement assistance from offices in India and the UK, delivered for global clients and partners.</p></div><div className="legal-grid" aria-label="Legal and policy information"><span>UK office: London, Essex, United Kingdom</span><span>India office: Noida, Uttar Pradesh, India</span><span>Global services: SaaS products, AI automation, software development, LMS, job application systems and placement support</span><span><Link to="/about" navigate={navigate}>About</Link> / <Link to="/capabilities" navigate={navigate}>Capabilities</Link> / <Link to="/products" navigate={navigate}>Products</Link> / <Link to="/contact" navigate={navigate}>Contact</Link></span><span>Copyright 2026 LearnifyOps. All rights reserved.</span></div></div></footer>;
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
    document.title = path === "/" ? "LearnifyOps | SaaS, AI Automation and Job Assistance" : "LearnifyOps | " + page;
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
      setFormStatus("Thank you. Your enquiry has been received. Reference: " + result.enquiryId);
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormStatus(error.message || "Could not save the enquiry. Please try again.");
    }
  };

  const contactProps = { handleSubmit, formState, formStatus };
  const pages = {
    "/": <HomePage navigate={navigate} contactProps={contactProps} />,
    "/about": <AboutPage navigate={navigate} />,
    "/capabilities": <CapabilitiesPage navigate={navigate} />,
    "/industries": <IndustriesPage navigate={navigate} />,
    "/products": <ProductsPage navigate={navigate} />,
    "/placements": <PlacementsPage navigate={navigate} />,
    "/contact": <ContactPage navigate={navigate} contactProps={contactProps} />
  };

  return <><a className="skip-link" href="#main">Skip to content</a><Header path={path} navigate={navigate} /><main id="main">{pages[path] || pages["/"]}</main>{!cookieDismissed && <div className="cookie-note" role="region" aria-label="Cookie notice"><p><strong>Cookie notice:</strong> this website uses essential browser storage only to remember this message. No analytics or marketing cookies are active.</p><button type="button" onClick={() => { localStorage.setItem("learnifyops-cookie-note", "dismissed"); setCookieDismissed(true); }}>OK</button></div>}<Footer navigate={navigate} /></>;
}

createRoot(document.getElementById("root")).render(<App />);
