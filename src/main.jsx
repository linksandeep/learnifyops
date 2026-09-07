import React, { useEffect, useRef, useState } from "react";
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
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X
} from "lucide-react";
import "./styles.css";

const logo = "/assets/learnify-logo.jpg";
const britInstituteUrl = "https://britinstitute.uk/";
const dbaBrochureUrl = "/assets/learnifyops-dba-brochure.pdf";
const dbaCurriculumUrl = "/assets/learnifyops-dba-curriculum-overview.pdf";

const navItems = [
  ["Home", "/"],
  ["DBA Programme", "/program"],
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
    slug: "kennedy-university",
    type: "Partner University",
    country: "USA",
    programTitle: "Kennedy University DBA",
    focus: "Executive strategy, governance and applied management research",
    overview: "A DBA pathway for experienced professionals seeking to connect applied business research with strategy, governance and leadership practice within a flexible study structure.",
    duration: "24–48 months",
    delivery: "Online, part-time, hybrid",
    accreditation: "Institutional and recognition information provided before enrolment",
    about: "Programme, awarding and institutional information is provided during the university comparison process and should be independently reviewed before enrolment.",
    highlights: [
      "Minimum 8+ years of professional experience in business, management or a related field",
      "Bachelor's degree or equivalent professional accomplishment",
      "Demonstrated leadership experience and measurable professional impact",
      "English proficiency suitable for doctoral writing and research defense"
    ],
    curriculum: [
      "Executive Leadership & Governance",
      "Advanced Business Analytics",
      "Global Market Strategy",
      "Organizational Transformation",
      "Doctoral Research & Publication"
    ],
    certificate: "Indicative sample certificate information is shared during the Kennedy University pathway review."
  },
  {
    initials: "BU",
    name: "Birchwood University",
    slug: "birchwood-university",
    type: "Partner University",
    country: "USA / International",
    programTitle: "Birchwood University DBA",
    focus: "Innovation, entrepreneurship and organizational transformation",
    overview: "A DBA pathway for experienced professionals interested in applied research across entrepreneurship, organisational change, innovation and practical business model development.",
    duration: "24–48 months",
    delivery: "Online, flexible executive format",
    accreditation: "Institutional and awarding information provided before enrolment",
    about: "Programme, awarding and institutional information is provided during the university comparison process and should be independently reviewed before enrolment.",
    highlights: [
      "Suitable for entrepreneurs, managers and transformation leaders",
      "Professional leadership background considered during entry review",
      "Research interest aligned with business model innovation or growth",
      "Admission and credit details confirmed during candidate review"
    ],
    curriculum: [
      "Innovation and Global Business Models",
      "Organizational Change and Transformation",
      "Strategic Management Research",
      "Research Proposal Development",
      "Applied Dissertation Project"
    ],
    certificate: "Sample award format and documentation route are reviewed before application."
  },
  {
    initials: "FCU",
    name: "Florida Coastal University",
    slug: "florida-coastal-university",
    type: "Partner University",
    country: "USA",
    programTitle: "Florida Coastal University DBA",
    focus: "Global business, operational excellence and leadership practice",
    overview: "A DBA pathway for experienced professionals exploring applied research in global business, operational performance, leadership practice and evidence-based decision-making.",
    duration: "24–48 months",
    delivery: "Online and part-time study options",
    accreditation: "Institutional and recognition information provided before enrolment",
    about: "Programme, awarding and institutional information is provided during the university comparison process and should be independently reviewed before enrolment.",
    highlights: [
      "Business leadership pathway for experienced candidates",
      "Applied research connected to executive practice",
      "Suitable for senior professionals and consultants",
      "Curriculum and fee structure reviewed before application"
    ],
    curriculum: [
      "Global Management and Operational Strategy",
      "Quantitative and Qualitative Research Methods",
      "Leadership Practice and Governance",
      "Business Execution and Performance Research",
      "Doctoral Thesis or Applied Research Defense"
    ],
    certificate: "Certificate and transcript pathway information is explained during university comparison."
  },
  {
    initials: "LSBS",
    name: "London School of Business and Science",
    slug: "london-school-of-business-and-science",
    type: "Partner Institution",
    country: "United Kingdom",
    programTitle: "London School of Business and Science DBA Pathway",
    focus: "Applied leadership, business strategy and executive research practice",
    overview: "A DBA pathway for working professionals comparing applied business research in leadership, consulting, strategy and organisational performance within a flexible study format.",
    duration: "24–48 months",
    delivery: "Online, blended and executive-friendly",
    accreditation: "Institutional and awarding information provided before enrolment",
    about: "Programme, awarding and institutional information is provided during the university comparison process and should be independently reviewed before enrolment.",
    highlights: [
      "Suitable for managers, founders and business consultants",
      "Professional leadership experience considered during profile review",
      "Research interest aligned with strategic business improvement",
      "Documentation and entry route confirmed before application"
    ],
    curriculum: [
      "Executive Strategy and Leadership",
      "Applied Business Research Methods",
      "Organizational Performance and Change",
      "Global Business Decision-making",
      "Doctoral Research Project"
    ],
    certificate: "Indicative certificate information and pathway documentation are shared during the profile review."
  },
  {
    initials: "DBS",
    name: "Dunster Business School",
    slug: "dunster-business-school",
    type: "Partner Institution",
    country: "International",
    programTitle: "Dunster Business School DBA",
    focus: "International business, leadership practice and applied executive scholarship",
    overview: "A DBA pathway for senior professionals interested in international business, leadership practice and structured research focused on practical management questions.",
    duration: "24–48 months",
    delivery: "Online and part-time executive study",
    accreditation: "Institutional and awarding information provided before enrolment",
    about: "Programme, awarding and institutional information is provided during the university comparison process and should be independently reviewed before enrolment.",
    highlights: [
      "Designed for experienced managers and senior professionals",
      "Suitable for international executive and consulting profiles",
      "Applied research topic reviewed before application",
      "Final admissions route confirmed during advisor consultation"
    ],
    curriculum: [
      "International Business Strategy",
      "Executive Leadership and Governance",
      "Advanced Management Research",
      "Organizational Transformation",
      "Doctoral Thesis Development"
    ],
    certificate: "Sample certificate and final award route are discussed with eligible candidates before application."
  },
  {
    initials: "EMIT",
    name: "EMIT",
    slug: "emit",
    type: "Partner Institution",
    country: "International",
    programTitle: "EMIT DBA Pathway",
    focus: "Technology management, AI automation and enterprise systems",
    overview: "A technology-oriented DBA pathway for professionals interested in applied management research across digital transformation, enterprise systems, automation and organisational change.",
    duration: "24–48 months",
    delivery: "Online, modular, executive-friendly",
    accreditation: "Institutional and awarding information provided before enrolment",
    about: "Programme, awarding and institutional information is provided during the university comparison process and should be independently reviewed before enrolment.",
    highlights: [
      "Relevant for founders, consultants and tech-enabled managers",
      "Connects business research with digital transformation",
      "Suitable for AI automation and enterprise systems research",
      "Pathway details validated during candidate profile review"
    ],
    curriculum: [
      "Digital Transformation and AI-enabled Operations",
      "Enterprise Systems and Process Automation",
      "Technology Strategy and Change Management",
      "Applied Business Research Methods",
      "Doctoral Research Project"
    ],
    certificate: "Indicative certificate and institutional documentation are discussed with eligible candidates."
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

const navToolItems = [
  {
    title: "Career Automation",
    text: "AI-powered Auto-Apply, opportunity matching and smart career workflows that help students save time, increase interview chances and move faster toward employment."
  },
  {
    title: "Enterprise Learning Management System",
    text: "Enterprise LMS, Adaptive AI Learning Assistant, live classes, assessments, certificates and real-time learner progress tracking in one unified platform."
  },
  {
    title: "Student Success",
    text: "Professional CV Optimizer, Student Milestone Dashboard and Executive Career Placement Portal for resume improvement, academic tracking and placement support."
  },
  {
    title: "Operations Systems",
    text: "Strategic Career Tracking Analytics plus Enterprise CRM & Admissions Console for lead management, student engagement, automation and data-led decisions."
  }
];

const toolsServicesMenuColumns = [
  {
    title: "Tools",
    intro: "",
    items: navToolItems
  },
  {
    title: "Services",
    intro: "",
    items: [
      { title: "Build & Automate SaaS Products", text: "Turn ideas into scalable SaaS platforms with product design, development, deployment and support." },
      { title: "AI Automation Solutions", text: "Use AI-powered automation to remove repetitive tasks and improve operational efficiency." },
      { title: "Custom Software Development", text: "Create tailored web, mobile and enterprise applications aligned with business workflows." },
      { title: "Marketing Technology", text: "Build automated lead funnels, campaign workflows, analytics and customer acquisition systems." },
      { title: "CRM & Lead Management", text: "Deploy CRM systems to manage leads, automate follow-ups and improve sales pipelines." },
      { title: "Technology Consulting", text: "Define technology strategy, modernize operations, adopt AI and build scalable digital systems." }
    ]
  }
];

const doctoralMenuTabs = [
  {
    label: "DBA",
    items: partnerUniversities.map((university) => ({
      title: university.programTitle,
      text: university.focus,
      to: `/universities/${university.slug}`,
      badge: university.country
    }))
  },
  {
    label: "PhD",
    items: [
      { title: "PhD Pathway Review", text: "Research doctorate options are reviewed after academic profile screening.", to: "/contact" },
      { title: "Supervisor Fit Discussion", text: "Topic readiness, academic background and supervisor fit are discussed confidentially.", to: "/contact" }
    ]
  },
  {
    label: "Honorary Doctorate",
    items: [
      { title: "Professional Impact Review", text: "Eligibility criteria and institutional requirements are explained before any application begins.", to: "/contact" },
      { title: "Institutional Eligibility Check", text: "Final criteria are confirmed by the selected awarding institution.", to: "/contact" },
      { title: "Profile Documentation", text: "Support for achievement summaries, references and required institutional evidence.", to: "/contact" }
    ]
  },
  {
    label: "Overview",
    items: [
      { title: "DBA Program Overview", text: "Understand the Doctor of Business Administration pathway for working leaders.", to: "/program" },
      { title: "Profile-first Guidance", text: "We confirm fit, documentation and institution options before enrollment.", to: "/admissions" },
      { title: "Partner Institution Comparison", text: "Review available institutions, delivery models and degree routes.", to: "/partnership" }
    ]
  }
];

const megaMenus = [
  {
    key: "dba",
    label: "DBA Program",
    columns: dbaMenuColumns,
    footer: "Premium doctoral positioning for executives, entrepreneurs and senior managers.",
    cta: { label: "Request Prospectus", to: "/contact" },
    feature: {
      eyebrow: "DBA PATHWAY",
      title: "A research-led DBA for experienced professionals.",
      text: "Compare delivery formats, university options and admissions requirements before you apply.",
      image: "/assets/dba-program-hero-v2.jpg",
      to: "/program"
    }
  },
  {
    key: "doctoral",
    label: "Doctoral",
    type: "doctoral",
    tabs: doctoralMenuTabs,
    footer: "DBA university pages open directly. PhD and honorary doctorate routes start with a confidential profile discussion.",
    cta: { label: "Schedule Profile Discussion", to: "/contact" },
    feature: {
      eyebrow: "INTERNATIONAL PATHWAYS",
      title: "Explore the institutions behind your next step.",
      text: "Review DBA pathway information, then start with a confidential profile discussion.",
      image: "/assets/dba-universities-hero-v2.jpg",
      to: "/partnership"
    }
  },
  {
    key: "certification",
    label: "Certification Program",
    columns: certificationMenuColumns,
    footer: "Certification programs, LMS access and placement-support tools are delivered by Brit Institute, a branch under LearnifyOps.",
    cta: { label: "Visit Brit Institute Website", href: britInstituteUrl, external: true },
    feature: {
      eyebrow: "PROFESSIONAL LEARNING",
      title: "Build practical skills for the work ahead.",
      text: "Explore career-focused certifications, mentorship and placement support through Brit Institute.",
      image: "/assets/youth-empowerment.png",
      to: "/contact"
    }
  },
  {
    key: "tools-services",
    label: "Tools & Services",
    columns: toolsServicesMenuColumns,
    footer: "Our tools support the LearnifyOps student ecosystem, while our services help outside businesses build software, automation and growth systems.",
    cta: { label: "Discuss with Team", to: "/contact" },
    feature: {
      eyebrow: "BUILD WITH LEARNIFYOPS",
      title: "Technology designed around real operating needs.",
      text: "From AI automation to custom software, build a clearer and more capable workflow.",
      image: "/assets/global-ai-hero.png",
      to: "/contact"
    }
  }
];

const valuePillars = [
  {
    icon: FileSearch,
    title: "Advanced Research Skills",
    text: "Evaluate evidence, conduct structured research and develop defensible conclusions for complex business and management questions."
  },
  {
    icon: Target,
    title: "Strategic Decision-Making",
    text: "Apply research and analytical frameworks to complex organisational challenges, strategic choices and long-term planning."
  },
  {
    icon: Award,
    title: "Professional Credibility",
    text: "Demonstrate advanced expertise within a professional, industry or specialist field through structured doctoral study."
  },
  {
    icon: Lightbulb,
    title: "Thought Leadership",
    text: "Develop original research around an industry, organisational or management challenge relevant to your professional experience."
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Flexibility",
    text: "Support professional development across leadership, consulting, entrepreneurship and academic-practitioner roles."
  },
  {
    icon: Network,
    title: "International Network",
    text: "Connect with experienced professionals across industries and markets while developing your research perspective."
  }
];

const audience = [
  ["Senior Managers & Executives", "Develop advanced research, strategic analysis and evidence-based decision-making capabilities."],
  ["Entrepreneurs & Founders", "Research business models, innovation, growth and organisational challenges within a doctoral framework."],
  ["Consultants", "Build deeper subject-matter expertise and research capability relevant to advisory work."],
  ["Corporate Directors", "Apply advanced research methods to strategy, governance and organisational transformation."],
  ["Public Sector Leaders", "Research institutional performance, policy and complex organisational challenges."],
  ["Academic & Industry Practitioners", "Combine professional experience with advanced applied business research."]
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
    title: "International Business & Growth Strategy",
    text: "Investigate market conditions, innovation and operational choices affecting responsible growth across international markets."
  },
  {
    number: "04",
    title: "Applied Doctoral Thesis & Research Project",
    text: "Synthesize executive insights into a peer-reviewed, defense-ready dissertation solving a critical business challenge."
  }
];

const journey = [
  ["Eligibility Review", "Review your academic background, professional experience and objectives."],
  ["University Comparison", "Identify DBA pathways aligned with your candidate profile and study preferences."],
  ["Programme Consultation", "Understand the institution, structure, fees, study format and requirements."],
  ["Application Support", "Prepare the documentation required for the applicable admissions process."],
  ["Enrolment", "Complete the selected institution's admissions and onboarding requirements."],
  ["Research Journey", "Progress through modules, research development and dissertation requirements set by the selected institution."]
];

const researchTopics = [
  "Business strategy",
  "Leadership",
  "Organisational change",
  "Digital transformation",
  "Entrepreneurship",
  "Operations",
  "Marketing",
  "Finance",
  "Governance",
  "Innovation",
  "International business",
  "Human capital"
];

const appliedResearchSteps = [
  "Define a research problem",
  "Review academic literature",
  "Select an appropriate methodology",
  "Collect qualitative or quantitative evidence",
  "Analyse findings",
  "Develop conclusions",
  "Produce a doctoral dissertation"
];

const outcomes = [
  "Evaluate evidence and make defensible conclusions",
  "Apply qualitative and quantitative research methods",
  "Develop an evidence-based response to a management problem",
  "Communicate complex research to professional audiences",
  "Build specialist knowledge in a relevant business field",
  "Prepare and defend a doctoral dissertation where required"
];

const admissionsSteps = [
  ["Academic Eligibility", "Review previous qualifications against institution-specific entry requirements."],
  ["Professional Experience", "Assess relevant management, leadership, consulting or specialist experience."],
  ["Research Interests", "Identify potential doctoral research areas connected to your experience and goals."],
  ["University Options", "Compare applicable DBA pathways across the LearnifyOps partner network."],
  ["Programme Structure", "Understand modules, dissertation requirements, study format and expected duration."],
  ["Fees & Enrolment", "Receive institution-specific fees and enrolment information before making a commitment."]
];

const admissionsStats = [
  ["1:1", "Admissions Review"],
  ["Clear", "University Comparison"],
  ["Flexible", "Study Options"],
  ["Applied", "Business Research"]
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
  ["How are awarding arrangements explained?", "Programme delivery and awarding arrangements vary by pathway. LearnifyOps explains the available information before enrolment and encourages candidates to verify it independently."],
  ["What is the main difference between an MBA and a DBA?", "An MBA covers broad management principles. A DBA focuses on applying established research methods to a substantial business or management problem."]
];

const heroCapabilities = [
  ["AI Training", "Practical learning for automation and modern business workflows"],
  ["LMS Solutions", "Course delivery, learner progress and resource management"],
  ["CRM Software", "Lead, admissions and placement pipeline visibility"],
  ["AI Automation", "Agentic workflows for repetitive operational tasks"],
  ["Job Assistance", "Resume, interview, applications and placement support"],
  ["Corporate Training", "Upskilling programs for teams and business functions"]
];

const trustMetrics = [
  ["International", "Partner Universities"],
  ["1:1", "Admissions Review"],
  ["Flexible", "Study Options"],
  ["Applied", "Business Research"],
  ["International", "Candidate Network"],
  ["Clear", "Admissions Guidance"]
];

const academicNetworkSignals = [
  ["University and Awarding Institution", "Understand which organisation delivers the programme and which institution makes the award, where applicable."],
  ["Programme Structure", "Compare taught modules, research stages and dissertation requirements before applying."],
  ["Entry Requirements", "Review academic, professional and English-language requirements for each available route."],
  ["Research Expectations", "Understand proposal, methodology, supervision and dissertation expectations."],
  ["Study Format and Duration", "Compare online, blended or other available formats and expected completion times."],
  ["Programme Fees", "Receive institution-specific fee information before making a commitment."],
  ["Institutional Information", "Review recognition and institutional information independently before enrolment."],
  ["Application Process", "Understand required documents, admissions stages and onboarding steps."]
];

const clientProofTiles = [
  "Education Providers",
  "Training Institutes",
  "Recruitment Teams",
  "SaaS Startups",
  "SME Operations",
  "Corporate L&D"
];

const learnerJourney = [
  ["Enroll", "Choose your pathway and complete onboarding."],
  ["Live Classes", "Learn through structured sessions and guided resources."],
  ["Projects", "Build practical evidence through real workflow assignments."],
  ["Mentorship", "Get 1-on-1 guidance for skills, profile and direction."],
  ["Interview Prep", "Practice, refine your resume and improve confidence."],
  ["Placement", "Use CRM-backed application tracking and support workflows."],
  ["Community", "Stay connected through long-term learning and career support."]
];

const comparisonRows = [
  ["Recorded-only videos", "Live mentorship with guided support"],
  ["Theory-heavy learning", "Real projects and workflow implementation"],
  ["No CRM access", "CRM-style career and admissions tracking"],
  ["No AI tools", "AI automation included in the ecosystem"],
  ["No LMS visibility", "Dedicated LMS and progress dashboard"],
  ["Limited after-course help", "Ongoing career and technology support"]
];

const ecosystemFlow = [
  "LMS",
  "Lead Management CRM",
  "AI Automation",
  "Student Portal",
  "Teacher Portal",
  "Certificates",
  "Placement Portal",
  "WhatsApp AI",
  "Analytics Dashboard"
];

const successSnapshots = [
  {
    name: "Career Switcher",
    before: "Unstructured applications",
    after: "Tracked placement pipeline",
    outcome: "Resume, interview prep and auto-apply workflow support"
  },
  {
    name: "Working Professional",
    before: "Manual learning progress",
    after: "LMS-led milestones",
    outcome: "Clear modules, resources and progress visibility"
  },
  {
    name: "Small Business Team",
    before: "Spreadsheet-based follow-up",
    after: "CRM + automation workflow",
    outcome: "Lead tracking, reminders and productivity improvements"
  }
];

const companyTimeline = [
  ["Foundation", "Built around education, placement and digital operations support."],
  ["Student Programs", "Expanded into certification programs and career-readiness workflows."],
  ["CRM Launch", "Introduced lead, admissions and placement tracking systems."],
  ["LMS Launch", "Centralized learner resources, progress and delivery management."],
  ["AI Automation", "Added auto-apply, resume, learning and workflow automation tools."],
  ["Global Expansion", "Positioned services for international learners and business clients."]
];

function universityPath(university) {
  return `/universities/${university.slug}`;
}

function getUniversityByPath(pathname) {
  const slug = pathname.replace(/\/$/, "").split("/universities/")[1];
  return partnerUniversities.find((university) => university.slug === slug);
}

function normalisePath(pathname) {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (getUniversityByPath(clean)) return clean;
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

function BrandLogo({ variant = "full" }) {
  if (variant === "navigation") {
    return <span className="brand-mark"><img src={logo} alt="LearnifyOps" /></span>;
  }

  return <img className="brand-logo" src={logo} alt="LearnifyOps" />;
}

function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setOpenMega(null);
  }, [path]);

  useEffect(() => {
    const closeOnScroll = () => {
      setOpen(false);
      setOpenMega(null);
    };

    const closeOnOutsidePointer = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        closeOnScroll();
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        closeOnScroll();
      }
    };

    window.addEventListener("scroll", closeOnScroll, { passive: true, capture: true });
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", closeOnScroll, { capture: true });
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setOpenMega(null);
  };

  return (
    <>
      <header className={path === "/" ? "site-header home-header" : "site-header"} ref={headerRef} onMouseLeave={() => setOpenMega(null)}>
      <div className="global-bar">
        <div className="container global-bar-inner">
          <span className="global-brandline"><Globe2 size={14} aria-hidden="true" /> Brit Institute Education Ecosystem</span>
          <span className="global-menu-line">Doctoral Pathway <i /> Skill Certifications <i /> Tools & Services</span>
          <a className="global-link" href={britInstituteUrl} target="_blank" rel="noreferrer">Visit Brit Institute <ArrowRight size={13} aria-hidden="true" /></a>
        </div>
      </div>
      <nav className="nav container" aria-label="Primary navigation">
        <Link className="brand" to="/" navigate={navigate} aria-label="LearnifyOps DBA home">
          <BrandLogo variant="navigation" />
        </Link>
        <div className={open ? "nav-links open" : "nav-links"} id="primary-navigation">
          {megaMenus.map((menu) => (
            <React.Fragment key={menu.key}>
              <div
                className="mega-nav-item"
                onMouseEnter={() => setOpenMega(menu.key)}
                onFocus={() => setOpenMega(menu.key)}
              >
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
              {menu.key === "doctoral" && (
                <Link to="/partnership" navigate={navigate} className={path === "/partnership" ? "active" : undefined} onMouseEnter={() => setOpenMega(null)} onNavigate={closeMenus}>
                  Universities
                </Link>
              )}
            </React.Fragment>
          ))}
          <Link to="/admissions" navigate={navigate} className={path === "/admissions" ? "active" : undefined} onMouseEnter={() => setOpenMega(null)} onNavigate={closeMenus}>
            Admissions
          </Link>
        </div>
        <Link className="header-search" to="/contact" navigate={navigate} onMouseEnter={() => setOpenMega(null)} aria-label="Contact LearnifyOps">
          <Search size={24} aria-hidden="true" />
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
      <div className={openMega ? "mega-page-overlay open" : "mega-page-overlay"} aria-hidden="true" />
    </>
  );
}

function MegaMenu({ id, menu, navigate, open, onNavigate }) {
  const [activeTab, setActiveTab] = useState(menu.tabs?.[0]?.label || "");
  const activeDoctoralTab = menu.tabs?.find((tab) => tab.label === activeTab) || menu.tabs?.[0];
  const menuClassName = [
    "mega-menu",
    `mega-menu-${menu.key}`,
    menu.type === "doctoral" ? "mega-menu-doctoral" : "",
    open ? "open" : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={menuClassName} id={id} role="region" aria-label={`${menu.label} menu`}>
      <div className="mega-menu-main">
        <div className="mega-menu-content">
          {menu.type === "doctoral" ? (
            <div className="doctoral-mega-layout">
              <div className="doctoral-mega-tabs" role="tablist" aria-label="Doctoral route categories">
                {menu.tabs.map((tab) => (
                  <button
                    key={tab.label}
                    type="button"
                    className={activeDoctoralTab?.label === tab.label ? "doctoral-mega-tab active" : "doctoral-mega-tab"}
                    onMouseEnter={() => setActiveTab(tab.label)}
                    onFocus={() => setActiveTab(tab.label)}
                    onClick={() => setActiveTab(tab.label)}
                    role="tab"
                    aria-selected={activeDoctoralTab?.label === tab.label}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="doctoral-mega-panel" role="tabpanel">
                {activeDoctoralTab?.items.map((item) => (
                  item.to ? (
                    <Link
                      key={item.title}
                      to={item.to}
                      navigate={navigate}
                      className="doctoral-mega-item doctoral-mega-link"
                      onNavigate={onNavigate}
                    >
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <article className="doctoral-mega-item" key={item.title}>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </article>
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className={menu.key === "tools-services" ? "mega-menu-grid mega-menu-grid-tools-services" : "mega-menu-grid"}>
              {menu.columns.map((column) => (
                <div className="mega-menu-column" key={column.title}>
                  <strong>{column.title}</strong>
                  {column.intro && <p className="mega-menu-column-intro">{column.intro}</p>}
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
          )}
        </div>
        <Link className="mega-feature" to={menu.feature.to} navigate={navigate} onNavigate={onNavigate}>
          <img src={menu.feature.image} alt="" />
          <div className="mega-feature-copy">
            <span>{menu.feature.eyebrow}</span>
            <strong>{menu.feature.title}</strong>
            <p>{menu.feature.text}</p>
            <i><ArrowRight size={21} aria-hidden="true" /></i>
          </div>
        </Link>
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

function DownloadButton({ file, label, className = "", children }) {
  const openGate = () => {
    window.dispatchEvent(new CustomEvent("learnifyops:download-gate", {
      detail: { file, label }
    }));
  };

  return (
    <button className={`download-gate-trigger ${className}`.trim()} type="button" onClick={openGate}>
      {children || label}
    </button>
  );
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
          <Eyebrow icon={GraduationCap}>Doctor of Business Administration</Eyebrow>
          <h1>Advance your career with a DBA designed for <span>experienced professionals.</span></h1>
          <p className="hero-lead">Compare DBA pathways from international partner institutions, understand your eligibility, and receive personalised admissions support from application through enrolment.</p>
          <div className="partnership-note"><Building2 size={18} aria-hidden="true" /><span>For senior managers, founders, consultants, directors and experienced professionals developing their research and strategic decision-making capabilities.</span></div>
          <div className="hero-actions">
            <PrimaryButton to="/contact" navigate={navigate}>Book DBA Consultation</PrimaryButton>
            <DownloadButton className="btn btn-secondary" file={dbaBrochureUrl} label="DBA Programme Brochure">Download Programme Brochure</DownloadButton>
          </div>
        </div>
        <div className="hero-visual reveal visible">
          <img src="/assets/dba-home-hero-v2.jpg" alt="International executives participating in a strategic DBA roundtable" />
          <div className="hero-visual-card">
            <span>Compare International DBA Pathways</span>
            <strong>University options, eligibility and admissions guidance in one place.</strong>
            <small>United Kingdom · Europe · Middle East · Asia · International</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobalAcademicNetworkSection({ navigate }) {
  return (
    <section className="section academic-network-section">
      <div className="container academic-network-layout">
        <div className="academic-network-copy reveal">
          <Eyebrow icon={Globe2}>International DBA Pathways</Eyebrow>
          <h2>Compare universities before you make your decision.</h2>
          <p>LearnifyOps helps professionals evaluate DBA programmes based on their background, research interests, preferred study format and career goals.</p>
          <PrimaryButton to="/partnership" navigate={navigate}>Explore Partner Universities</PrimaryButton>
        </div>
        <div className="academic-network-panel reveal">
          {academicNetworkSignals.map(([title, text]) => (
            <article key={title}>
              <span><CheckCircle2 size={17} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="container academic-logo-marquee reveal" aria-label="Partner institutions">
        {partnerUniversities.concat(partnerUniversities).map((university, index) => (
          <span key={`${university.name}-${index}`}>{university.name}</span>
        ))}
      </div>
    </section>
  );
}

function TrustIndicatorsSection() {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {trustMetrics.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClientProofSection() {
  return (
    <section className="section section-white proof-section">
      <div className="container">
        <SectionIntro
          eyebrow="Audience Fit"
          icon={ShieldCheck}
          title="Built for education teams, business operators and placement-focused programs."
          text="This section shows the real audience categories LearnifyOps serves without using Brit Institute reviews or unsupplied client claims."
        />
        <div className="client-logo-grid">
          {clientProofTiles.map((item) => (
            <article className="client-logo-tile reveal" key={item}>
              <span>{item.split(" ").map((word) => word[0]).join("")}</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningJourneySection() {
  return (
    <section className="section section-sky journey-path-section">
      <div className="container">
        <SectionIntro
          eyebrow="Learner Journey"
          icon={Target}
          title="A clear path from enrolment to placement readiness."
          text="Visitors understand the process quickly when the learning, mentorship and placement flow is visible."
        />
        <div className="learning-journey">
          {learnerJourney.map(([title, text], index) => (
            <article className="journey-step reveal" key={title}>
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

function WhyChooseSection() {
  return (
    <section className="section section-white comparison-section">
      <div className="container">
        <SectionIntro
          eyebrow="Why Choose LearnifyOps"
          icon={Award}
          title="More than a course platform — a training, technology and placement ecosystem."
        />
        <div className="comparison-table reveal">
          <div className="comparison-head"><span>Typical platforms</span><span>LearnifyOps</span></div>
          {comparisonRows.map(([others, learnify]) => (
            <div className="comparison-row" key={others}>
              <span>{others}</span>
              <strong><CheckCircle2 size={17} aria-hidden="true" />{learnify}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemMapSection({ navigate }) {
  return (
    <section className="section ecosystem-map-section">
      <div className="container ecosystem-layout">
        <div className="ecosystem-copy reveal">
          <Eyebrow icon={Network}>LearnifyOps Ecosystem</Eyebrow>
          <h2>One connected product suite for learning, automation and placement operations.</h2>
          <p>Visitors should immediately see that LearnifyOps is not just training. It combines LMS delivery, CRM visibility, AI automation, portals, certificates and analytics into one operating model.</p>
          <PrimaryButton to="/contact" navigate={navigate}>Talk to an Expert</PrimaryButton>
        </div>
        <div className="ecosystem-device reveal" aria-label="Interactive dashboard preview">
          <div className="device-top"><span /><span /><span /></div>
          <div className="device-screen">
            <aside>
              <strong>Dashboard</strong>
              <span>CRM</span>
              <span>LMS</span>
              <span>AI Jobs</span>
              <span>Analytics</span>
            </aside>
            <main>
              <div className="screen-chart"><span style={{ height: "54%" }} /><span style={{ height: "76%" }} /><span style={{ height: "42%" }} /><span style={{ height: "88%" }} /></div>
              <div className="screen-cards">
                <span>Students</span>
                <span>Leads</span>
                <span>Placements</span>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="container ecosystem-flow reveal">
        {ecosystemFlow.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function SuccessSnapshotsSection() {
  return (
    <section className="section section-white success-section">
      <div className="container">
        <SectionIntro
          eyebrow="Outcome Frameworks"
          icon={Users}
          title="Every learner or business journey should show measurable progress."
          text="These structured outcome cards explain how LearnifyOps supports career movement, LMS visibility and business productivity without using unverified public-review claims."
        />
        <div className="success-grid">
          {successSnapshots.map((story) => (
            <article className="success-card reveal" key={story.name}>
              <div className="success-avatar">{story.name.split(" ").map((word) => word[0]).join("")}</div>
              <span>{story.name}</span>
              <h3>{story.outcome}</h3>
              <div className="success-before-after">
                <p><strong>Before</strong>{story.before}</p>
                <p><strong>After</strong>{story.after}</p>
              </div>
              <span className="proof-ready">Outcome journey</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyTimelineSection() {
  return (
    <section className="section timeline-section">
      <div className="container">
        <SectionIntro
          eyebrow="Company Timeline"
          icon={Clock3}
          title="From training support to a complete AI-enabled education and technology company."
        />
        <div className="company-timeline">
          {companyTimeline.map(([title, text], index) => (
            <article className="timeline-item reveal" key={title}>
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
        <div className="brit-institute-note reveal">
          <div>
            <span>Brit Institute delivery branch</span>
            <h3>Certification programs, LMS-enabled learning, mentoring, and placement support are delivered through Brit Institute under the LearnifyOps ecosystem.</h3>
            <p>LearnifyOps builds the technology and automation ecosystem, while Brit Institute focuses on skill certifications, learner support, LMS access, interview preparation, career mentoring, and placement readiness.</p>
          </div>
          <a className="btn btn-primary" href={britInstituteUrl} target="_blank" rel="noreferrer">Visit Brit Institute <ArrowRight size={18} aria-hidden="true" /></a>
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
    <section className="section section-white benefits-section">
      <div className="container">
        <SectionIntro
          eyebrow="Professional Development"
          icon={Award}
          title="Why pursue a DBA?"
          text="A Doctor of Business Administration can strengthen research capability, strategic thinking and specialist expertise. Career outcomes depend on the individual and their context."
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
          <div className="image-badge"><BookOpen size={18} aria-hidden="true" />Applied Business Research</div>
        </div>
        <div className="split-copy reveal">
          <Eyebrow icon={Lightbulb}>From Experience to Doctoral Research</Eyebrow>
          <h2>Turn your professional expertise into structured business research.</h2>
          <p>A DBA applies established research methodologies to important business and management problems. Your research area should reflect your experience, interests and the requirements of your selected institution.</p>
          <div className="research-topic-grid" aria-label="Potential DBA research areas">
            {researchTopics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
          <PrimaryButton to="/program" navigate={navigate}>Explore the DBA Programme</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

function JourneySection({ navigate }) {
  return (
    <section className="section section-white dba-journey-section">
      <div className="container">
        <SectionIntro eyebrow="Your DBA Journey" icon={Target} title="A clear pathway from eligibility review to doctoral research." />
        <div className="journey-grid">
          {journey.map(([title, text], index) => (
            <article className="journey-card reveal" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="center-action"><PrimaryButton to="/contact" navigate={navigate}>Book a DBA Consultation</PrimaryButton></div>
      </div>
    </section>
  );
}

function AppliedResearchSection() {
  return (
    <section className="section section-sky applied-research-section">
      <div className="container">
        <SectionIntro
          eyebrow="Applied Research Process"
          icon={FileSearch}
          title="Research a business challenge that matters to your career."
          text="DBA candidates may investigate a relevant organisational, industry or management challenge using structured academic research methods."
        />
        <div className="research-process-grid">
          {appliedResearchSteps.map((step, index) => (
            <article className="research-process-card reveal" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UniversitiesSection({ navigate, compact = false }) {
  const universityRailRef = useRef(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const slideUniversities = (direction) => {
    universityRailRef.current?.scrollBy({
      left: direction * 380,
      behavior: "smooth"
    });
  };

  return (
    <section className={compact ? "universities-section universities-compact" : "universities-section"}>
      <div className="container">
        <div className="universities-heading reveal">
          <div>
            <span className="universities-badge"><Building2 size={18} aria-hidden="true" /> Partner Universities</span>
            <h2>Compare international DBA partner institutions.</h2>
          </div>
          <div className="universities-intro">
            <p>Review programme focus, study format, entry information and research areas before speaking with an admissions adviser.</p>
            <div className="universities-downloads">
              <DownloadButton file={dbaBrochureUrl} label="DBA Programme Brochure"><FileText size={16} aria-hidden="true" /> Download DBA Brochure</DownloadButton>
              <DownloadButton file={dbaCurriculumUrl} label="DBA Curriculum"><BookOpen size={16} aria-hidden="true" /> Download Curriculum</DownloadButton>
            </div>
            {compact && <Link className="text-link" to="/partnership" navigate={navigate}>View Partner Institutions <ArrowRight size={17} /></Link>}
          </div>
        </div>
        <div className="university-carousel-shell reveal">
          <div className="university-carousel-top">
            <span>{partnerUniversities.length} partner institutions</span>
            <div className="university-carousel-controls" aria-label="University carousel controls">
              <button type="button" onClick={() => slideUniversities(-1)} aria-label="Show previous universities">←</button>
              <button type="button" onClick={() => slideUniversities(1)} aria-label="Show next universities">→</button>
            </div>
          </div>
          <div className="university-card-rail" ref={universityRailRef}>
          {partnerUniversities.map((university, index) => (
            <button
              type="button"
              className={selectedUniversity?.name === university.name ? "university-card active" : "university-card"}
              key={university.name}
              onClick={() => setSelectedUniversity(university)}
              aria-expanded={selectedUniversity?.name === university.name}
            >
              <div className="university-card-top">
                <span className="university-logo-plaque" aria-label={`${university.name} logo`}>
                  <Building2 size={20} aria-hidden="true" />
                  <strong>{university.name}</strong>
                </span>
                <span className="university-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="university-card-meta">
                <span className="university-type">{university.type}</span>
                <span className="university-country-pill">{university.country}</span>
              </div>
              <h3>{university.name}</h3>
              <p>{university.overview}</p>
              <span className="university-detail">View university details <ArrowRight size={15} /></span>
            </button>
          ))}
          </div>
        </div>
        {selectedUniversity && (
          <div className="university-detail-panel reveal visible" role="region" aria-label={`${selectedUniversity.name} pathway details`}>
            <div className="university-detail-heading">
              <div>
                <span className="university-type">Partner institution · {selectedUniversity.country}</span>
                <h3>{selectedUniversity.name}</h3>
                <p>{selectedUniversity.focus}</p>
              </div>
              <button className="university-detail-close" type="button" aria-label="Close university details" onClick={() => setSelectedUniversity(null)}>
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="university-program-stats" aria-label={`${selectedUniversity.name} DBA facts`}>
              <article>
                <span>Duration</span>
                <strong>{selectedUniversity.duration}</strong>
              </article>
              <article>
                <span>Delivery</span>
                <strong>{selectedUniversity.delivery}</strong>
              </article>
              <article>
                <span>Institutional information</span>
                <strong>{selectedUniversity.accreditation}</strong>
              </article>
            </div>
            <div className="university-detail-content">
              <article>
                <strong>Eligibility discussed during profile review</strong>
                <ul>
                  {selectedUniversity.highlights.map((item) => (
                    <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <strong>Course and research areas</strong>
                <ul>
                  {selectedUniversity.curriculum.map((item) => (
                    <li key={item}><BookOpen size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <strong>Degrees offered</strong>
                <div className="degree-badge-list">
                  {(selectedUniversity.degrees || ["DBA"]).map((degree) => (
                    <strong key={degree}>{degree}</strong>
                  ))}
                </div>
              </article>
            </div>
            <div className="university-detail-actions">
              <p>Programme structure, fees, timeline, awarding arrangements and institutional information are confirmed before enrolment.</p>
              <div className="university-detail-buttons">
                <DownloadButton file={dbaBrochureUrl} label={`${selectedUniversity.name} DBA Brochure`}><FileText size={16} aria-hidden="true" /> Brochure</DownloadButton>
                <DownloadButton file={dbaCurriculumUrl} label={`${selectedUniversity.name} DBA Curriculum`}><BookOpen size={16} aria-hidden="true" /> Curriculum</DownloadButton>
                <PrimaryButton to="/contact" navigate={navigate}>Check Your Eligibility</PrimaryButton>
              </div>
            </div>
          </div>
        )}
        {!compact && (
          <div className="university-note reveal">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <strong>Transparent Admissions Guidance</strong>
              <p>Fees, duration, dissertation requirements and awarding arrangements vary by institution. Candidates should review institution-specific information before enrolment.</p>
            </div>
            <PrimaryButton to="/contact" navigate={navigate}>Book a DBA Consultation</PrimaryButton>
          </div>
        )}
      </div>
    </section>
  );
}

function UniversityDetailPage({ navigate, university }) {
  return (
    <>
      <PageHero
        eyebrow={`${university.country} · Doctoral Pathway`}
        icon={Building2}
        tone="executive"
        image="/assets/dba-universities-hero-v2.jpg"
        caption={university.name}
        title={university.programTitle}
        text={university.overview}
      />
      <section className="section section-sky">
        <div className="container">
          <div className="university-detail-panel university-detail-page-panel reveal visible" role="region" aria-label={`${university.name} pathway details`}>
            <div className="university-detail-heading">
              <div>
                <span className="university-type">Partner institution · {university.country}</span>
                <h3>{university.name}</h3>
                <p>{university.focus}</p>
              </div>
              <Link className="text-link" to="/partnership" navigate={navigate}>View all universities <ArrowRight size={17} /></Link>
            </div>
            <div className="university-program-stats" aria-label={`${university.name} DBA facts`}>
              <article>
                <span>Duration</span>
                <strong>{university.duration}</strong>
              </article>
              <article>
                <span>Delivery</span>
                <strong>{university.delivery}</strong>
              </article>
              <article>
                <span>Institutional information</span>
                <strong>{university.accreditation}</strong>
              </article>
            </div>
            <div className="university-detail-content">
              <article>
                <strong>Eligibility discussed during profile review</strong>
                <ul>
                  {university.highlights.map((item) => (
                    <li key={item}><CheckCircle2 size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <strong>Course and research areas</strong>
                <ul>
                  {university.curriculum.map((item) => (
                    <li key={item}><BookOpen size={16} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="university-offerings">
              <article>
                <span>Degrees offered</span>
                <div className="degree-badge-list">
                  {(university.degrees || ["DBA"]).map((degree) => (
                    <strong key={degree}>{degree}</strong>
                  ))}
                </div>
                <p>Programme structure, awarding arrangements and institutional information are confirmed before enrolment and should be independently reviewed.</p>
              </article>
              <article>
                <span>Course areas available</span>
                <div className="course-chip-list">
                  {university.curriculum.map((item) => (
                    <em key={item}>{item}</em>
                  ))}
                </div>
              </article>
              <article>
                <span>Study format</span>
                <div className="study-format-list">
                  <strong>{university.duration}</strong>
                  <strong>{university.delivery}</strong>
                </div>
                <p>Designed for working professionals comparing flexible doctoral and executive research pathways.</p>
              </article>
            </div>
            <div className="university-detail-actions">
              <p>Programme structure, fees, timeline, awarding arrangements and institutional information are confirmed before enrolment.</p>
              <div className="university-detail-buttons">
                <DownloadButton file={dbaBrochureUrl} label={`${university.name} DBA Brochure`}><FileText size={16} aria-hidden="true" /> Brochure</DownloadButton>
                <DownloadButton file={dbaCurriculumUrl} label={`${university.name} DBA Curriculum`}><BookOpen size={16} aria-hidden="true" /> Curriculum</DownloadButton>
                <PrimaryButton to="/contact" navigate={navigate}>Request Profile Review</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AudienceSection({ navigate }) {
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

function FinalCta({ navigate, tone = "doctoral", title = "Start Your DBA Journey", eyebrow = "Speak with a DBA admissions adviser.", text = "Discuss your professional background, career goals and research interests and explore DBA pathways available through the LearnifyOps partner network." }) {
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

function DownloadGateModal({ request, onClose }) {
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

function PurposeMedallion({ type }) {
  const icons = {
    learning: (
      <svg viewBox="0 0 112 112" aria-hidden="true">
        <circle cx="56" cy="56" r="52" fill="#b6e5c4" />
        <path d="M40 28c-13 6-19 20-15 34 3 10 10 16 18 19v14h32V76c7-7 10-17 8-27-3-15-15-25-29-25-5 0-9 1-14 4Z" fill="#008c75" />
        <path d="M72 72H57l-7 9h28l-6-9Z" fill="#008c75" />
        <g fill="#004c48">
          <circle cx="55" cy="52" r="14" />
          <rect x="52" y="32" width="6" height="11" rx="2" /><rect x="52" y="61" width="6" height="11" rx="2" />
          <rect x="35" y="49" width="11" height="6" rx="2" /><rect x="64" y="49" width="11" height="6" rx="2" />
          <rect x="40" y="38" width="6" height="10" rx="2" transform="rotate(-45 43 43)" /><rect x="65" y="56" width="6" height="10" rx="2" transform="rotate(-45 68 61)" />
          <rect x="64" y="38" width="6" height="10" rx="2" transform="rotate(45 67 43)" /><rect x="40" y="56" width="6" height="10" rx="2" transform="rotate(45 43 61)" />
        </g>
        <circle cx="55" cy="52" r="6" fill="#38b889" />
      </svg>
    ),
    research: (
      <svg viewBox="0 0 112 112" aria-hidden="true">
        <circle cx="56" cy="56" r="52" fill="#00564f" />
        <path d="M56 4a52 52 0 0 1 0 104Z" fill="#009d78" />
        <path d="M57 27c-12 0-21 10-21 22 0 7 3 12 8 16 3 3 5 6 5 11h15c0-5 2-8 5-11 5-4 8-9 8-16 0-12-9-22-20-22Z" fill="#a6e7b9" />
        <path d="M49 80h15M50 86h13M53 92h7" fill="none" stroke="#9ce2b1" strokeWidth="4" strokeLinecap="round" />
        <path d="m52 47 6-6 8 8M58 41v20" fill="none" stroke="#008b74" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M78 30v19M78 30l-8 8M78 30l8 8" fill="none" stroke="#c3f0ca" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    leadership: (
      <svg viewBox="0 0 112 112" aria-hidden="true">
        <circle cx="56" cy="56" r="52" fill="#00564f" />
        <path d="M56 4a52 52 0 0 1 0 104Z" fill="#004a45" />
        <path d="M57 18v76" stroke="#a4e6b6" strokeWidth="3" /><path d="M57 19h16l-7 8 7 8H57" fill="#9bdcaa" />
        <path d="M50 39C38 40 30 49 27 62c11 1 21-4 25-15-1 14-7 24-19 30 9 3 20 0 26-8" fill="#00a376" />
        <path d="M66 47c8 2 14 8 18 16-10 0-17-5-20-14 1 11 7 18 17 22-8 5-18 4-25-2" fill="#00b987" />
        <path d="M30 86c11-2 21-6 26-15M82 87c-10-2-19-7-25-16" fill="none" stroke="#7ed7a1" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    global: (
      <svg viewBox="0 0 112 112" aria-hidden="true">
        <circle cx="56" cy="56" r="52" fill="#00a67d" />
        <circle cx="56" cy="56" r="24" fill="none" stroke="#85e1b2" strokeWidth="2" />
        <path d="M32 56h48M56 32c8 7 11 15 11 24s-3 17-11 24M56 32c-8 7-11 15-11 24s3 17 11 24M37 43h38M37 69h38" fill="none" stroke="#85e1b2" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 52c1-15 12-27 27-31M44 16l5 6-8 2M91 60c-2 15-14 27-29 30M68 96l-5-6 8-3" fill="none" stroke="#c4f4cd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  return <span className={`editorial-purpose-icon editorial-purpose-icon-${type}`}>{icons[type]}</span>;
}

function HomePage({ navigate }) {
  return (
    <div className="editorial-home">
      <section className="editorial-world-hero">
        <div className="editorial-world-copy container reveal visible">
          <span>GLOBAL EXECUTIVE EDUCATION</span>
          <h1>Learn, research and lead on a global stage.</h1>
          <p>LearnifyOps helps experienced professionals compare doctoral pathways and translate ambition into applied business research.</p>
          <PrimaryButton to="/contact" navigate={navigate}>Speak to an adviser</PrimaryButton>
        </div>
        <img src="/assets/earth-realistic-map-corrected.svg" alt="Illustrated world map representing LearnifyOps' international network" />
        <div className="editorial-world-note">International DBA pathways · flexible executive study</div>
      </section>

      <section className="editorial-spotlight section">
        <div className="container">
          <div className="editorial-label">FEATURED PATHWAY</div>
          <div className="editorial-spotlight-card reveal">
            <div className="editorial-spotlight-image">
              <img src="/assets/dba-home-hero-v2.jpg" alt="Executive professionals in a strategic business discussion" />
            </div>
            <div className="editorial-spotlight-copy">
              <span>DOCTOR OF BUSINESS ADMINISTRATION</span>
              <h2>Build research that changes how business moves.</h2>
              <p>Explore flexible DBA pathways designed around leadership experience, meaningful business questions and a world of professional perspectives.</p>
              <Link className="editorial-text-link" to="/program" navigate={navigate}>Discover the DBA programme <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-purpose section">
        <div className="container">
          <div className="editorial-statement reveal">
            <p>LearnifyOps connects experienced professionals with the <strong>research tools, university pathways and admissions guidance</strong> to examine challenges that matter — and make a considered contribution to the future of business.</p>
          </div>
          <div className="editorial-principles">
            {[
              ["learning", "Applied research", "Turn a real management challenge into a structured doctoral investigation."],
              ["research", "Global perspective", "Compare options and study alongside professionals across markets and industries."],
              ["leadership", "Executive community", "Learn within a focused peer network built around practical leadership experience."],
              ["global", "Guided decisions", "Move from initial profile review to programme selection with confidence."]
            ].map(([type, title, text]) => (
              <article className="editorial-principle reveal" key={title}>
                <PurposeMedallion type={type} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-stories section">
        <div className="container">
          <div className="editorial-section-head reveal"><div><div className="editorial-label">WHAT'S NEW</div><h2>Ideas, guidance and useful next steps.</h2></div><Link className="editorial-text-link" to="/program" navigate={navigate}>View DBA overview <ArrowRight size={17} /></Link></div>
          <div className="editorial-story-grid">
            {[
              ["dba-home-research-v2.jpg", "How to choose a DBA research area", "From a professional challenge to a credible, focused question."],
              ["dba-program-hero-v2.jpg", "A flexible route to doctoral study", "Understand programme structure, commitments and milestones."],
              ["dba-admissions-hero-v2.jpg", "Preparing for a profile review", "What to have ready before you compare university pathways."]
            ].map(([image, title, text]) => (
              <article className="editorial-story-card reveal" key={title}>
                <img src={`/assets/${image}`} alt="" />
                <div><span>GUIDE</span><h3>{title}</h3><p>{text}</p><Link to="/contact" navigate={navigate} aria-label={`Read more about ${title}`}><ArrowRight size={18} /></Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-programme section">
        <div className="container editorial-programme-grid">
          <div className="editorial-programme-poster reveal">
            <img src="/assets/dba-applied-research.png" alt="Professional reviewing an applied business research project" />
            <div><span>RESEARCH-LED</span><strong>Designed for ambitious professionals.</strong></div>
          </div>
          <div className="editorial-programme-copy reveal">
            <div className="editorial-label">DISCOVER LEARNIFYOPS</div>
            <h2>Find a pathway that respects where you've already been — and where you're headed.</h2>
            <p>We support the early work of comparing delivery formats, entry criteria, research expectations and institution information before you decide to apply.</p>
            <div className="editorial-programme-links">
              <Link to="/program" navigate={navigate}>DBA programme <ArrowRight size={16} /></Link>
              <Link to="/partnership" navigate={navigate}>Partner universities <ArrowRight size={16} /></Link>
              <Link to="/admissions" navigate={navigate}>Admissions review <ArrowRight size={16} /></Link>
              <Link to="/curriculum" navigate={navigate}>Curriculum framework <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-impact">
        <div className="container">
          <span>WHY LEARNIFYOPS</span>
          <h2>Clarity for a defining professional decision.</h2>
          <p>From shortlisting institutions through to understanding the academic journey ahead, each conversation is built around your experience and goals.</p>
          <div className="editorial-metrics">
            <div><strong>1:1</strong><small>admissions profile review</small></div>
            <div><strong>6</strong><small>partner institution pathways</small></div>
            <div><strong>24–48</strong><small>months of flexible study options</small></div>
            <div><strong>Global</strong><small>executive and research perspective</small></div>
          </div>
        </div>
      </section>

      <section className="editorial-insights section">
        <div className="container">
          <div className="editorial-section-head reveal"><div><div className="editorial-label">INSIGHTS & HIGHLIGHTS</div><h2>Explore the work behind the degree.</h2></div><Link className="editorial-text-link" to="/curriculum" navigate={navigate}>Explore curriculum <ArrowRight size={17} /></Link></div>
          <div className="editorial-insight-grid">
            {[
              ["dba-experience-hero-v2.jpg", "Executive experience", "Build a research practice alongside your professional life."],
              ["dba-universities-hero-v2.jpg", "International pathways", "Understand the institutions and formats that fit your plans."],
              ["dba-program-research-v2.jpg", "Applied business research", "Use rigorous methods to investigate an important management question."]
            ].map(([image, title, text]) => <article className="editorial-insight-card reveal" key={title}><img src={`/assets/${image}`} alt="" /><div><h3>{title}</h3><p>{text}</p><Link to="/program" navigate={navigate} aria-label={`Read more about ${title}`}><ArrowRight size={22} /></Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-locations section">
        <div className="container">
          <div className="editorial-label">OUR GLOBAL OUTLOOK</div>
          <h2 className="editorial-location-title reveal">A learning network built across borders.</h2>
          <div className="editorial-location-grid">
            {[
              ["dba-universities-hero-v2.jpg", "Partner university network", "Compare international institutions and their DBA delivery routes."],
              ["dba-experience-hero-v2.jpg", "Executive cohorts", "Exchange perspectives with experienced peers working across industries."],
              ["dba-contact-hero-v2.jpg", "Admissions support", "Start with a structured, confidential conversation about your fit."],
              ["dba-home-research-v2.jpg", "Research relevance", "Ground each research decision in the problem you want to solve."]
            ].map(([image, title, text]) => <article className="editorial-location-card reveal" key={title}><img src={`/assets/${image}`} alt="" /><div><h3>{title}</h3><p>{text}</p><Link to="/contact" navigate={navigate}><ArrowRight size={16} /></Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="editorial-events section">
        <div className="container">
          <div className="editorial-section-head reveal"><div><div className="editorial-label">START HERE</div><h2>Plan your next conversation.</h2></div><Link className="editorial-text-link" to="/contact" navigate={navigate}>Request a prospectus <ArrowRight size={17} /></Link></div>
          <div className="editorial-event-grid">
            <Link className="editorial-event-card reveal" to="/contact" navigate={navigate}><span>01</span><img src="/assets/dba-contact-hero-v2.jpg" alt="" /><div><small>CONSULTATION</small><h3>Book a DBA consultation</h3><p>Discuss your profile, interests and potential next steps.</p></div></Link>
            <Link className="editorial-event-card reveal" to="/partnership" navigate={navigate}><span>02</span><img src="/assets/dba-universities-hero-v2.jpg" alt="" /><div><small>UNIVERSITY OPTIONS</small><h3>Compare partner pathways</h3><p>Review structure, study formats and institutional information.</p></div></Link>
            <Link className="editorial-event-card reveal" to="/curriculum" navigate={navigate}><span>03</span><img src="/assets/dba-curriculum-hero-v2.jpg" alt="" /><div><small>CURRICULUM</small><h3>Explore the framework</h3><p>See the learning and research phases involved in a DBA.</p></div></Link>
          </div>
        </div>
      </section>

      <section className="editorial-closing">
        <div className="container editorial-closing-inner reveal"><div><span>READY WHEN YOU ARE</span><h2>Make your experience the starting point for original research.</h2></div><div><PrimaryButton to="/contact" navigate={navigate}>Book a consultation</PrimaryButton><SecondaryButton to="/program" navigate={navigate}>About the programme</SecondaryButton></div></div>
      </section>
    </div>
  );
}

function ProgramPage({ navigate }) {
  return <><PageHero eyebrow="DBA Programme" icon={GraduationCap} tone="midnight" image="/assets/dba-program-hero-v2.jpg" caption="Applied business research doctorate" title="A research-led DBA for experienced professionals." text="Develop advanced research and strategic decision-making capabilities through a flexible pathway designed for working professionals." /><ProgramFacts /><ValueSection /><OutcomesSection /><ResearchSection navigate={navigate} image="/assets/dba-program-research-v2.jpg" variant="program" /><FinalCta navigate={navigate} tone="research" title="Turn professional experience into structured business research." /></>;
}

function CurriculumPage({ navigate }) {
  return <><PageHero eyebrow="Curriculum Framework" icon={BookOpen} tone="editorial" image="/assets/dba-curriculum-hero-v2.jpg" caption="Empirical study, strategic value" title="Modular coursework leading to a defence-ready dissertation." text="Review the DBA structure, research milestones, dissertation preparation and academic support available through the partner pathway selected during admissions." /><CurriculumSection /><JourneySection navigate={navigate} /><FinalCta navigate={navigate} tone="curriculum" title="Review the DBA curriculum before choosing your pathway." /></>;
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
  return <><PageHero eyebrow="Executive Experience" icon={Network} tone="executive" image="/assets/dba-experience-hero-v2.jpg" caption="Global DBA peer network" title="Learn within a globally connected executive cohort." text="The DBA experience is built for senior professionals who want academic structure, peer critique, flexible milestones and research conversations connected to real executive practice." /><CohortSection /><TestimonialSection /><AudienceSection navigate={navigate} /><FinalCta navigate={navigate} tone="network" title="Join a DBA pathway designed for senior professional momentum." /></>;
}

function AdmissionsPage({ navigate }) {
  return <><PageHero eyebrow="Admissions Profile" icon={ShieldCheck} tone="warm" image="/assets/dba-admissions-hero-v2.jpg" caption="Rigorous, personalized screening" title="Start with a profile review before selecting your DBA pathway." text="Share your academic background, leadership experience and research goals so an advisor can confirm fit, documentation requirements and partner-university options." /><AdmissionsSection navigate={navigate} /><FaqSection /><FinalCta navigate={navigate} tone="admissions" title="Start with a profile review before selecting a DBA pathway." /></>;
}

function PartnershipPage({ navigate }) {
  return <><PageHero eyebrow="Partner Network" icon={Building2} tone="campus" image="/assets/dba-universities-hero-v2.jpg" caption="International pathways" title="Compare DBA pathways before you apply." text="Review the available partner institutions, then speak with an adviser about eligibility, programme structure, fees, study format and application requirements." /><UniversitiesSection navigate={navigate} /><section className="section section-white"><div className="container"><SectionIntro eyebrow="Admissions Guidance" icon={Globe2} title="A structured process from qualification review to enrolment." text="LearnifyOps helps you compare suitable routes, prepare documents and understand institution-specific requirements." /><div className="value-grid"><article className="value-card reveal"><span className="icon-box"><FileText size={23} /></span><h3>Eligibility Review</h3><p>Compare your academic and professional profile with the published requirements for each applicable pathway.</p></article><article className="value-card reveal"><span className="icon-box"><Users size={23} /></span><h3>Application Support</h3><p>Prepare research objectives, motivation statements and supporting documents for the relevant admissions process.</p></article><article className="value-card reveal"><span className="icon-box"><Building2 size={23} /></span><h3>Institution Comparison</h3><p>Compare programme structure, expected duration, study format, fees and research requirements across six partner institutions.</p></article><article className="value-card reveal"><span className="icon-box"><ShieldCheck size={23} /></span><h3>Decision Support</h3><p>Review awarding arrangements and institutional information before enrolment, with independent verification encouraged.</p></article></div></div></section><FinalCta navigate={navigate} tone="partner" title="Compare partner institutions before you commit to a DBA route." /></>;
}

function ContactPage({ navigate, contactProps }) {
  return <><PageHero eyebrow="Advisor Consultation" icon={Mail} tone="contact" image="/assets/dba-contact-hero-v2.jpg" caption="Start with a profile review" title="Explore DBA admissions pathways with an academic advisor." text="Schedule a consultation to review your credentials, request DBA prospectus documents, and understand the right partner-university pathway for your goals." /><ContactSection {...contactProps} /><FinalCta navigate={navigate} tone="contact" title="Start your DBA consultation with clarity and confidence." /></>;
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="footer-brand" to="/" navigate={navigate}><BrandLogo /></Link>
          <p>LearnifyOps provides DBA programme comparison, admissions guidance and onboarding support for experienced professionals considering international doctoral pathways.</p>
          <span className="footer-disclaimer">Programme structure, awarding institution, admission requirements, fees, duration and recognition information vary by institution and are confirmed before enrolment.</span>
        </div>
        <div className="footer-links">
          <strong>DBA Programme</strong>
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
      <div className="container footer-bottom"><span>Copyright 2026 LearnifyOps. All rights reserved.</span><span>DBA Pathways · Partner Universities · Admissions Guidance</span></div>
    </footer>
  );
}

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
      <Header path={path} navigate={navigate} />
      <main id="main">{universityPage ? <UniversityDetailPage navigate={navigate} university={universityPage} /> : (pages[path] || pages["/"])}</main>
      <DownloadGateModal request={downloadRequest} onClose={() => setDownloadRequest(null)} />
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
