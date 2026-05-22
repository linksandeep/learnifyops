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
  { icon: Globe2, title: "UK and India registered", text: "A registered presence in both markets with remote-first service delivery for clients worldwide." },
  { icon: DatabaseZap, title: "SaaS product mindset", text: "CRM, portals, dashboards, workflow automation and data-led systems built for daily use." },
  { icon: GraduationCap, title: "Placement pathways", text: "Career readiness, internships, live project practice and employer-focused digital skills." }
];

const capabilities = [
  { icon: Code2, title: "SaaS Product Development", text: "Custom CRM, LMS, ERP modules, portals, dashboards, subscriptions, APIs and admin systems for growing organisations." },
  { icon: CloudCog, title: "AI and Automation", text: "Lead routing, onboarding flows, internal knowledge, reporting, support replies and repetitive operations automated with care." },
  { icon: BarChart3, title: "Digital Growth", text: "SEO, paid campaigns, content systems, analytics, landing pages and conversion journeys for education and B2B markets." },
  { icon: Users, title: "Placement and Training", text: "Internship support, interview preparation, practical projects, digital marketing, coding and product operations training." },
  { icon: Workflow, title: "Business Process Transformation", text: "Map scattered manual work into clear workflows, ownership, service levels, dashboards and measurable improvement loops." },
  { icon: ShieldCheck, title: "Trust and Compliance Foundations", text: "Accessible UI, privacy-aware forms, security signals, clean content structure and launch-ready business information." }
];

const industries = [
  ["Education and Training", "Admissions, learner journeys, LMS, training delivery, cohorts, mentors, outcomes and placement readiness."],
  ["Startups and SMEs", "Websites, SaaS MVPs, CRM visibility, lead management, automation and growth systems."],
  ["Recruitment and Placement", "Candidate pipelines, skill tracking, employer communication, interview prep and placement reporting."],
  ["Professional Services", "Client portals, enquiry workflows, document handling, reporting and service operations."],
  ["Retail and Local Business", "Digital storefronts, marketing operations, customer engagement and analytics dashboards."],
  ["Nonprofits and Community", "Programme management, youth initiatives, grant reporting, training access and impact measurement."]
];

const products = [
  ["OpsDashboard CRM", "Consultation pipeline, task queues, ownership, follow-up automation and management visibility."],
  ["Learner and Placement Portal", "Student profiles, skills progress, CV readiness, interview activity, employer matching and outcomes."],
  ["AI Workflow Assistant", "Internal knowledge, support drafts, onboarding checklists, reports and handover automation."],
  ["Growth Intelligence Hub", "Campaign data, lead sources, website conversions, content performance and executive reporting."]
];

const productDetails = {
  "OpsDashboard CRM": {
    bestFor: "Education providers, consultancies, placement teams and growing service businesses.",
    includes: ["Lead and enquiry tracking", "Consultation pipelines", "Team task ownership", "Follow-up reminders", "Reporting dashboards", "Role-based admin access"],
    outcome: "A clearer operating view where every enquiry, task and client conversation has ownership and measurable progress."
  },
  "Learner and Placement Portal": {
    bestFor: "Training institutes, placement programmes, universities and career-readiness teams.",
    includes: ["Learner profiles", "Skill progress tracking", "CV and resume readiness", "Interview activity", "Employer matching", "Placement outcome reports"],
    outcome: "A structured journey from training to employability, with visible progress for learners, mentors and employers."
  },
  "AI Workflow Assistant": {
    bestFor: "Teams that repeat onboarding, reporting, support, documentation or internal handover work.",
    includes: ["Knowledge-base assistant", "Support reply drafts", "Report summaries", "Onboarding checklists", "Process prompts", "Human approval workflows"],
    outcome: "Faster service delivery without losing quality, control or the human review needed for professional operations."
  },
  "Growth Intelligence Hub": {
    bestFor: "Businesses that need marketing visibility, campaign accountability and better conversion decisions.",
    includes: ["Campaign performance views", "Lead source tracking", "Landing page analytics", "Content planning", "Conversion reporting", "Management summaries"],
    outcome: "A practical growth command centre that connects marketing activity with enquiries, sales readiness and business outcomes."
  }
};

const placementTracks = [
  ["Software and Web Development", "React, front-end implementation, dashboards, QA, Git workflows and real product tasks."],
  ["Digital Marketing", "SEO, landing pages, social campaigns, analytics, content planning and campaign reporting."],
  ["Product Operations", "Workflow mapping, client onboarding, testing, documentation, CRM setup and project coordination."],
  ["AI and Automation", "Prompt workflows, support automation, reporting systems, internal tools and process improvement." ]
];

const process = [
  { metric: "01", title: "Discover the operation", text: "Clarify the business model, learners, users, data, bottlenecks, growth goals and placement outcomes." },
  { metric: "02", title: "Design the future state", text: "Shape journeys, dashboards, workflows, content structure and product architecture before build starts." },
  { metric: "03", title: "Build, train and launch", text: "Deliver software, automation, marketing assets and training pathways with practical handover." },
  { metric: "04", title: "Measure and improve", text: "Track adoption, conversion, learner outcomes, service quality and operational efficiency over time." }
];

const stories = [
  ["Placement engine for digital careers", "A structured pathway that turns training activity into visible skills, interview readiness and employer-facing candidate profiles."],
  ["CRM clarity for growing teams", "A central operating view for enquiries, consultations, follow-ups, owners and daily priorities."],
  ["AI-assisted service delivery", "Reusable workflow assistants for reporting, onboarding, support drafts and handover notes." ]
];

const standards = [
  { icon: ShieldCheck, title: "Privacy aware", text: "Focused enquiry fields, consent capture and space for full UK GDPR policy detail before public launch." },
  { icon: FileCheck2, title: "Accessible structure", text: "Semantic layout, readable contrast, keyboard access, responsive pages and reduced-motion support." },
  { icon: ClipboardCheck, title: "Business confidence", text: "Visible contact details, office address, legal placeholders, policy paths and clear service information." }
];

const insights = [
  ["SaaS and CRM products for growing teams", "Build portals, dashboards, workflows and admin systems that turn daily operations into measurable performance."],
  ["AI automation for service delivery", "Automate reports, onboarding, support drafts, lead routing and internal knowledge without losing human quality."],
  ["Placement pathways for digital careers", "Prepare candidates with resumes, interviews, live projects, employer readiness and practical digital capability."],
  ["Digital marketing that creates demand", "SEO, paid campaigns, content operations, analytics and conversion journeys for education and B2B services."]
];

const globalStats = [
  ["2", "Registered markets: UK and India"],
  ["6", "Service domains across tech, growth and talent"],
  ["4", "Placement tracks for career readiness"],
  ["Global", "Worldwide remote-first service delivery"],
  ["100+", "Workflow and learning journeys we can map"],
  ["AI", "Automation-enabled delivery model"]
];

const partnerAreas = ["SaaS", "AI Automation", "Digital Marketing", "Resume Support", "Job Support", "Interview Prep", "Placements", "Worldwide Delivery"];

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
  return <span className="brand-lockup" aria-label="learnifyops"><span className="brand-mark" aria-hidden="true">L</span><span className="brand-name">learnifyops</span></span>;
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        <Link className="brand" to="/" navigate={navigate} onNavigate={() => setOpen(false)} aria-label="learnifyops home"><BrandLogo /></Link>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
        <Search className="search-icon" size={31} aria-hidden="true" />
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
  const backgroundImage = "linear-gradient(90deg, rgba(5, 15, 32, 0.96), rgba(5, 15, 32, 0.66)), url(" + image + ")";
  return <section className="page-hero"><div className="page-hero-media" style={{ backgroundImage }} aria-hidden="true" /><div className="container page-hero-inner reveal visible"><Eyebrow icon={icon}>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p></div></section>;
}

function Hero({ navigate }) {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal visible">
          <Eyebrow icon={Globe2}>Digital transformation, SaaS products and placement pathways</Eyebrow>
          <h1>OUTSKILL<br />THE FUTURE</h1>
          <p>AI-powered services, SaaS products, digital growth and placement support from our UK and India registered company for organisations worldwide.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact" navigate={navigate}>Make Your Business Smarter <ArrowRight size={18} aria-hidden="true" /></Link>
            <Link className="btn btn-secondary" to="/capabilities" navigate={navigate}>Explore Capabilities</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmartIntro({ navigate }) {
  return <section className="smart-intro"><div className="container smart-intro-inner reveal"><h2>Your competition is not your competition, it is the future.</h2><p>With SaaS, AI automation, digital marketing, resume support, job support and interview readiness, learnifyops helps businesses scale smarter and helps people become placement ready.</p><div className="intro-links"><Link to="/contact" navigate={navigate}>Make Your Business Smarter Today <ArrowRight size={18} /></Link><Link to="/placements" navigate={navigate}>Explore Placement Programmes <ArrowRight size={18} /></Link></div></div></section>;
}

function ProofStrip() {
  return <section className="proof-strip" aria-label="Credibility highlights"><div className="container proof-grid reveal">{proofPoints.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={22} aria-hidden="true" /><strong>{title}</strong><span>{text}</span></article>)}</div></section>;
}

function CapabilitiesSection({ navigate }) {
  return <section className="section capabilities"><div className="container"><SectionIntro eyebrow="Capabilities" icon={Layers3} title="Combining domain understanding with continuous digital execution." text="Inspired by enterprise transformation firms, learnifyops brings software, automation, marketing and placement delivery into one practical operating partner." /><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article className="capability-card reveal" key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p><Link to="/contact" navigate={navigate}>Discuss this <ChevronRight size={16} aria-hidden="true" /></Link></article>)}</div></div></section>;
}

function IndustriesSection() {
  return <section className="section industries"><div className="container"><SectionIntro eyebrow="Industries" icon={Building2} title="Own the future on your terms." text="Focused solutions for organisations that need cleaner operations, better learner outcomes and faster digital execution." /><div className="industry-grid">{industries.map(([title, text]) => <article className="industry-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(products[0][0]);
  const detail = productDetails[selectedProduct];
  return <section className="section products"><div className="container product-layout"><div className="product-console reveal" aria-label="SaaS product console"><div className="console-top"><span>Product suite</span><strong>Build-ready</strong></div><div className="console-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div><ul>{products.map(([name]) => <li key={name} className={selectedProduct === name ? "active" : ""}><CheckCircle2 size={16} aria-hidden="true" />{name}</li>)}</ul></div><div className="copy-block reveal"><Eyebrow icon={DatabaseZap}>SaaS Products</Eyebrow><h2>Systems that make operations visible, measurable and easier to scale.</h2><p>Use LearnifyOps as your SaaS product studio for CRM, placement portals, AI workflow assistants and growth intelligence products.</p><div className="module-list product-picker">{products.map(([title, text]) => <button type="button" className={selectedProduct === title ? "product-card active" : "product-card"} key={title} onClick={() => setSelectedProduct(title)}><span>Product</span><h3>{title}</h3><p>{text}</p><strong>View complete information <ArrowRight size={15} aria-hidden="true" /></strong></button>)}</div><article className="product-detail-panel" aria-live="polite"><span>Selected product</span><h3>{selectedProduct}</h3><p>{detail.bestFor}</p><div><strong>What it includes</strong><ul>{detail.includes.map((item) => <li key={item}><CheckCircle2 size={15} aria-hidden="true" />{item}</li>)}</ul></div><p><strong>Business outcome:</strong> {detail.outcome}</p></article></div></div></section>;
}

function InsightsSection({ navigate }) {
  const insightRoutes = ["/products", "/capabilities", "/placements", "/capabilities"];
  return <section className="dark-feed"><div className="container"><h2>Shaping the future with AI, SaaS and talent at the core</h2><div className="feed-grid">{insights.map(([title, text], index) => <article className={"feed-card feed-card-" + index} key={title}><div><h3>{title}</h3><p>{text}</p><Link to={insightRoutes[index]} navigate={navigate}>View Details <ArrowRight size={16} /></Link></div></article>)}</div><Link className="view-all" to="/capabilities" navigate={navigate}>View All <ArrowRight size={18} /></Link></div></section>;
}

function CaseStudyBand({ navigate }) {
  return <section className="case-band"><div className="container case-layout"><div className="case-copy reveal"><span>Smarter by Design</span><h2>Innovation Meets Execution</h2><h3>From digital services to placement outcomes</h3><p>We connect software delivery, AI-enabled operations, marketing execution and career support so organisations can grow while talent becomes job ready.</p><Link to="/contact" navigate={navigate}>Read More <ArrowRight size={18} /></Link></div><div className="case-media reveal"><img src="/assets/youth-uk-ready.png" alt="Learners and professionals collaborating on digital projects" /><span className="play-button">▶</span></div></div></section>;
}

function GlobalPresenceSection({ navigate }) {
  return <section className="presence-band"><div className="container presence-layout"><div className="presence-copy reveal"><h2>AI Powered.<br />Human Led.<br />Future Ready.</h2><p>LearnifyOps is registered in the UK and India, with remote-first delivery for clients, learners and partner organisations worldwide.</p><Link to="/about" navigate={navigate}>Read More <ArrowRight size={18} /></Link></div><div className="presence-grid reveal">{globalStats.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div></div></section>;
}

function PartnerBand({ navigate }) {
  return <section className="partner-band"><div className="container"><h2>Partnerships that power smarter businesses</h2><div className="partner-row">{partnerAreas.map((item) => <span key={item}>{item}</span>)}</div><Link to="/contact" navigate={navigate}>View Our Global Service Network <ArrowRight size={18} /></Link></div></section>;
}

function PlacementsSection() {
  return <section className="section placements"><div className="container placement-layout"><div className="placement-image reveal"><img src="/assets/youth-uk-ready.png" alt="Students preparing for digital careers with mentors" /></div><div className="copy-block reveal"><Eyebrow icon={GraduationCap}>Placements</Eyebrow><h2>Placement support built around practical digital capability.</h2><p>We provide structured training, real project exposure, CV preparation, interview readiness and placement pathways for students and early-career talent.</p><div className="track-list">{placementTracks.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section>;
}

function ProcessSection() {
  return <section className="impact-band"><div className="container impact-layout reveal"><div><Eyebrow icon={Target}>Delivery Model</Eyebrow><h2>Transformation that moves from strategy to measurable outcomes.</h2></div><div className="impact-steps">{process.map(({ metric, title, text }) => <article key={metric}><span>{metric}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function StoriesSection() {
  return <section className="section stories"><div className="container"><SectionIntro eyebrow="Success Stories" icon={BarChart3} title="Smarter by design. Practical in execution." text="Proof-style examples of how learnifyops can combine systems, skills and service delivery." /><div className="story-grid">{stories.map(([title, text]) => <article className="story-card reveal" key={title}><span>Case focus</span><h3>{title}</h3><p>{text}</p><a href="/contact">Readiness discussion</a></article>)}</div></div></section>;
}

function StandardsSection() {
  return <section className="section standards"><div className="container"><SectionIntro eyebrow="Trust" icon={ClipboardCheck} title="Built with credibility foundations from the start." text="For international buyers, trust is visible in structure, content, accessibility, privacy and operational clarity." /><div className="standards-grid">{standards.map(({ icon: Icon, title, text }) => <article className="standard-card reveal" key={title}><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function ContactSection({ handleSubmit, formState, formStatus }) {
  return <section className="section contact"><div className="container contact-layout"><div className="copy-block reveal"><Eyebrow icon={MessageSquareText}>Contact</Eyebrow><h2>Start a focused conversation with learnifyops.</h2><p>Tell us whether you need a SaaS product, website, AI workflow, marketing system, placement support or a complete digital transformation roadmap.</p><div className="contact-lines"><a href="mailto:info@britinstitute.uk"><Mail size={18} aria-hidden="true" />info@britinstitute.uk</a><a href="tel:+447520664011"><Phone size={18} aria-hidden="true" />+44 7520 664011</a><span><MapPin size={18} aria-hidden="true" />Office 7084, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, UK</span><span><BriefcaseBusiness size={18} aria-hidden="true" />Monday to Friday, 9am to 5pm</span></div></div><form className="contact-form reveal" onSubmit={handleSubmit} aria-describedby="privacy-help form-status"><label htmlFor="name">Name<input id="name" type="text" name="name" placeholder="Your name" autoComplete="name" required /></label><label htmlFor="email">Email<input id="email" type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label><label htmlFor="phone">Phone<input id="phone" type="tel" name="phone" placeholder="+44..." autoComplete="tel" /></label><label htmlFor="type">Interest<select id="type" name="type" required><option>SaaS product development</option><option>Placement programme</option><option>AI automation</option><option>Website or mobile app</option><option>Digital marketing</option><option>Business transformation</option><option>Partnership</option></select></label><label htmlFor="message">Message<textarea id="message" name="message" placeholder="Tell us about your goal" required /></label><label className="consent-row" htmlFor="consent"><input id="consent" name="consent" type="checkbox" required />I agree to be contacted about this enquiry and understand my details should be handled according to the privacy notice.</label><p id="privacy-help" className="form-help">Only the details you enter are used for this enquiry. Add a full UK GDPR privacy notice before launching with a live backend.</p><button className="btn btn-primary" type="submit" disabled={formState === "saving"}>{formState === "saving" ? "Saving..." : "Contact Us"}<ArrowRight size={18} aria-hidden="true" /></button><p id="form-status" className={"form-status " + formState} role="status">{formStatus}</p></form></div></section>;
}

function FinalCta({ navigate }) {
  return <section className="final-cta"><div className="container final-cta-inner reveal"><Handshake size={34} aria-hidden="true" /><h2>Build the system. Train the people. Improve the outcome.</h2><Link className="btn btn-secondary" to="/contact" navigate={navigate}>Make Your Business Smarter</Link></div></section>;
}

function HomePage({ navigate, contactProps }) {
  return <><Hero navigate={navigate} /><SmartIntro navigate={navigate} /><InsightsSection navigate={navigate} /><CaseStudyBand navigate={navigate} /><GlobalPresenceSection navigate={navigate} /><PartnerBand navigate={navigate} /><CapabilitiesSection navigate={navigate} /><ProductsSection /><PlacementsSection /><ProcessSection /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}
function AboutPage({ navigate }) {
  return <><PageHero eyebrow="About" icon={Building2} title="A practical transformation partner for businesses, institutions and young talent." text="LearnifyOps is registered in the UK and India and provides SaaS, AI automation, digital growth and placement services to clients worldwide." /><ProofStrip /><ProcessSection /><StoriesSection /><FinalCta navigate={navigate} /></>;
}
function CapabilitiesPage({ navigate }) {
  return <><PageHero eyebrow="Capabilities" icon={Layers3} title="Software, AI, marketing and placement delivery under one roof." text="Capabilities shaped for organisations that need execution, not just advice." image="/assets/global-ai-hero.png" /><CapabilitiesSection navigate={navigate} /><ProductsSection /><FinalCta navigate={navigate} /></>;
}
function IndustriesPage({ navigate }) {
  return <><PageHero eyebrow="Industries" icon={Building2} title="Digital transformation for education, business and placement ecosystems." text="Focused industry understanding helps each solution fit the actual workflow, user and outcome." /><IndustriesSection /><StoriesSection /><FinalCta navigate={navigate} /></>;
}
function ProductsPage({ navigate }) {
  return <><PageHero eyebrow="Products" icon={DatabaseZap} title="SaaS products that turn operations into measurable systems." text="CRM, placement portals, AI workflow assistants and growth intelligence tools built for daily execution." /><ProductsSection /><CapabilitiesSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}
function PlacementsPage({ navigate }) {
  return <><PageHero eyebrow="Placements" icon={GraduationCap} title="Placement-ready talent through practical digital training." text="Structured pathways for students and young professionals across software, marketing, AI automation and product operations." image="/assets/youth-uk-ready.png" /><PlacementsSection /><ProcessSection /><FinalCta navigate={navigate} /></>;
}
function ContactPage({ navigate, contactProps }) {
  return <><PageHero eyebrow="Contact" icon={MessageSquareText} title="Talk to learnifyops about what you want to build, improve or place." text="Use the form for SaaS products, placement programmes, digital services, AI automation or partnerships." image="/assets/youth-uk-ready.png" /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}

function Footer({ navigate }) {
  return <footer className="footer"><div className="container footer-grid"><div><Link className="brand footer-brand" to="/" navigate={navigate}><BrandLogo /></Link><p>SaaS product development, AI operations, digital growth and placement-focused training from registered UK and India operations, delivered worldwide.</p></div><div className="legal-grid" aria-label="Legal and policy information"><span>UK registered office: Office 7084, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, UK</span><span>India registration details: add registered entity name, CIN/GST and office address before public launch</span><span><Link to="/about" navigate={navigate}>About</Link> / <Link to="/capabilities" navigate={navigate}>Capabilities</Link> / <Link to="/products" navigate={navigate}>Products</Link> / <Link to="/contact" navigate={navigate}>Contact</Link></span><span>Copyright 2026 LearnifyOps. All rights reserved.</span></div></div></footer>;
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
    document.title = path === "/" ? "learnifyops | SaaS, Placements and Digital Transformation" : "learnifyops | " + page;
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
    "/about": <AboutPage navigate={navigate} />,
    "/capabilities": <CapabilitiesPage navigate={navigate} />,
    "/industries": <IndustriesPage navigate={navigate} />,
    "/products": <ProductsPage navigate={navigate} />,
    "/placements": <PlacementsPage navigate={navigate} />,
    "/contact": <ContactPage navigate={navigate} contactProps={contactProps} />
  };

  return <><a className="skip-link" href="#main">Skip to content</a><Header path={path} navigate={navigate} /><main id="main">{pages[path] || pages["/"]}</main>{!cookieDismissed && <div className="cookie-note" role="region" aria-label="Cookie notice"><p><strong>Cookie notice:</strong> this local build uses essential browser storage only to remember this message. No analytics or marketing cookies are active.</p><button type="button" onClick={() => { localStorage.setItem("learnifyops-cookie-note", "dismissed"); setCookieDismissed(true); }}>OK</button></div>}<Footer navigate={navigate} /></>;
}

createRoot(document.getElementById("root")).render(<App />);
