import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Accessibility,
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Code2,
  Cookie,
  DatabaseZap,
  FileCheck2,
  GraduationCap,
  Layers3,
  Laptop,
  LockKeyhole,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquareText,
  Phone,
  Rocket,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Products", "products"],
  ["Programmes", "programmes"],
  ["UK Ready", "uk-ready"],
  ["Contact", "contact"]
];

const audiences = [
  ["UK businesses & startups", "Custom SaaS, CRM, dashboards, automation, and conversion-focused digital systems for teams that need reliable growth."],
  ["Schools & training providers", "LMS, student management, course delivery, reporting, and education workflows designed around real learner outcomes."],
  ["Students & young professionals", "Internships, workshops, mentorship, coding practice, digital marketing projects, and career-ready portfolio experience."]
];

const services = [
  {
    icon: Code2,
    title: "SaaS Product Development",
    text: "Secure multi-tenant platforms, CRM, LMS, ERP, APIs, admin dashboards, subscription systems, and cloud products built for scale.",
    cta: "Request a consultation"
  },
  {
    icon: Laptop,
    title: "Web & App Development",
    text: "Responsive websites, web apps, e-commerce experiences, mobile-friendly portals, CMS builds, and UX flows that are fast and accessible.",
    cta: "Get a quote"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Learner, mentor, sales, and operations apps shaped around everyday use, clear journeys, and cross-platform delivery.",
    cta: "Plan an app"
  },
  {
    icon: Bot,
    title: "AI Automation",
    text: "Practical automation for follow-ups, onboarding, reporting, support, data routing, and repetitive operations.",
    cta: "Automate workflows"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    text: "SEO, social content, paid campaigns, analytics, email flows, and growth pages for education, SaaS, and local UK businesses.",
    cta: "Start a campaign"
  },
  {
    icon: GraduationCap,
    title: "Training & Youth Programmes",
    text: "Internships, live workshops, mentorship, hackathons, CV support, and project-based learning for digital careers.",
    cta: "Explore programmes"
  }
];

const products = [
  ["EduManage LMS", "Course builder, student progress, attendance, mentor notes, gradebook, parent or organisation portal, and learner analytics."],
  ["OpsDashboard CRM", "Sales pipeline, follow-ups, consultation tracking, automation queues, performance reporting, and task visibility."],
  ["AI Workflow Assistant", "Internal knowledge, response drafts, onboarding checklists, service handovers, and admin support workflows."],
  ["School & Cohort Hub", "Admissions, cohorts, timetable notes, programme quality tracking, communication logs, and outcome reporting."]
];

const features = [
  ["Role-based access", "Keep learners, mentors, admins, managers, and clients in focused workspaces."],
  ["Automation queues", "Route tasks, reminders, emails, onboarding actions, and project updates without messy spreadsheets."],
  ["Learning analytics", "Track attendance, progress, employability outcomes, and programme quality with clear reporting."],
  ["CRM visibility", "Give teams one place to manage leads, consultations, follow-ups, demos, and conversion."],
  ["Accessible UX", "Readable contrast, keyboard-friendly controls, clear labels, and simple form flows."],
  ["SEO-ready structure", "Clear headings, internal journeys, metadata, schema, alt text, and fast responsive pages."]
];

const stats = [
  ["120+", "Digital workflows mapped"],
  ["35+", "SaaS modules planned"],
  ["5,000+", "Learning hours enabled"],
  ["3", "Core audiences served"]
];

const compliance = [
  { icon: ShieldCheck, title: "Privacy-first enquiries", text: "Forms ask only for useful enquiry details, include a consent checkbox, and are ready for a proper privacy notice before launch." },
  { icon: Cookie, title: "Cookie clarity", text: "The current build uses no analytics or marketing cookies. If GA4, ads, or pixels are added later, a consent banner should control them." },
  { icon: Accessibility, title: "Accessible by design", text: "Semantic headings, labels, skip link, focus states, keyboard navigation, alt text, and reduced-motion support are included." },
  { icon: Building2, title: "UK business signals", text: "The footer and contact area show UK address, phone, email, office hours, policy links, and company information placeholders." }
];

const roles = [
  ["Software Intern", "Build React interfaces, dashboards, and small product features with mentor review."],
  ["Digital Marketing Assistant", "Support SEO, content, social campaigns, analytics, and education-sector growth projects."],
  ["Junior Product Operations", "Map workflows, test SaaS modules, document requirements, and improve client onboarding."]
];

function BrandLogo({ footer = false }) {
  return (
    <span className={`brand-logo-css ${footer ? "footer-logo" : ""}`} aria-label="learnifyops">
      <span className="css-logo-mark" aria-hidden="true">
        <span className="logo-rays">
          <i style={{ "--angle": "-72deg", "--x": "-19px", "--y": "20px", "--w": "15px" }} />
          <i style={{ "--angle": "-48deg", "--x": "-9px", "--y": "3px", "--w": "13px" }} />
          <i style={{ "--angle": "0deg", "--x": "20px", "--y": "-8px", "--w": "14px" }} />
          <i style={{ "--angle": "44deg", "--x": "50px", "--y": "3px", "--w": "13px" }} />
          <i style={{ "--angle": "64deg", "--x": "63px", "--y": "21px", "--w": "15px" }} />
        </span>
        <span className="logo-bulb" />
        <span className="logo-filament" />
        <span className="logo-orbit" />
        <span className="logo-base"><i /><i /><i /></span>
      </span>
      <span className="logo-word">learnifyops</span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={() => setOpen(false)} aria-label="learnifyops home">
          <BrandLogo />
        </a>
        <button className="icon-btn nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <div className="nav-links">
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Eyebrow({ icon: Icon = Sparkles, children }) {
  return <span className="eyebrow"><Icon size={16} aria-hidden="true" /> {children}</span>;
}

function SectionTitle({ eyebrow, icon, title, text }) {
  return (
    <div className="section-title reveal">
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>UK-based SaaS, EdTech & youth empowerment company</Eyebrow>
          <h1>Transforming UK Businesses & Empowering Youth Through Technology</h1>
          <p>learnifyops builds custom SaaS products, web and mobile apps, digital marketing systems, and hands-on training programmes for organisations ready to modernise and young people ready to grow.</p>
          <div className="actions">
            <a className="btn primary" href="#contact">Get Started <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="btn secondary" href="#contact">Book a Consultation</a>
            <a className="btn ghost" href="#programmes">Explore Programmes</a>
          </div>
          <div className="trust-row" aria-label="Trust highlights">
            <span><ShieldCheck size={16} aria-hidden="true" /> UK-ready trust layer</span>
            <span><Accessibility size={16} aria-hidden="true" /> WCAG-minded UX</span>
            <span><GraduationCap size={16} aria-hidden="true" /> Internship pathways</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/assets/hero-uk-ready.png" alt="UK students, professionals, and business leaders collaborating with SaaS dashboards" />
          <div className="glass-card card-a"><strong>CRM + LMS</strong><span>one connected layer</span></div>
          <div className="glass-card card-b"><strong>AI Ops</strong><span>automation ready</span></div>
          <div className="mini-dashboard" aria-hidden="true">
            <span />
            <div><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDashboard() {
  return (
    <div className="dashboard reveal" aria-label="learnifyops dashboard preview">
      <aside aria-hidden="true"><span /><span /><span /><span /></aside>
      <div className="dash-main">
        <div className="dash-top"><span>learnifyops Cloud</span><b>Live</b></div>
        <div className="kpis">
          <p><strong>18.4k</strong><span>Learner records</span></p>
          <p><strong>64%</strong><span>Automation</span></p>
          <p><strong>128</strong><span>CRM tasks</span></p>
        </div>
        <div className="chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <ul className="dash-list">
          {products.map(([name]) => <li key={name}><CheckCircle2 size={16} aria-hidden="true" /> {name}</li>)}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [formStatus, setFormStatus] = useState("");
  const [formState, setFormState] = useState("idle");
  const [cookieDismissed, setCookieDismissed] = useState(() => localStorage.getItem("learnifyops-cookie-note") === "dismissed");

  useEffect(() => {
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
  }, []);

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
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to save enquiry.");
      }

      setFormState("success");
      setFormStatus(`Thank you. Your consultation enquiry has been saved. Reference: ${result.enquiryId}`);
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormStatus(error.message || "Could not save the enquiry. Please try again.");
    }
  };

  const dismissCookie = () => {
    localStorage.setItem("learnifyops-cookie-note", "dismissed");
    setCookieDismissed(true);
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />

        <section className="section trust-strip" aria-label="UK readiness highlights">
          <div className="container trust-grid reveal">
            <div><LockKeyhole size={22} aria-hidden="true" /><strong>Privacy-aware enquiries</strong><span>Consent statement included before submission.</span></div>
            <div><FileCheck2 size={22} aria-hidden="true" /><strong>SEO and schema ready</strong><span>Metadata and structured data prepared for launch.</span></div>
            <div><Scale size={22} aria-hidden="true" /><strong>UK business ready</strong><span>Essex contact details and legal footer areas included.</span></div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container split">
            <div className="copy reveal">
              <Eyebrow>About learnifyops</Eyebrow>
              <h2>Bridging technology and education for practical UK growth.</h2>
              <p>learnifyops is a UK-based EdTech and SaaS company built around one clear mission: empower businesses with better software while helping young people gain practical digital skills.</p>
              <p>Based in Ilford, Essex, the brand brings together SaaS product development, web and app design, digital marketing, automation, and training programmes in one modern technology partner.</p>
              <div className="check-list">
                <p><CheckCircle2 size={20} aria-hidden="true" /> Custom systems for startups, SMEs, schools, colleges, and training providers.</p>
                <p><CheckCircle2 size={20} aria-hidden="true" /> Internship and mentorship pathways shaped around real client projects.</p>
                <p><CheckCircle2 size={20} aria-hidden="true" /> Professional UK positioning for procurement, partnerships, and local search.</p>
              </div>
            </div>
            <div className="studio-card reveal">
              <div>
                <span>Mission</span>
                <h3>Turning ideas into software, and students into professionals.</h3>
              </div>
              <div className="studio-grid">
                <p><b>Innovate</b> cloud products</p>
                <p><b>Educate</b> future talent</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section audiences">
          <div className="container">
            <SectionTitle eyebrow="Who we help" icon={Target} title="Three audiences. One connected technology partner." text="The homepage speaks directly to buyers, education leaders, and young people without losing focus." />
            <div className="audience-grid">
              {audiences.map(([title, text]) => (
                <article className="audience-card reveal" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <SectionTitle eyebrow="Services" icon={Layers3} title="Digital services for serious modernisation." text="Clear offers for SaaS development, web and app delivery, digital marketing, AI automation, and youth training." />
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, cta }) => (
                <article className="service-card reveal" key={title}>
                  <span className="service-icon"><Icon size={24} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact">{cta} <ArrowRight size={15} aria-hidden="true" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section products" id="products">
          <div className="container product-grid">
            <ProductDashboard />
            <div className="copy reveal">
              <Eyebrow icon={ChartNoAxesColumnIncreasing}>SaaS product showcase</Eyebrow>
              <h2>Software solutions for learning, sales, and operations.</h2>
              <p>Use learnifyops as a product studio for proprietary platforms, or as a delivery partner for custom systems such as school LMS, admissions CRM, analytics dashboards, and AI-assisted workflow tools.</p>
              <div className="product-list">
                {products.map(([name, text]) => (
                  <article key={name}>
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <a className="text-link" href="#contact">Book a product demo <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section features">
          <div className="container">
            <SectionTitle eyebrow="Platform features" icon={DatabaseZap} title="Clear, connected, and ready to scale." text="The product language is written for decision-makers while still showing practical depth for technical conversations." />
            <div className="feature-grid">
              {features.map(([title, text]) => <article className="feature reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="stats-band" id="impact">
          <div className="container stats-grid reveal">
            {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="section youth" id="programmes">
          <div className="container split reverse">
            <div className="image-frame reveal">
              <img src="/assets/youth-uk-ready.png" alt="UK students learning technology skills with mentors" />
            </div>
            <div className="copy reveal">
              <Eyebrow icon={Users}>Youth empowerment</Eyebrow>
              <h2>Technology skills that create career momentum.</h2>
              <p>learnifyops supports students and young professionals through coding, online learning, mentorship, internships, hackathons, CV support, interview preparation, and live project practice.</p>
              <div className="tags"><span>Coding</span><span>Mentorship</span><span>Digital careers</span><span>Internships</span></div>
              <div className="role-list">
                {roles.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section compliance" id="uk-ready">
          <div className="container">
            <SectionTitle eyebrow="UK readiness" icon={ClipboardCheck} title="Built with trust, accessibility, and transparency in mind." text="This is not legal advice, but the website now presents the practical signals UK clients expect before they enquire." />
            <div className="compliance-grid">
              {compliance.map(({ icon: Icon, title, text }) => (
                <article className="compliance-card reveal" key={title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <SectionTitle eyebrow="Success stories" title="Built for clients, learners, and partners who need progress." />
            <div className="testimonial-grid">
              <blockquote className="reveal">“learnifyops helped us turn scattered processes into a clear digital workflow.”<cite>Amelia R., Operations Lead</cite></blockquote>
              <blockquote className="reveal">“Their EdTech mindset is rare. They understand software delivery and learner outcomes.”<cite>Daniel K., Training Director</cite></blockquote>
              <blockquote className="reveal">“Clean design, strong strategy, and practical automation for a growing UK team.”<cite>Priya S., Startup Founder</cite></blockquote>
            </div>
          </div>
        </section>

        <section className="section careers" id="careers">
          <div className="container cta-band reveal">
            <div>
              <Eyebrow icon={Rocket}>Careers & internships</Eyebrow>
              <h2>Join a team building useful technology and better futures.</h2>
              <p>Apply interest for internships or junior opportunities across software, product operations, AI automation, design, digital marketing, and education delivery.</p>
            </div>
            <a className="btn primary" href="#contact">Apply Interest <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div className="copy reveal">
              <Eyebrow icon={MessageSquareText}>Contact</Eyebrow>
              <h2>Start your learnifyops journey.</h2>
              <p>Tell us what you want to build, optimise, market, or learn. We’ll help shape the next move with a practical consultation.</p>
              <div className="contact-lines">
                <a href="mailto:info@britinstitute.uk"><Mail size={18} aria-hidden="true" /> info@britinstitute.uk</a>
                <a href="tel:+447520664011"><Phone size={18} aria-hidden="true" /> +44 7520 664011</a>
                <span><MapPin size={18} aria-hidden="true" /> Office 7084, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, UK</span>
                <span><BriefcaseBusiness size={18} aria-hidden="true" /> Monday to Friday, 9am to 5pm</span>
              </div>
              <div className="privacy-note">
                <ShieldCheck size={18} aria-hidden="true" />
                <p>Consultation enquiries are submitted to the local learnifyops API and stored in MongoDB when the database server is running.</p>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit} aria-describedby="privacy-help form-status">
              <label htmlFor="name">Name<input id="name" type="text" name="name" placeholder="Your name" autoComplete="name" required /></label>
              <label htmlFor="email">Email<input id="email" type="email" name="email" placeholder="you@example.com" autoComplete="email" required /></label>
              <label htmlFor="phone">Phone<input id="phone" type="tel" name="phone" placeholder="+44..." autoComplete="tel" /></label>
              <label htmlFor="type">Interest<select id="type" name="type" required><option>SaaS development</option><option>Web or app development</option><option>Digital marketing</option><option>Training programme</option><option>Internship enquiry</option><option>Partnership</option></select></label>
              <label htmlFor="message">Message<textarea id="message" name="message" placeholder="Tell us about your goal" required /></label>
              <label className="consent-row" htmlFor="consent"><input id="consent" type="checkbox" required /> I agree to be contacted about this enquiry and understand my details should be handled according to the privacy notice.</label>
              <p id="privacy-help" className="form-help">Only the details you enter are used for this enquiry. Add a full UK GDPR privacy notice before launching with a live backend.</p>
              <button className="btn primary" type="submit" disabled={formState === "saving"}>
                {formState === "saving" ? "Saving..." : "Send Message"} <ArrowRight size={18} aria-hidden="true" />
              </button>
              <p id="form-status" className={`form-status ${formState}`} role="status">{formStatus}</p>
            </form>
          </div>
        </section>

        <section className="footer-cta">
          <div className="container footer-cta-inner reveal">
            <h2>Build smarter systems. Create better futures.</h2>
            <div className="actions">
              <a className="btn primary" href="#contact">Start Your Journey</a>
              <a className="btn secondary" href="#contact">Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      {!cookieDismissed && (
        <div className="cookie-note" role="region" aria-label="Cookie notice">
          <p><strong>Cookie notice:</strong> this demo uses essential browser storage only to remember this message. No analytics or marketing cookies are active.</p>
          <button type="button" onClick={dismissCookie}>OK</button>
        </div>
      )}

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#top"><BrandLogo footer /></a>
            <p>UK SaaS development, EdTech solutions, digital marketing, and youth technology training.</p>
          </div>
          <div className="legal-grid" aria-label="Legal and policy information">
            <span>Company number: add registered England & Wales number</span>
            <span>Registered office: Office 7084, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ, UK</span>
            <span><a href="#contact">Privacy Policy</a> / <a href="#contact">Terms</a> / <a href="#contact">Cookie Policy</a></span>
            <span>Copyright 2026 learnifyops. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
