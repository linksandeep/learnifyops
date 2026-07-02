import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  ChevronDown,
  FileSearch,
  FileText,
  Globe2,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const logo = "/assets/learnifyops-logo-transparent.png";
const britInstituteUrl = "https://britinstitute.uk/";

const navItems = [
  ["Home", "/"],
  ["DBA Program", "/program"],
  ["Curriculum", "/curriculum"],
  ["Experience", "/experience"],
  ["Admissions", "/admissions"],
  ["Universities", "/partnership"],
  ["Contact", "/contact"]
];

const partnerUniversities = [
  {
    initials: "KU",
    name: "Kennedy University",
    type: "Partner university"
  },
  {
    initials: "BU",
    name: "Birchwood University",
    type: "Partner university"
  },
  {
    initials: "FCU",
    name: "Florida Coastal University",
    type: "Partner university"
  },
  {
    initials: "EMIT",
    name: "EMIT",
    type: "Partner institution"
  }
];

const productTools = [
  ["AI-powered Auto Apply Job Tool", "Automates repetitive job-application workflows so students can target more opportunities with better consistency."],
  ["Learning Management System", "Centralized course delivery, learner resources, assessments and academic progress visibility."],
  ["Adaptive Learning Resources", "Personalized AI-supported learning prompts and resources that help students study with more structure."],
  ["Resume Builder and Review Tools", "Helps learners improve professional profiles with structured templates, review workflows and practical feedback."],
  ["Student Progress Dashboard", "Gives students and mentors a clear view of learning milestones, performance and readiness."],
  ["Placement Support Portal", "Organizes applications, career support activity, employer touchpoints and placement assistance."],
  ["Career Tracking Tools", "Tracks learner progress from preparation to interviews, offers and long-term career development."],
  ["CRM and Lead Management", "Supports teams with structured enquiry tracking, learner follow-up and operational visibility."]
];

const technologyServices = [
  "SaaS products",
  "AI automation solutions",
  "Business process automation",
  "Custom software development",
  "CRM and lead management systems",
  "Workflow automation",
  "AI integration",
  "Technical consulting",
  "Digital transformation services"
];

const certificationProgramFeatures = [
  ["Certification courses", "Industry-focused programs designed to build practical, employable skills."],
  ["Placement support", "Guidance for applications, employer readiness and career movement."],
  ["One-to-one mentorship", "Personal support for learner goals, confidence and interview preparation."],
  ["Resume building", "Resume optimization, profile positioning and review workflows."],
  ["Free job tool access", "Access to career tools that help learners search and apply with structure."],
  ["Career outcomes help", "Placement assistance, interview practice and ongoing career support."]
];

const dbaMenuColumns = [
  {
    title: "DBA pathway",
    items: [
      { title: "Program overview", text: "Doctor of Business Administration pathway for experienced professionals.", to: "/program" },
      { title: "Curriculum", text: "Research-led learning with practical business application.", to: "/curriculum" },
      { title: "Executive experience", text: "Global peers, flexible learning and guided doctoral research.", to: "/experience" }
    ]
  },
  {
    title: "Admissions",
    items: [
      { title: "Profile review", text: "Understand academic fit, professional readiness and next steps.", to: "/admissions" },
      { title: "Partner universities", text: "Explore Kennedy, Birchwood, Florida Coastal and EMIT pathways.", to: "/partnership" },
      { title: "Request prospectus", text: "Start a confidential conversation with our team.", to: "/contact" }
    ]
  }
];

const toolsMenuColumns = [
  {
    title: "Career automation",
    items: productTools.slice(0, 3).map(([title, text]) => ({ title, text }))
  },
  {
    title: "Student success",
    items: productTools.slice(3, 6).map(([title, text]) => ({ title, text }))
  },
  {
    title: "Operations systems",
    items: productTools.slice(6).map(([title, text]) => ({ title, text }))
  }
];

const certificationMenuColumns = [
  {
    title: "Certification program",
    items: certificationProgramFeatures.slice(0, 3).map(([title, text]) => ({ title, text }))
  },
  {
    title: "Career support",
    items: certificationProgramFeatures.slice(3).map(([title, text]) => ({ title, text }))
  }
];

const servicesMenuColumns = [
  {
    title: "Build and automate",
    items: [
      { title: "SaaS products", text: "Product strategy and build support for scalable digital platforms." },
      { title: "AI automation", text: "Automate repetitive work and create smarter operating flows." },
      { title: "Custom software", text: "Design and develop tailored systems for business needs." }
    ]
  },
  {
    title: "Growth and operations",
    items: [
      { title: "Marketing technology", text: "Support for funnels, lead systems, campaign workflows and tracking." },
      { title: "CRM and lead management", text: "Improve follow-up, pipeline visibility and team productivity." },
      { title: "Tech consulting", text: "Practical guidance for startups and small businesses adopting AI and automation." }
    ]
  }
];

const megaMenus = [
  {
    key: "dba",
    label: "DBA Program",
    columns: dbaMenuColumns,
    footer: "Premium doctoral positioning for executives, entrepreneurs and senior managers.",
    cta: { label: "Request Prospectus", to: "/contact" }
  },
  {
    key: "tools",
    label: "Tools",
    columns: toolsMenuColumns,
    footer: "Our in-house tools connect learning, placement preparation and operational visibility.",
    cta: { label: "Discuss Tools", to: "/contact" }
  },
  {
    key: "certification",
    label: "Certification Program",
    columns: certificationMenuColumns,
    footer: "Brit Institute provides certification learning, placement support and career readiness resources.",
    cta: { label: "Visit Brit Institute Website", href: britInstituteUrl, external: true }
  },
  {
    key: "services",
    label: "Services",
    columns: servicesMenuColumns,
    footer: "Technology services for startups and SMEs that need software, automation and growth systems.",
    cta: { label: "Discuss Services", to: "/contact" }
  }
];

const valuePillars = [
  {
    icon: BriefcaseBusiness,
    title: "Executive leadership",
    text: "Develop the judgement, strategic confidence and evidence-led perspective expected of senior decision-makers."
  },
  {
    icon: FileSearch,
    title: "Applied business research",
    text: "Investigate a real organisational challenge and turn rigorous research into practical business value."
  },
  {
    icon: Clock3,
    title: "Built around your career",
    text: "A flexible doctoral journey designed for experienced professionals who intend to remain active at work."
  },
  {
    icon: Network,
    title: "International network",
    text: "Learn alongside leaders, entrepreneurs and senior managers with perspectives spanning global markets."
  }
];

const audience = [
  ["Senior managers", "Move from operational leadership to organisation-wide strategic influence."],
  ["Business leaders", "Strengthen decision-making through research, evidence and reflective practice."],
  ["Entrepreneurs", "Create original insight around markets, innovation and scalable business models."],
  ["Consultants", "Build deeper authority through a doctoral-level understanding of complex organisations."],
  ["Public-sector leaders", "Apply robust research to policy, transformation and institutional performance."],
  ["Academic-practitioners", "Connect professional expertise with meaningful scholarly contribution."]
];

const curriculum = [
  {
    number: "01",
    title: "Strategic leadership and change",
    text: "Examine leadership practice, organisational transformation, governance and decision-making in complex environments."
  },
  {
    number: "02",
    title: "Research philosophy and design",
    text: "Build the doctoral research capability to frame important questions and select rigorous, defensible methods."
  },
  {
    number: "03",
    title: "Innovation and global business",
    text: "Explore strategy, disruption, international markets and the organisational systems that enable sustainable growth."
  },
  {
    number: "04",
    title: "Applied research project",
    text: "Produce an original doctoral contribution grounded in a live business, leadership or management challenge."
  }
];

const journey = [
  ["Discover", "Clarify your executive goals, research interests and readiness for doctoral study."],
  ["Develop", "Strengthen research literacy, critical thinking and advanced management expertise."],
  ["Investigate", "Design and conduct applied research with structured academic supervision."],
  ["Contribute", "Translate your findings into an original contribution with real organisational relevance."]
];

const outcomes = [
  "Lead strategic transformation with greater authority",
  "Use doctoral research to address complex business problems",
  "Strengthen executive, consulting and board-level credibility",
  "Build an international peer and academic network",
  "Create practical knowledge that can influence organisations",
  "Advance toward senior leadership, advisory or academic-practice roles"
];

const admissionsSteps = [
  ["Profile review", "Share your academic background, leadership experience and professional objectives."],
  ["Adviser conversation", "Discuss program fit, research interests, delivery expectations and the available university pathways."],
  ["Document guidance", "Receive support preparing the required academic and professional documentation."],
  ["University application", "Progress to the formal admissions process with the most suitable partner institution when your profile is ready."]
];

const eligibility = [
  "Experienced professionals, executives, entrepreneurs and senior managers",
  "A strong academic or equivalent professional profile",
  "A clear interest in solving a meaningful business or management problem",
  "Readiness for independent doctoral research and sustained professional learning",
  "English-language proficiency appropriate for doctoral study"
];

const faq = [
  ["Can I continue working while studying?", "The DBA pathway is positioned for working professionals. Exact delivery, scheduling and attendance expectations are confirmed during the admissions conversation."],
  ["Do I need a research topic before applying?", "You do not need a final proposal at the first conversation. A clear area of professional interest is enough to begin a profile review."],
  ["Which universities do you work with?", "Our partner network includes Kennedy University, Birchwood University, Florida Coastal University and EMIT. The appropriate pathway and awarding details are confirmed during admissions."],
  ["Is this an MBA?", "No. A DBA is a doctoral-level qualification focused on advanced applied research, executive practice and an original contribution to business knowledge."]
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
    const next = normalisePath(to);
    if (next !== path) {
      window.history.pushState({}, "", next);
      setPath(next);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { path, navigate };
}

function Link({ to, navigate, children, className, onNavigate, ...props }) {
  return (
    <a
      href={to}
      className={className}
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
  return <img className="brand-logo" src={logo} alt="LearnifyOps" />;
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);

  useEffect(() => {
    setOpen(false);
    setOpenMega(null);
  }, [path]);

  const closeMenus = () => {
    setOpen(false);
    setOpenMega(null);
  };

  return (
    <header className="site-header">
      <div className="global-bar">
        <div className="container global-bar-inner">
          <span className="global-brandline"><Globe2 size={14} aria-hidden="true" /> Brit Institute Education Ecosystem</span>
          <span className="global-menu-line">DBA <i /> Certifications <i /> AI Products <i /> Technology Services</span>
          <a className="global-link" href={britInstituteUrl} target="_blank" rel="noreferrer">Visit Brit Institute <ArrowRight size={13} aria-hidden="true" /></a>
        </div>
      </div>
      <nav className="nav container" aria-label="Primary navigation">
        <Link className="brand" to="/" navigate={navigate} aria-label="LearnifyOps DBA home">
          <BrandLogo />
        </Link>
        <div className={open ? "nav-links open" : "nav-links"} id="primary-navigation">
          <Link to="/" navigate={navigate} className={path === "/" ? "active" : undefined} onNavigate={closeMenus}>
            Home
          </Link>
          {megaMenus.map((menu) => (
            <div className="mega-nav-item" key={menu.key}>
              <button
                className={openMega === menu.key ? "mega-trigger active" : "mega-trigger"}
                type="button"
                aria-expanded={openMega === menu.key}
                aria-controls={`mega-${menu.key}`}
                onClick={() => setOpenMega(openMega === menu.key ? null : menu.key)}
              >
                {menu.label}<ChevronDown size={15} aria-hidden="true" />
              </button>
              <MegaMenu id={`mega-${menu.key}`} menu={menu} navigate={navigate} open={openMega === menu.key} onNavigate={closeMenus} />
            </div>
          ))}
          <Link to="/partnership" navigate={navigate} className={path === "/partnership" ? "active" : undefined} onNavigate={closeMenus}>
            Universities
          </Link>
        </div>
        <Link className="header-cta" to="/contact" navigate={navigate}>
          Request Prospectus <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}

function MegaMenu({ id, menu, navigate, open, onNavigate }) {
  return (
    <div className={open ? "mega-menu open" : "mega-menu"} id={id} role="region" aria-label={`${menu.label} menu`}>
      <div className="mega-menu-grid">
        {menu.columns.map((column) => (
          <div className="mega-menu-column" key={column.title}>
            <strong>{column.title}</strong>
            {column.items.map((item) => (
              item.to ? (
                <Link key={item.title} to={item.to} navigate={navigate} className="mega-menu-card" onNavigate={onNavigate}>
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </Link>
              ) : (
                <article className="mega-menu-card" key={item.title}>
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </article>
              )
            ))}
          </div>
        ))}
      </div>
      <div className="mega-menu-footer">
        <p>{menu.footer}</p>
        {menu.cta.external ? (
          <a className="mega-menu-cta" href={menu.cta.href} target="_blank" rel="noreferrer">{menu.cta.label}<ArrowRight size={15} aria-hidden="true" /></a>
        ) : (
          <Link className="mega-menu-cta" to={menu.cta.to} navigate={navigate} onNavigate={onNavigate}>{menu.cta.label}<ArrowRight size={15} aria-hidden="true" /></Link>
        )}
      </div>
    </div>
  );
}

function Eyebrow({ icon: Icon = Sparkles, children }) {
  return <span className="eyebrow"><Icon size={15} aria-hidden="true" />{children}</span>;
}

function PrimaryButton({ to, navigate, children }) {
  return <Link className="btn btn-primary" to={to} navigate={navigate}>{children}<ArrowRight size={18} aria-hidden="true" /></Link>;
}

function SecondaryButton({ to, navigate, children }) {
  return <Link className="btn btn-secondary" to={to} navigate={navigate}>{children}</Link>;
}

function SectionIntro({ eyebrow, icon, title, text, align = "center" }) {
  return (
    <div className={`section-intro ${align === "left" ? "left" : ""} reveal`}>
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function HomeHero({ navigate }) {
  return (
    <section className="home-hero">
      <div className="container home-hero-grid">
        <div className="hero-copy reveal visible">
          <Eyebrow icon={GraduationCap}>Global Doctor of Business Administration</Eyebrow>
          <h1>Think beyond<br />the <span>boardroom.</span></h1>
          <p className="hero-lead">LearnifyOps brings together premium DBA guidance, AI-powered learning products, placement-ready career tools and technology services for global learners and businesses.</p>
          <div className="partnership-note"><Building2 size={18} aria-hidden="true" /><span>DBA pathways supported through four partner institutions and a technology-driven student success ecosystem</span></div>
          <div className="hero-actions">
            <PrimaryButton to="/contact" navigate={navigate}>Request Prospectus</PrimaryButton>
            <SecondaryButton to="/admissions" navigate={navigate}>Check Your Profile</SecondaryButton>
          </div>
          <div className="hero-proof" aria-label="Program highlights">
            <span><strong>DBA</strong> Doctoral-level study</span>
            <span><strong>4</strong> Partner institutions</span>
            <span><strong>AI</strong> Learning and career tools</span>
          </div>
        </div>
        <div className="hero-visual reveal visible">
          <img src="/assets/dba-home-hero-v2.jpg" alt="International executives participating in a strategic DBA roundtable" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-visual-card">
            <span>Global executive doctorate</span>
            <strong>Research that moves business forward.</strong>
            <small>Europe · United States · Australia · Worldwide</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramFacts() {
  const facts = [
    ["Qualification", "Doctor of Business Administration"],
    ["Approach", "Applied, research-driven learning"],
    ["Ideal for", "Executives and experienced professionals"],
    ["University network", "Four partner institutions"]
  ];

  return (
    <section className="fact-strip">
      <div className="container fact-grid">
        {facts.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}
      </div>
    </section>
  );
}

function ProductEcosystemSection({ navigate }) {
  return (
    <section className="section product-section">
      <div className="container">
        <SectionIntro
          eyebrow="In-house products"
          icon={Lightbulb}
          title="AI-powered tools created to improve the student journey."
          text="Our products are designed in-house to support learning, placement preparation and career tracking—not as add-ons, but as part of a connected student success ecosystem."
        />
        <div className="product-grid">
          {productTools.map(([title, text]) => (
            <Link
              className={`product-card ${title === "Placement Support Portal" ? "featured" : ""} reveal`}
              key={title}
              to="/contact"
              navigate={navigate}
              aria-label={`Discuss ${title}`}
            >
              <span className="product-dot" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="product-action">Discuss capability <ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyServicesSection({ navigate }) {
  return (
    <section className="section services-section">
      <div className="container services-layout">
        <div className="services-copy reveal">
          <Eyebrow icon={BriefcaseBusiness}>Technology solutions</Eyebrow>
          <h2>We also build SaaS, automation and AI solutions for modern businesses.</h2>
          <p>Beyond education, LearnifyOps supports startups, SMEs and growth-focused teams with practical technology services that streamline operations, improve productivity and help businesses scale with modern software and AI.</p>
          <PrimaryButton to="/contact" navigate={navigate}>Discuss Services</PrimaryButton>
        </div>
        <div className="services-panel reveal">
          {technologyServices.map((service) => (
            <span key={service}><CheckCircle2 size={16} aria-hidden="true" />{service}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionIntro
          eyebrow="Why a DBA"
          icon={Award}
          title="Doctoral rigour for leaders who want practical influence."
          text="The DBA is designed for professionals who want to investigate important business problems, strengthen executive judgement and create knowledge that works in the real world."
        />
        <div className="value-grid">
          {valuePillars.map(({ icon: Icon, title, text }) => (
            <article className="value-card reveal" key={title}>
              <span className="icon-box"><Icon size={23} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchSection({ navigate, image = "/assets/dba-home-research-v2.jpg", variant = "home" }) {
  return (
    <section className={`section research-section research-${variant}`}>
      <div className="container split-layout">
        <div className="split-image reveal">
          <img src={image} alt="Executive doctoral candidate reviewing applied research with an academic supervisor" />
          <div className="image-badge"><BookOpen size={18} aria-hidden="true" />Research in action</div>
        </div>
        <div className="split-copy reveal">
          <Eyebrow icon={Lightbulb}>Academic excellence, business relevance</Eyebrow>
          <h2>Bring a real leadership challenge into doctoral research.</h2>
          <p>Your professional context becomes a powerful research environment. The goal is not theory for its own sake, but a credible original contribution that can improve decisions, organisations and industries.</p>
          <ul className="check-list">
            <li><CheckCircle2 size={18} />Connect research with executive practice</li>
            <li><CheckCircle2 size={18} />Build advanced critical and analytical capability</li>
            <li><CheckCircle2 size={18} />Work toward an original contribution to business knowledge</li>
          </ul>
          <PrimaryButton to="/program" navigate={navigate}>Explore the DBA</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionIntro eyebrow="The doctoral journey" icon={Target} title="A clear path from executive experience to original contribution." />
        <div className="journey-grid">
          {journey.map(([title, text], index) => (
            <article className="journey-card reveal" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UniversitiesSection({ navigate, compact = false }) {
  return (
    <section className={compact ? "universities-section universities-compact" : "universities-section"}>
      <div className="container">
        <div className="universities-heading reveal">
          <div>
            <Eyebrow icon={Building2}>Our university network</Eyebrow>
            <h2>DBA pathways with internationally focused institutions.</h2>
          </div>
          <div className="universities-intro">
            <p>We help experienced professionals understand their options, prepare a strong doctoral profile and progress toward the appropriate university admissions pathway.</p>
            {compact && <Link className="text-link" to="/partnership" navigate={navigate}>Explore our partners <ArrowRight size={17} /></Link>}
          </div>
        </div>
        <div className="university-grid">
          {partnerUniversities.map(({ initials, name, type }, index) => (
            <article className="university-card reveal" key={name}>
              <div className="university-card-top">
                <span className="university-mark" aria-hidden="true">{initials}</span>
                <span className="university-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span className="university-type">{type}</span>
              <h3>{name}</h3>
              <p>Internationally oriented DBA pathway for ambitious professionals and business leaders.</p>
              <span className="university-detail">Program details confirmed during admissions <ArrowRight size={15} /></span>
            </article>
          ))}
        </div>
        {!compact && (
          <div className="university-note reveal">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <strong>Clear guidance before you apply</strong>
              <p>Entry criteria, delivery model, awarding arrangements, recognition and fees can vary by institution and intake. These are discussed transparently during your profile review.</p>
            </div>
            <PrimaryButton to="/contact" navigate={navigate}>Discuss Your Options</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

function AudienceSection({ navigate }) {
  return (
    <section className="section section-sky">
      <div className="container">
        <SectionIntro eyebrow="Who it is for" icon={Users} title="Built for experienced professionals ready for their next level of influence." />
        <div className="audience-grid">
          {audience.map(([title, text]) => <article className="audience-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="center-action"><PrimaryButton to="/admissions" navigate={navigate}>Review Admissions</PrimaryButton></div>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, icon, title, text, image, tone = "midnight", caption = "Global DBA pathway" }) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="container page-hero-grid">
        <div className="page-hero-copy reveal visible">
          <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
          <span className="page-caption">{caption}</span>
        </div>
        <div className="page-hero-image reveal visible">
          <img src={image} alt="" />
          <span className="image-corner image-corner-top" />
          <span className="image-corner image-corner-bottom" />
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="section section-sky">
      <div className="container outcome-layout">
        <div className="outcome-copy reveal">
          <Eyebrow icon={Award}>Executive outcomes</Eyebrow>
          <h2>Graduate with more than a title.</h2>
          <p>Build the research capability, strategic perspective and professional authority to contribute at the highest level of business practice.</p>
        </div>
        <div className="outcome-list reveal">
          {outcomes.map((item) => <div key={item}><CheckCircle2 size={19} aria-hidden="true" /><span>{item}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionIntro
          eyebrow="Curriculum framework"
          icon={BookOpen}
          title="Advanced management thinking. Rigorous research capability."
          text="The final curriculum and module sequence are confirmed through the selected university pathway. This framework communicates the central capabilities expected in a globally oriented DBA."
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

function CohortSection() {
  return (
    <section className="section section-white">
      <div className="container split-layout reverse">
        <div className="split-copy reveal">
          <Eyebrow icon={Network}>The DBA experience</Eyebrow>
          <h2>A serious academic environment shaped around senior professionals.</h2>
          <p>Engage with business leaders who bring different sectors, markets and cultural perspectives to the learning experience. The result is a network built around professional depth, not just geography.</p>
          <div className="mini-grid">
            <article><Globe2 size={22} /><strong>Global perspectives</strong><span>International professional contexts and ideas</span></article>
            <article><Users size={22} /><strong>Executive peers</strong><span>Experienced leaders with practical insight</span></article>
            <article><Clock3 size={22} /><strong>Flexible rhythm</strong><span>Structured for continued professional activity</span></article>
            <article><BookOpen size={22} /><strong>Guided research</strong><span>Academic direction throughout the doctoral journey</span></article>
          </div>
        </div>
        <div className="experience-canvas reveal" aria-label="Global DBA community">
          <span className="experience-globe"><Globe2 size={46} aria-hidden="true" /></span>
          <span className="experience-node node-europe">Europe</span>
          <span className="experience-node node-america">United States</span>
          <span className="experience-node node-australia">Australia</span>
          <span className="experience-node node-global">Global cohort</span>
          <div className="experience-quote">
            <Network size={24} aria-hidden="true" />
            <strong>Different markets.<br />Shared ambition.</strong>
            <p>Build relationships with experienced professionals who understand the complexity of leading at scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="quote-band">
      <div className="container quote-inner reveal">
        <Quote size={36} aria-hidden="true" />
        <blockquote>A DBA should allow an experienced professional to remain close to practice while developing the research depth to change it.</blockquote>
        <p>Program positioning for the global executive learner</p>
      </div>
    </section>
  );
}

function AdmissionsSection({ navigate }) {
  return (
    <section className="section section-white">
      <div className="container admissions-layout">
        <div className="admissions-copy reveal">
          <Eyebrow icon={ShieldCheck}>Admissions profile</Eyebrow>
          <h2>Is this DBA the right next step for you?</h2>
          <p>DBA candidates are normally experienced professionals with the maturity, curiosity and commitment required for independent doctoral research. Every profile is reviewed individually.</p>
          <ul className="check-list">
            {eligibility.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}
          </ul>
          <PrimaryButton to="/contact" navigate={navigate}>Request a Profile Review</PrimaryButton>
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

function FaqSection() {
  return (
    <section className="section section-sky">
      <div className="container">
        <SectionIntro eyebrow="Common questions" icon={FileText} title="Clear answers before you make a doctoral decision." />
        <div className="faq-grid">
          {faq.map(([question, answer]) => <article className="faq-card reveal" key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ handleSubmit, formState, formStatus }) {
  return (
    <section className="section section-white">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <Eyebrow icon={Mail}>Speak with our team</Eyebrow>
          <h2>Start with a confidential conversation.</h2>
          <p>Tell us about your DBA goals, learning technology interests or business requirements. Our team will help you understand the right next step, from profile review and university pathways to AI automation and software solutions.</p>
          <div className="contact-lines">
            <a href="mailto:contact@learnifyops.com"><Mail size={18} />contact@learnifyops.com</a>
            <a href="tel:+447520664011"><Phone size={18} />+44 7520 664011</a>
            <span><MapPin size={18} />United Kingdom and India admissions support</span>
            <span><Globe2 size={18} />Enquiries welcomed from Europe, the United States, Australia and global markets</span>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit} aria-describedby="privacy-help form-status">
          <div className="form-row">
            <label htmlFor="name">Full name<input id="name" type="text" name="name" placeholder="Your full name" autoComplete="name" required /></label>
            <label htmlFor="email">Professional email<input id="email" type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label>
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone<input id="phone" type="tel" name="phone" placeholder="+44 / +1 / +61..." autoComplete="tel" /></label>
            <label htmlFor="type">I would like to<select id="type" name="type" required><option>Request the DBA prospectus</option><option>Arrange a profile review</option><option>Discuss certification support</option><option>Discuss placement support</option><option>Discuss technology services</option><option>Compare university pathways</option></select></label>
          </div>
          <label htmlFor="message">Background and goals<textarea id="message" name="message" placeholder="Briefly tell us about your experience, learning goals or business technology requirement." required /></label>
          <label className="consent-row" htmlFor="consent"><input id="consent" name="consent" type="checkbox" required /><span>I agree to be contacted about my DBA enquiry and understand my details will be used only to respond to this request.</span></label>
          <p id="privacy-help" className="form-help">No marketing analytics or third-party advertising cookies are active in this build.</p>
          <button className="btn btn-primary submit-button" type="submit" disabled={formState === "saving"}>{formState === "saving" ? "Sending..." : "Request DBA Information"}<ArrowRight size={18} /></button>
          <p id="form-status" className={`form-status ${formState}`} role="status">{formStatus}</p>
        </form>
      </div>
    </section>
  );
}

function FinalCta({ navigate }) {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner reveal">
        <div><Eyebrow icon={GraduationCap}>Your next chapter</Eyebrow><h2>Build doctoral ambition, career outcomes and technology-led growth.</h2></div>
        <div className="final-actions">
          <PrimaryButton to="/contact" navigate={navigate}>Request Prospectus</PrimaryButton>
          <SecondaryButton to="/program" navigate={navigate}>Explore DBA Program</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

function HomePage({ navigate }) {
  return <><HomeHero navigate={navigate} /><ProgramFacts /><ProductEcosystemSection navigate={navigate} /><TechnologyServicesSection navigate={navigate} /><ValueSection /><UniversitiesSection navigate={navigate} compact /><ResearchSection navigate={navigate} /><JourneySection /><AudienceSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}

function ProgramPage({ navigate }) {
  return <><PageHero eyebrow="DBA Program" icon={GraduationCap} tone="midnight" image="/assets/dba-program-hero-v2.jpg" caption="Doctoral thinking for executive practice" title="A doctoral program for leaders who want to shape business practice." text="Combine advanced management knowledge, applied research, executive reflection and practical business application in an internationally focused DBA pathway." /><ProgramFacts /><ValueSection /><OutcomesSection /><ResearchSection navigate={navigate} image="/assets/dba-program-research-v2.jpg" variant="program" /><FinalCta navigate={navigate} /></>;
}

function CurriculumPage({ navigate }) {
  return <><PageHero eyebrow="Curriculum" icon={BookOpen} tone="editorial" image="/assets/dba-curriculum-hero-v2.jpg" caption="Rigour, relevance and original contribution" title="Research-led learning with practical business application." text="Build the intellectual and methodological capability to investigate complex organisational challenges at doctoral level." /><CurriculumSection /><JourneySection /><ProductEcosystemSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}

function ExperiencePage({ navigate }) {
  return <><PageHero eyebrow="Executive Experience" icon={Network} tone="immersive" image="/assets/dba-experience-hero-v2.jpg" caption="A network built around professional depth" title="Global peers. Serious scholarship. Flexible professional learning." text="A premium doctoral environment for experienced leaders who bring substantial professional insight into the learning community." /><CohortSection /><TestimonialSection /><AudienceSection navigate={navigate} /><TechnologyServicesSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}

function AdmissionsPage({ navigate }) {
  return <><PageHero eyebrow="Admissions" icon={ShieldCheck} tone="warm" image="/assets/dba-admissions-hero-v2.jpg" caption="A personal, transparent admissions process" title="Your leadership experience could be the foundation for doctoral research." text="Begin with an individual profile review to understand academic fit, professional readiness and the partner-university pathway." /><AdmissionsSection navigate={navigate} /><FaqSection /><FinalCta navigate={navigate} /></>;
}

function PartnershipPage({ navigate }) {
  return <><PageHero eyebrow="Partner Universities" icon={Building2} tone="campus" image="/assets/dba-universities-hero-v2.jpg" caption="Four institutions. One global ambition." title="Choose a DBA pathway aligned with your professional ambition." text="Explore our network of partner institutions, then speak with our admissions team to understand the pathway best suited to your background, goals and preferred learning model." /><UniversitiesSection navigate={navigate} /><section className="section section-white"><div className="container"><SectionIntro eyebrow="How we support you" icon={Globe2} title="One conversation. Clear university options." text="Our role is to make the DBA decision easier to understand—from initial fit and documentation through to the formal institution application." /><div className="value-grid"><article className="value-card reveal"><span className="icon-box"><FileText size={23} /></span><h3>Clear information</h3><p>Understand the academic pathway, application expectations and documentary requirements.</p></article><article className="value-card reveal"><span className="icon-box"><Users size={23} /></span><h3>Profile preparation</h3><p>Position your leadership background, research interest and doctoral motivation effectively.</p></article><article className="value-card reveal"><span className="icon-box"><Building2 size={23} /></span><h3>University matching</h3><p>Compare available partner pathways against your professional profile and doctoral goals.</p></article><article className="value-card reveal"><span className="icon-box"><ShieldCheck size={23} /></span><h3>Transparent decisions</h3><p>Receive the material facts you need before making an application or financial commitment.</p></article></div></div></section><FinalCta navigate={navigate} /></>;
}

function ContactPage({ navigate, contactProps }) {
  return <><PageHero eyebrow="Contact Admissions" icon={Mail} tone="contact" image="/assets/dba-contact-hero-v2.jpg" caption="A confidential conversation starts here" title="Explore the DBA, learning tools or technology services." text="Request program information, begin a confidential DBA profile review or ask how our products and automation services can support your organisation." /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="footer-brand" to="/" navigate={navigate}><BrandLogo /></Link>
          <p>LearnifyOps brings together DBA guidance, AI-powered learning tools, placement-ready career systems and business technology services.</p>
          <span className="footer-disclaimer">Pathway, awarding and recognition details are confirmed for the selected institution during admissions.</span>
        </div>
        <div className="footer-links">
          <strong>DBA Program</strong>
          <Link to="/program" navigate={navigate}>Program overview</Link>
          <Link to="/curriculum" navigate={navigate}>Curriculum</Link>
          <Link to="/experience" navigate={navigate}>Executive experience</Link>
        </div>
        <div className="footer-links">
          <strong>Admissions</strong>
          <Link to="/admissions" navigate={navigate}>Entry profile</Link>
          <Link to="/partnership" navigate={navigate}>Partner universities</Link>
          <Link to="/contact" navigate={navigate}>Request prospectus</Link>
        </div>
      </div>
      <div className="container footer-bottom"><span>Copyright 2026 LearnifyOps. All rights reserved.</span><span>DBA pathways · AI products · technology services</span></div>
    </footer>
  );
}

function App() {
  const { path, navigate } = useRoute();
  const [formStatus, setFormStatus] = useState("");
  const [formState, setFormState] = useState("idle");
  const [cookieDismissed, setCookieDismissed] = useState(() => localStorage.getItem("learnifyops-cookie-note") === "dismissed");

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
    const page = navItems.find(([, route]) => route === path)?.[0] || "Home";
    document.title = path === "/" ? "Global DBA Program | LearnifyOps" : `${page} | LearnifyOps`;
  }, [path]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState("saving");
    setFormStatus("Sending your DBA enquiry...");
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
      if (!response.ok) throw new Error(result.message || "Unable to send your enquiry.");
      setFormState("success");
      setFormStatus(`Thank you. Your DBA enquiry has been received. Reference: ${result.enquiryId}`);
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormStatus(error.message || "Could not send your enquiry. Please try again.");
    }
  };

  const contactProps = { handleSubmit, formState, formStatus };
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
      <Header path={path} navigate={navigate} />
      <main id="main">{pages[path] || pages["/"]}</main>
      {!cookieDismissed && (
        <div className="cookie-note" role="region" aria-label="Cookie notice">
          <p><strong>Cookie notice:</strong> this site uses essential browser storage only. No advertising or analytics cookies are active.</p>
          <button type="button" onClick={() => { localStorage.setItem("learnifyops-cookie-note", "dismissed"); setCookieDismissed(true); }}>OK</button>
        </div>
      )}
      <Footer navigate={navigate} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
