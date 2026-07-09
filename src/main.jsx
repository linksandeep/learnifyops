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
    type: "Partner University",
    focus: "Executive strategy, governance and applied management research",
    overview: "A DBA pathway for experienced managers, consultants and corporate advisors who want to connect leadership experience with structured business research.",
    highlights: [
      "Designed for senior working professionals",
      "Applied doctoral research linked to business challenges",
      "Profile review used to confirm admission fit and pathway details"
    ],
    curriculum: [
      "Strategic leadership and decision-making",
      "Research design and methodology",
      "Applied dissertation or doctoral research project"
    ]
  },
  {
    initials: "BU",
    name: "Birchwood University",
    type: "Partner University",
    focus: "Innovation, entrepreneurship and organizational transformation",
    overview: "A DBA pathway positioned for professionals who want to study growth, transformation and practical business model development.",
    highlights: [
      "Suitable for entrepreneurs, managers and transformation leaders",
      "Focus on innovation and applied business improvement",
      "Admission and credit details confirmed during candidate review"
    ],
    curriculum: [
      "Innovation and global business models",
      "Organizational change and transformation",
      "Research proposal development"
    ]
  },
  {
    initials: "FCU",
    name: "Florida Coastal University",
    type: "Partner University",
    focus: "Global business, operational excellence and leadership practice",
    overview: "A DBA pathway for professionals seeking stronger research-led decision-making, leadership credibility and business execution capability.",
    highlights: [
      "Business leadership pathway for experienced candidates",
      "Applied research connected to executive practice",
      "Curriculum and fee structure reviewed before application"
    ],
    curriculum: [
      "Global management and operational strategy",
      "Quantitative and qualitative research methods",
      "Doctoral thesis or applied research defense"
    ]
  },
  {
    initials: "EMIT",
    name: "EMIT",
    type: "Partner Institution",
    focus: "Technology management, AI automation and enterprise systems",
    overview: "A technology-oriented pathway for professionals who want to connect management research with digital transformation and enterprise systems.",
    highlights: [
      "Relevant for founders, consultants and tech-enabled managers",
      "Connects business research with digital transformation",
      "Pathway details validated during candidate profile review"
    ],
    curriculum: [
      "Digital transformation and AI-enabled operations",
      "Enterprise systems and process automation",
      "Applied business research project"
    ]
  }
];

const productTools = [
  ["AI-Powered Application Auto-Apply", "Automates tedious job application workflows, helping students target top-tier opportunities with precision and consistency."],
  ["Enterprise Learning Management System", "A sophisticated, centralized platform delivering academic resources, modular coursework, and transparent progress metrics."],
  ["Adaptive AI Learning Assistant", "Personalized study companions that generate tailored study plans, mock quizzes, and academic feedback."],
  ["Professional CV Optimizer & Review System", "Helps students refine their CVs using industry-benchmarked templates, automated scans, and mentor review workflows."],
  ["Student Milestone Progress Dashboard", "Provides real-time visibility into academic milestones, research stages, and readiness for graduation."],
  ["Executive Career Placement Support Portal", "Streamlines direct employer matchmaking, corporate touchpoints, and tailored recruitment support."],
  ["Strategic Career Tracking Analytics", "Enables students to monitor interviews, feedback loops, and long-term career progression."],
  ["Enterprise CRM & Admissions Console", "Empowers administrative teams with workflow automation to handle enquiries, applications, and enrollments smoothly."]
];

const technologyServices = [
  "Custom Enterprise SaaS Products",
  "Tailored AI & Agentic Workflows",
  "Automated Business Process Engines",
  "Advanced Custom Software Development",
  "CRM Systems & Admissions Pipelines",
  "Corporate Workflow Optimization",
  "AI Integration & LLM Fine-Tuning",
  "Strategic Technology Consulting",
  "Digital Transformation Blueprints"
];

const certificationProgramFeatures = [
  ["Advanced Skill Certifications", "Rigorous programs designed to equip professionals with immediate, high-value skills requested by modern employers."],
  ["Dedicated Placement Assistance", "Direct pipelines to partner enterprises, mock interviews, and active placement matchmaking."],
  ["1-on-1 Executive Mentorship", "Personalized guidance from industry veterans to build confidence and strategic decision-making capability."],
  ["Executive CV & LinkedIn Optimization", "Transforming professional profiles to capture the attention of corporate headhunters and executive recruiters."],
  ["Free Access to Career Automation Suite", "Full access to our proprietary tools for target applications and market outreach."],
  ["End-to-End Career Acceleration", "From program onboarding to job placement, we offer active, hands-on support every step of the way."]
];

const dbaMenuColumns = [
  {
    title: "DBA Pathway",
    items: [
      { title: "Program Overview", text: "Doctor of Business Administration pathway for experienced professionals.", to: "/program" },
      { title: "Curriculum Framework", text: "Research-led learning with practical business application.", to: "/curriculum" },
      { title: "Executive Experience", text: "Global peers, flexible learning and guided doctoral research.", to: "/experience" }
    ]
  },
  {
    title: "Admissions Process",
    items: [
      { title: "Profile Review", text: "Understand academic fit, professional readiness and next steps.", to: "/admissions" },
      { title: "Partner Universities", text: "Explore Kennedy, Birchwood, Florida Coastal and EMIT pathways.", to: "/partnership" },
      { title: "Request Prospectus", text: "Start a confidential conversation with our team.", to: "/contact" }
    ]
  }
];

const toolsMenuColumns = [
  {
    title: "Career Automation",
    items: productTools.slice(0, 3).map(([title, text]) => ({ title, text }))
  },
  {
    title: "Student Success",
    items: productTools.slice(3, 6).map(([title, text]) => ({ title, text }))
  },
  {
    title: "Operations Systems",
    items: productTools.slice(6).map(([title, text]) => ({ title, text }))
  }
];

const certificationMenuColumns = [
  {
    title: "Certification Programs",
    items: certificationProgramFeatures.slice(0, 3).map(([title, text]) => ({ title, text }))
  },
  {
    title: "Career Architecture",
    items: certificationProgramFeatures.slice(3).map(([title, text]) => ({ title, text }))
  }
];

const servicesMenuColumns = [
  {
    title: "Build and Automate",
    items: [
      { title: "SaaS Products", text: "Product strategy and build support for scalable digital platforms." },
      { title: "AI Automation", text: "Automate repetitive work and create smarter operating flows." },
      { title: "Custom Software", text: "Design and develop tailored systems for business needs." }
    ]
  },
  {
    title: "Growth and Operations",
    items: [
      { title: "Marketing Technology", text: "Support for funnels, lead systems, campaign workflows and tracking." },
      { title: "CRM and Lead Management", text: "Improve follow-up, pipeline visibility and team productivity." },
      { title: "Tech Consulting", text: "Practical guidance for startups and small businesses adopting AI and automation." }
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
    title: "Executive Foresight",
    text: "Develop the leadership acumen, strategic agility, and research-backed perspective needed to steer complex organizations."
  },
  {
    icon: FileSearch,
    title: "Applied Scientific Research",
    text: "Address genuine corporate bottlenecks by converting rigorous research methodologies into immediately actionable business value."
  },
  {
    icon: Clock3,
    title: "Designed for Active Executives",
    text: "A flexible, high-caliber doctoral curriculum structure allowing seasoned professionals to continue their leadership careers."
  },
  {
    icon: Network,
    title: "Global Cohort Network",
    text: "Collaborate alongside an international network of senior managers, founders, and industry champions representing global markets."
  }
];

const audience = [
  ["Senior Executive Leaders", "Scale your strategic influence from operational head to board-level visionary decision-maker."],
  ["Entrepreneurs & Founders", "Validate market innovations, scale business models, and create original IP through research."],
  ["Strategy Consultants", "Build authoritative, research-backed credentials that drive corporate advisory value at the highest levels."],
  ["Public Sector Administrators", "Apply scientific research paradigms to public policy, institutional modernization, and systemic reforms."],
  ["Corporate Directors", "Deepen quantitative and qualitative analytical capabilities to steer board-level strategy."],
  ["Academic Practitioners", "Bridge the gap between theoretical business models and actual market execution with doctoral distinction."]
];

const curriculum = [
  {
    number: "01",
    title: "Strategic Foresight & Change Orchestration",
    text: "Analyze advanced governance paradigms, system changes, and high-impact decision-making frameworks in global business environments."
  },
  {
    number: "02",
    title: "Doctoral Research Design & Methods",
    text: "Establish rigorous research foundations. Formulate query frameworks using qualitative and quantitative scholarly methodologies."
  },
  {
    number: "03",
    title: "Global Disruption & Growth Strategies",
    text: "Investigate market shifts, technological disruptions, and systemic operations that enable sustainable international scaling."
  },
  {
    number: "04",
    title: "Applied Doctoral Thesis & Research Project",
    text: "Synthesize executive insights into a peer-reviewed, defense-ready dissertation solving a critical business challenge."
  }
];

const journey = [
  ["Contextualize", "Define your academic vision, target research domains, and readiness for rigorous executive study."],
  ["Formulate", "Build analytical frameworks, master research methodologies, and outline your literature review."],
  ["Investigate", "Execute field studies and empirical data collection under direct academic mentorship and supervisor reviews."],
  ["Synthesize", "Defend your thesis, publish findings, and implement structural transformation inside your organization."]
];

const outcomes = [
  "Spearhead large-scale corporate transformations with deep research-backed authority",
  "Design innovative solutions to complex organizational challenges using scholarly methods",
  "Enhance professional credibility for board positions, consulting, and advisory appointments",
  "Tap into a prestigious global network of research scholars and corporate leaders",
  "Publish peer-reviewed contributions that advance modern management paradigms",
  "Elevate your career trajectory into C-suite leadership, specialized consulting, or academia"
];

const admissionsSteps = [
  ["Initial Profile Assessment", "Submit your executive resume and academic history for a comprehensive fit analysis."],
  ["Admissions Counsel Consultation", "Clarify program delivery models, align research goals, and select the target university pathway."],
  ["Document Drafting Guidance", "Receive detailed support in drafting your research statement and gathering academic references."],
  ["Formal Academic Presentation", "Submit your finalized dossier directly to the partner institution for formal board evaluation."]
];

const eligibility = [
  "Experienced professionals, management consultants, entrepreneurs, and senior directors",
  "A verified Master's degree, MBA, or equivalent senior-level professional qualification",
  "A well-defined interest in solving a strategic business, policy, or management challenge",
  "Commitment to independent, rigorous research alongside professional obligations",
  "Fluent English proficiency suitable for academic writing and doctoral defense"
];

const faq = [
  ["How is the program structured for active professionals?", "The DBA is built from the ground up for working leaders. Modular coursework and digital delivery allow you to study seamlessly alongside your corporate career."],
  ["What starting support do I receive for my research topic?", "You don't need a polished proposal. Our team helps you refine your area of interest into a viable doctoral research question during the onboarding phase."],
  ["Which partner universities award the final degree?", "We collaborate with accredited institutions including Birchwood University, Kennedy University, Florida Coastal University, and EMIT. Pathways are selected to fit your background and career goals."],
  ["What is the main difference between an MBA and a DBA?", "An MBA covers broad operational and management principles. A DBA focuses on generating new, original business knowledge through scientific research and applied methodologies."]
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
          <span className="global-menu-line">Doctoral Pathway <i /> Skill Certifications <i /> Enterprise Automation <i /> Consulting Services</span>
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
          <Eyebrow icon={GraduationCap}>Prestigious Global Executive Doctorate</Eyebrow>
          <h1>Forge Strategic Leadership Beyond The <span>Boardroom.</span></h1>
          <p className="hero-lead">LearnifyOps integrates high-caliber Doctor of Business Administration pathways, enterprise AI learning software, dedicated placement engines, and systems automation to empower professionals and enterprises globally.</p>
          <div className="partnership-note"><Building2 size={18} aria-hidden="true" /><span>Four accredited international partner universities and a technology-driven student success ecosystem.</span></div>
          <div className="hero-actions">
            <PrimaryButton to="/contact" navigate={navigate}>Request Prospectus</PrimaryButton>
            <SecondaryButton to="/admissions" navigate={navigate}>Check Your Profile</SecondaryButton>
          </div>
          <div className="hero-proof" aria-label="Program highlights">
            <span><strong>DBA Doctorate</strong>Scholarly Research</span>
            <span><strong>4 Partners</strong>Accredited Pathways</span>
            <span><strong>AI Ecosystem</strong>Career Acceleration</span>
          </div>
        </div>
        <div className="hero-visual reveal visible">
          <img src="/assets/dba-home-hero-v2.jpg" alt="International executives participating in a strategic DBA roundtable" />
          <div className="hero-visual-card">
            <span>Prestigious Executive Pathway</span>
            <strong>Doctoral thesis targeting actual market disruption.</strong>
            <small>London · New York · Sydney · Worldwide</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramFacts() {
  const facts = [
    ["Qualification", "Doctor of Business Administration (DBA)"],
    ["Scholarly Approach", "Applied, research-driven business models"],
    ["Candidate Profile", "Directors, consultants, and active founders"],
    ["Admissions Pipeline", "Transparent university matchmaking"]
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
          eyebrow="Proprietary Tech Suite"
          icon={Lightbulb}
          title="Custom AI application tools designed to elevate the student lifecycle."
          text="Our custom-built SaaS products are integrated into our educational pathways to streamline career outreach, simplify module navigation, and track research metrics."
        />
        <div className="product-grid">
          {productTools.map(([title, text]) => (
            <Link
              className="product-card reveal"
              key={title}
              to="/contact"
              navigate={navigate}
              aria-label={`Discuss ${title}`}
            >
              <span className="product-dot" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="product-action">Explore integration <ArrowRight size={15} aria-hidden="true" /></span>
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
          <Eyebrow icon={BriefcaseBusiness}>Enterprise Technology Solutions</Eyebrow>
          <h2>We design, engineer, and deploy high-performance SaaS, automation, and AI workflows.</h2>
          <p>Beyond our academic services, LearnifyOps serves as an active technology development partner for businesses. We build customized workflow engines, orchestrate AI agents, and implement CRM integrations to scale operations.</p>
          <PrimaryButton to="/contact" navigate={navigate}>Discuss Tech Services</PrimaryButton>
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
          eyebrow="Academic Authority"
          icon={Award}
          title="Doctoral rigor engineered for immediate enterprise impact."
          text="A Doctor of Business Administration equips you to formulate original insights, defend management decisions, and author solutions to critical bottlenecks."
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
          <div className="image-badge"><BookOpen size={18} aria-hidden="true" />Empirical Fieldwork</div>
        </div>
        <div className="split-copy reveal">
          <Eyebrow icon={Lightbulb}>Scientific Management Paradigm</Eyebrow>
          <h2>Transform live corporate challenges into your doctoral dissertation.</h2>
          <p>We believe doctoral research should yield immediate, observable market value. Your active corporate environment serves as the primary dataset, allowing you to solve organizational friction while earning your degree.</p>
          <ul className="check-list">
            <li><CheckCircle2 size={18} />Synthesize academic frameworks with corporate decisions</li>
            <li><CheckCircle2 size={18} />Enhance empirical, qualitative, and quantitative analysis</li>
            <li><CheckCircle2 size={18} />Author an original, publishable contribution to management literature</li>
          </ul>
          <PrimaryButton to="/program" navigate={navigate}>Explore DBA Pathway</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="section section-white">
      <div className="container">
        <SectionIntro eyebrow="Doctoral Roadmap" icon={Target} title="A structured transition from executive leadership to management research." />
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
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  return (
    <section className={compact ? "universities-section universities-compact" : "universities-section"}>
      <div className="container">
        <div className="universities-heading reveal">
          <div>
            <Building2 size={36} style={{ color: "var(--gold-light)", marginBottom: "16px" }} />
            <h2>Doctoral pathways matched to accredited global institutions.</h2>
          </div>
          <div className="universities-intro">
            <p>We work closely with candidates to evaluate qualifications, draft academic profiles, and facilitate direct admissions into leading international universities.</p>
            {compact && <Link className="text-link" to="/partnership" navigate={navigate}>View Partners <ArrowRight size={17} /></Link>}
          </div>
        </div>
        <div className="university-grid">
          {partnerUniversities.map((university, index) => (
            <button
              className={selectedUniversity?.name === university.name ? "university-card reveal active" : "university-card reveal"}
              key={university.name}
              type="button"
              onClick={() => setSelectedUniversity(university)}
              aria-expanded={selectedUniversity?.name === university.name}
              aria-controls="university-pathway-details"
            >
              <div className="university-card-top">
                <span className="university-mark" aria-hidden="true">{university.initials}</span>
                <span className="university-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span className="university-type">{university.type}</span>
              <h3>{university.name}</h3>
              <p>{university.overview}</p>
              <span className="university-detail">View university details <ArrowRight size={15} /></span>
            </button>
          ))}
        </div>
        {selectedUniversity && (
          <div className="university-detail-panel reveal visible" id="university-pathway-details" role="region" aria-live="polite">
            <div className="university-detail-heading">
              <div>
                <span className="university-type">{selectedUniversity.type}</span>
                <h3>{selectedUniversity.name}</h3>
                <p>{selectedUniversity.overview}</p>
              </div>
              <button className="university-detail-close" type="button" onClick={() => setSelectedUniversity(null)} aria-label="Close university details">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="university-detail-content">
              <article>
                <strong>DBA pathway focus</strong>
                <p>{selectedUniversity.focus}</p>
              </article>
              <article>
                <strong>What this pathway supports</strong>
                <ul>
                  {selectedUniversity.highlights.map((item) => (
                    <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <strong>Curriculum areas discussed during profile review</strong>
                <ul>
                  {selectedUniversity.curriculum.map((item) => (
                    <li key={item}><BookOpen size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="university-detail-actions">
              <p>Degree awarding, recognition, fees, timeline and final curriculum structure are confirmed during the selected institution’s profile review.</p>
              <PrimaryButton to="/contact" navigate={navigate}>Request Profile Review</PrimaryButton>
            </div>
          </div>
        )}
        {!compact && (
          <div className="university-note reveal">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <strong>Transparent Admissions Guidance</strong>
              <p>Course fees, modular timelines, dissertation defense regulations, and credit transfers vary per institution. We guarantee transparent options during your profile review.</p>
            </div>
            <PrimaryButton to="/contact" navigate={navigate}>Consult An Advisor</PrimaryButton>
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
        <SectionIntro eyebrow="Candidate Cohorts" icon={Users} title="Designed for ambitious managers ready to achieve board-level credibility." />
        <div className="audience-grid">
          {audience.map(([title, text]) => <article className="audience-card reveal" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="center-action"><PrimaryButton to="/admissions" navigate={navigate}>Review Entry Profile</PrimaryButton></div>
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
          <Eyebrow icon={Award}>Executive Milestones</Eyebrow>
          <h2>Earn credentials backed by academic rigor.</h2>
          <p>Gain the research literacy, statistical insight, and public defense capability to advise board members, lead transitions, and author management frameworks.</p>
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

function CohortSection() {
  return (
    <section className="section section-white">
      <div className="container split-layout reverse">
        <div className="split-copy reveal">
          <Eyebrow icon={Network}>Executive Experience</Eyebrow>
          <h2>Learn within a prestigious, globally connected peer ecosystem.</h2>
          <p>The LearnifyOps cohort model connects you with executives, founders, and consultants across major trade zones. Collaborate on modules, critique research frameworks, and build lifelong professional relationships.</p>
          <div className="mini-grid">
            <article><Globe2 size={22} /><strong>Global Perspective</strong><span>Examine management trends across US, European, and Asian markets.</span></article>
            <article><Users size={22} /><strong>C-Suite Cohorts</strong><span>Collaborate alongside experienced founders and corporate directors.</span></article>
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

function TestimonialSection() {
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

function AdmissionsSection({ navigate }) {
  return (
    <section className="section section-white">
      <div className="container admissions-layout">
        <div className="admissions-copy reveal">
          <Eyebrow icon={ShieldCheck}>Entry Standards</Eyebrow>
          <h2>Who should apply for the DBA pathway?</h2>
          <p>Successful candidates demonstrate the intellectual curiosity, analytical capacity, and management maturity required to execute independent empirical research. Every profile is evaluated individually.</p>
          <ul className="check-list">
            {eligibility.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}
          </ul>
          <PrimaryButton to="/contact" navigate={navigate}>Submit Profile Review</PrimaryButton>
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
        <SectionIntro eyebrow="Support & Advice" icon={FileText} title="Clear guidance for your doctoral journey." />
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
          <Eyebrow icon={Mail}>Advisor Onboarding</Eyebrow>
          <h2>Schedule a confidential profiles discussion.</h2>
          <p>Share your academic background, research interests, or corporate tech consulting requirements. An expert will guide you through credit reviews, university pathways, and deployment timelines.</p>
          <div className="contact-lines">
            <a href="mailto:info@learnifyops.com"><Mail size={18} />contact@learnifyops.com</a>
            <a href="tel:+447520664011"><Phone size={18} />+44 7520 664011</a>
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

function FinalCta({ navigate }) {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner reveal">
        <div><Eyebrow icon={GraduationCap}>Academic Onboarding</Eyebrow><h2>Accelerate your leadership with doctoral research and enterprise software tools.</h2></div>
        <div className="final-actions">
          <PrimaryButton to="/contact" navigate={navigate}>Consult An Advisor</PrimaryButton>
          <SecondaryButton to="/program" navigate={navigate}>View Program Details</SecondaryButton>
        </div>
      </div>
    </section>
  );
}

function HomePage({ navigate }) {
  return <><HomeHero navigate={navigate} /><ProgramFacts /><ProductEcosystemSection navigate={navigate} /><TechnologyServicesSection navigate={navigate} /><ValueSection /><UniversitiesSection navigate={navigate} compact /><ResearchSection navigate={navigate} /><JourneySection /><AudienceSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}

function ProgramPage({ navigate }) {
  return <><PageHero eyebrow="DBA Program" icon={GraduationCap} tone="midnight" image="/assets/dba-program-hero-v2.jpg" caption="Research for organizational execution" title="Earn a doctoral degree designed around corporate decision-making." text="Combine quantitative research methodologies with strategic reflection in an accredited, modular DBA pathway structured for busy leaders." /><ProgramFacts /><ValueSection /><OutcomesSection /><ResearchSection navigate={navigate} image="/assets/dba-program-research-v2.jpg" variant="program" /><FinalCta navigate={navigate} /></>;
}

function CurriculumPage({ navigate }) {
  return <><PageHero eyebrow="Curriculum Framework" icon={BookOpen} tone="editorial" image="/assets/dba-curriculum-hero-v2.jpg" caption="Empirical study, strategic value" title="Modular coursework leading to a defense-ready dissertation." text="Formulate frameworks, collect datasets, and author new management insights that address live market bottlenecks." /><CurriculumSection /><JourneySection /><ProductEcosystemSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}

function PageHeroImmersive({ eyebrow, icon, title, text, image, caption = "Global DBA pathway" }) {
  return (
    <section className="page-hero page-hero-immersive">
      <div className="page-hero-image">
        <img src={image} alt="" />
      </div>
      <div className="container page-hero-grid">
        <div className="page-hero-copy reveal visible">
          <Eyebrow icon={icon} className="eyebrow-light">{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
          <span className="page-caption">{caption}</span>
        </div>
      </div>
    </section>
  );
}

function ExperiencePage({ navigate }) {
  return <><PageHeroImmersive eyebrow="Executive Experience" icon={Network} image="/assets/dba-experience-hero-v2.jpg" caption="Prestigious global network" title="Global cohorts. Peer critiques. Modular flexibility." text="Study alongside directors, consultants, and founders who bring valuable operational data and strategic insight into the learning ecosystem." /><CohortSection /><TestimonialSection /><AudienceSection navigate={navigate} /><TechnologyServicesSection navigate={navigate} /><FinalCta navigate={navigate} /></>;
}

function AdmissionsPage({ navigate }) {
  return <><PageHero eyebrow="Admissions Profile" icon={ShieldCheck} tone="warm" image="/assets/dba-admissions-hero-v2.jpg" caption="Rigorous, personalized screening" title="Your leadership background is the primary dataset for doctoral study." text="Schedule an initial profile assessment with an advisor to verify qualifications, review transfer credits, and align academic interests." /><AdmissionsSection navigate={navigate} /><FaqSection /><FinalCta navigate={navigate} /></>;
}

function PartnershipPage({ navigate }) {
  return <><PageHero eyebrow="Partner Network" icon={Building2} tone="campus" image="/assets/dba-universities-hero-v2.jpg" caption="International pathways" title="Admissions matched directly to your career destination." text="Explore our network of accredited universities, then work with our advisors to prepare a dossier that secures admissions into the right program." /><UniversitiesSection navigate={navigate} /><section className="section section-white"><div className="container"><SectionIntro eyebrow="Admissions Consulting" icon={Globe2} title="A structured process from qualification review to formal enrollment." text="We remove administrative complexity, helping you select a pathway, write research topics, and gather professional recommendations." /><div className="value-grid"><article className="value-card reveal"><span className="icon-box"><FileText size={23} /></span><h3>Accredited Matching</h3><p>Verify that your awarded credentials hold academic value across global jurisdictions.</p></article><article className="value-card reveal"><span className="icon-box"><Users size={23} /></span><h3>Onboarding Counsel</h3><p>Draft research objectives and statements of motivation that align with faculty interests.</p></article><article className="value-card reveal"><span className="icon-box"><Building2 size={23} /></span><h3>Institutional Reviews</h3><p>Compare modular schedules, credit requirements, and fees across four partner institutions.</p></article><article className="value-card reveal"><span className="icon-box"><ShieldCheck size={23} /></span><h3>Guaranteed Transparency</h3><p>Obtain clear advice on degree awarding, academic recognition, and program costs before applying.</p></article></div></div></section><FinalCta navigate={navigate} /></>;
}

function ContactPage({ navigate, contactProps }) {
  return <><PageHero eyebrow="Advisor Consultation" icon={Mail} tone="contact" image="/assets/dba-contact-hero-v2.jpg" caption="Start with a profile review" title="Explore executive pathways and corporate software options." text="Schedule a consultation with an advisor to review credentials, request prospectus documents, or discuss enterprise SaaS integrations." /><ContactSection {...contactProps} /><FinalCta navigate={navigate} /></>;
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="footer-brand" to="/" navigate={navigate}><BrandLogo /></Link>
          <p>LearnifyOps offers prestigious DBA program guidance, enterprise AI systems, and operations software integration for global students and enterprises.</p>
          <span className="footer-disclaimer">University selection, course syllabi, fees, and awarding models are confirmed during the admissions process.</span>
        </div>
        <div className="footer-links">
          <strong>DBA Program</strong>
          <Link to="/program" navigate={navigate}>Overview</Link>
          <Link to="/curriculum" navigate={navigate}>Curriculum</Link>
          <Link to="/experience" navigate={navigate}>Experience</Link>
        </div>
        <div className="footer-links">
          <strong>Admissions</strong>
          <Link to="/admissions" navigate={navigate}>Qualifications</Link>
          <Link to="/partnership" navigate={navigate}>Partner Network</Link>
          <Link to="/contact" navigate={navigate}>Book Discussion</Link>
        </div>
      </div>
      <div className="container footer-bottom"><span>Copyright 2026 LearnifyOps. All rights reserved.</span><span>DBA Pathways · Enterprise Systems · Tech Consulting</span></div>
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
          <p><strong>GDPR Statement:</strong> This website uses local storage exclusively for session performance. No marketing cookies are active.</p>
          <button type="button" onClick={() => { localStorage.setItem("learnifyops-cookie-note", "dismissed"); setCookieDismissed(true); }}>OK</button>
        </div>
      )}
      <Footer navigate={navigate} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
