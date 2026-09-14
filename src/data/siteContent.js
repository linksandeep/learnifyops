import {
  Award,
  BriefcaseBusiness,
  FileSearch,
  Lightbulb,
  Network,
  Target
} from "lucide-react";

export const logo = "/assets/learnify-logo.jpg";
export const britInstituteUrl = "https://britinstitute.uk/";
export const dbaBrochureUrl = "/assets/learnifyops-dba-brochure.pdf";
export const dbaCurriculumUrl = "/assets/learnifyops-dba-curriculum-overview.pdf";

export const navItems = [
  ["Home", "/"],
  ["DBA Programme", "/program"],
  ["Curriculum", "/curriculum"],
  ["Curriculum", "/curriculum"],
  ["Experience", "/experience"],
  ["Admissions", "/admissions"],
  ["Universities", "/partnership"],
  ["Contact", "/contact"]
];

export const partnerUniversities = [
  {
    initials: "KU",
    name: "Kennedy University",
    slug: "kennedy-university",
    type: "Partner University",
    country: "USA",
    programTitle: "Kennedy University DBA",
    focus: "Executive strategy, governance and applied management research",
    menuText: "Strategy, governance and applied research.",
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
    menuText: "Innovation and business transformation.",
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
    menuText: "Global business and leadership practice.",
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
    menuText: "Applied leadership and business strategy.",
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
    menuText: "International business and executive leadership.",
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
    menuText: "Technology, AI and enterprise systems.",
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

export const productTools = [
  ["AI-Powered Application Auto-Apply", "Automates tedious job application workflows, helping students target top-tier opportunities with precision and consistency."],
  ["Enterprise Learning Management System", "A sophisticated, centralized platform delivering academic resources, modular coursework, and transparent progress metrics."],
  ["Adaptive AI Learning Assistant", "Personalized study companions that generate tailored study plans, mock quizzes, and academic feedback."],
  ["Professional CV Optimizer & Review System", "Helps students refine their CVs using industry-benchmarked templates, automated scans, and mentor review workflows."],
  ["Student Milestone Progress Dashboard", "Provides real-time visibility into academic milestones, research stages, and readiness for graduation."],
  ["Executive Career Placement Support Portal", "Streamlines direct employer matchmaking, corporate touchpoints, and tailored recruitment support."],
  ["Strategic Career Tracking Analytics", "Enables students to monitor interviews, feedback loops, and long-term career progression."],
  ["Enterprise CRM & Admissions Console", "Empowers administrative teams with workflow automation to handle enquiries, applications, and enrollments smoothly."]
];

export const technologyServices = [
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

export const certificationProgramFeatures = [
  ["Advanced Skill Certifications", "Industry-ready skills for modern careers."],
  ["Dedicated Placement Assistance", "Mock interviews, guidance and role matching."],
  ["1-on-1 Executive Mentorship", "Personal guidance from experienced mentors."],
  ["Executive CV & LinkedIn Optimization", "Strengthen your executive CV and LinkedIn profile."],
  ["Free Access to Career Automation Suite", "Career tools for applications and outreach."],
  ["End-to-End Career Acceleration", "Support from enrolment through placement."]
];

export const dbaMenuColumns = [
  {
    title: "DBA Pathway",
    items: [
      { title: "Program Overview", text: "Executive DBA study for experienced professionals.", to: "/program" },
      { title: "Curriculum Framework", text: "Research-led learning for business practice.", to: "/curriculum" },
      { title: "Executive Experience", text: "Flexible study with global executive peers.", to: "/experience" }
    ]
  },
  {
    title: "Admissions Process",
    items: [
      { title: "Profile Review", text: "Academic fit, experience and next steps.", to: "/admissions" },
      { title: "Partner Universities", text: "Compare partner university DBA pathways.", to: "/partnership" },
      { title: "Request Prospectus", text: "Start a confidential conversation with our team.", to: "/contact" }
    ]
  }
];

export const toolsMenuColumns = [
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

export const certificationMenuColumns = [
  {
    title: "Certification Programs",
    items: certificationProgramFeatures.slice(0, 3).map(([title, text]) => ({ title, text }))
  },
  {
    title: "Career Architecture",
    items: certificationProgramFeatures.slice(3).map(([title, text]) => ({ title, text }))
  }
];

export const servicesMenuColumns = [
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

export const navToolItems = [
  {
    title: "Career Automation",
    text: "Auto-apply, matching and career workflows."
  },
  {
    title: "Enterprise Learning Management System",
    text: "Learning, assessments and progress tracking."
  },
  {
    title: "Student Success",
    text: "CV tools, milestones and placement support."
  },
  {
    title: "Operations Systems",
    text: "Admissions, CRM and performance analytics."
  }
];

export const toolsServicesMenuColumns = [
  {
    title: "Tools",
    intro: "",
    items: navToolItems
  },
  {
    title: "Services",
    intro: "",
    items: [
      { title: "Build & Automate SaaS Products", text: "Strategy, build and launch support." },
      { title: "AI Automation Solutions", text: "Automate repetitive work with AI." },
      { title: "Custom Software Development", text: "Web, mobile and enterprise applications." },
      { title: "Marketing Technology", text: "Funnels, campaigns and analytics." },
      { title: "CRM & Lead Management", text: "Lead pipelines, follow-ups and visibility." },
      { title: "Technology Consulting", text: "AI adoption and digital growth strategy." }
    ]
  }
];

export const doctoralMenuTabs = [
  {
    label: "DBA",
    items: partnerUniversities.map((university) => ({
      title: university.programTitle,
      text: university.menuText,
      to: `/universities/${university.slug}`,
      badge: university.country
    }))
  },
  {
    label: "PhD",
    items: [
      { title: "PhD Pathway Review", text: "Review doctorate options for your profile.", to: "/contact" },
      { title: "Supervisor Fit Discussion", text: "Discuss topic readiness and supervisor fit.", to: "/contact" }
    ]
  },
  {
    label: "Honorary Doctorate",
    items: [
      { title: "Professional Impact Review", text: "Review leadership impact and eligibility.", to: "/contact" },
      { title: "Institutional Eligibility Check", text: "Confirm requirements with the awarding institution.", to: "/contact" },
      { title: "Profile Documentation", text: "Prepare achievements, references and evidence.", to: "/contact" }
    ]
  },
  {
    label: "Overview",
    items: [
      { title: "DBA Program Overview", text: "Understand the executive DBA pathway.", to: "/program" },
      { title: "Profile-first Guidance", text: "Confirm fit, documents and university options.", to: "/admissions" },
      { title: "Partner Institution Comparison", text: "Compare institutions, formats and degree routes.", to: "/partnership" }
    ]
  }
];

export const megaMenus = [
  {
    key: "dba",
    label: "DBA Program",
    columns: dbaMenuColumns,
    footer: "For executives, entrepreneurs and senior managers.",
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
    footer: "DBA pages open directly; other routes begin with a profile discussion.",
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
    footer: "Delivered by Brit Institute, part of LearnifyOps.",
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

export const valuePillars = [
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

export const audience = [
  ["Senior Managers & Executives", "Develop advanced research, strategic analysis and evidence-based decision-making capabilities."],
  ["Entrepreneurs & Founders", "Research business models, innovation, growth and organisational challenges within a doctoral framework."],
  ["Consultants", "Build deeper subject-matter expertise and research capability relevant to advisory work."],
  ["Corporate Directors", "Apply advanced research methods to strategy, governance and organisational transformation."],
  ["Public Sector Leaders", "Research institutional performance, policy and complex organisational challenges."],
  ["Academic & Industry Practitioners", "Combine professional experience with advanced applied business research."]
];

export const curriculum = [
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

export const journey = [
  ["Eligibility Review", "Review your academic background, professional experience and objectives."],
  ["University Comparison", "Identify DBA pathways aligned with your candidate profile and study preferences."],
  ["Programme Consultation", "Understand the institution, structure, fees, study format and requirements."],
  ["Application Support", "Prepare the documentation required for the applicable admissions process."],
  ["Enrolment", "Complete the selected institution's admissions and onboarding requirements."],
  ["Research Journey", "Progress through modules, research development and dissertation requirements set by the selected institution."]
];

export const researchTopics = [
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

export const appliedResearchSteps = [
  "Define a research problem",
  "Review academic literature",
  "Select an appropriate methodology",
  "Collect qualitative or quantitative evidence",
  "Analyse findings",
  "Develop conclusions",
  "Produce a doctoral dissertation"
];

export const outcomes = [
  "Evaluate evidence and make defensible conclusions",
  "Apply qualitative and quantitative research methods",
  "Develop an evidence-based response to a management problem",
  "Communicate complex research to professional audiences",
  "Build specialist knowledge in a relevant business field",
  "Prepare and defend a doctoral dissertation where required"
];

export const admissionsSteps = [
  ["Academic Eligibility", "Review previous qualifications against institution-specific entry requirements."],
  ["Professional Experience", "Assess relevant management, leadership, consulting or specialist experience."],
  ["Research Interests", "Identify potential doctoral research areas connected to your experience and goals."],
  ["University Options", "Compare applicable DBA pathways across the LearnifyOps partner network."],
  ["Programme Structure", "Understand modules, dissertation requirements, study format and expected duration."],
  ["Fees & Enrolment", "Receive institution-specific fees and enrolment information before making a commitment."]
];

export const admissionsStats = [
  ["1:1", "Admissions Review"],
  ["Clear", "University Comparison"],
  ["Flexible", "Study Options"],
  ["Applied", "Business Research"]
];

export const eligibility = [
  "Experienced professionals, management consultants, entrepreneurs, and senior directors",
  "A verified Master's degree, MBA, or equivalent senior-level professional qualification",
  "A well-defined interest in solving a strategic business, policy, or management challenge",
  "Commitment to independent, rigorous research alongside professional obligations",
  "Fluent English proficiency suitable for academic writing and doctoral defense"
];

export const faq = [
  ["How is the program structured for active professionals?", "The DBA is built from the ground up for working leaders. Modular coursework and digital delivery allow you to study seamlessly alongside your corporate career."],
  ["What starting support do I receive for my research topic?", "You don't need a polished proposal. Our team helps you refine your area of interest into a viable doctoral research question during the onboarding phase."],
  ["How are awarding arrangements explained?", "Programme delivery and awarding arrangements vary by pathway. LearnifyOps explains the available information before enrolment and encourages candidates to verify it independently."],
  ["What is the main difference between an MBA and a DBA?", "An MBA covers broad management principles. A DBA focuses on applying established research methods to a substantial business or management problem."]
];

export const heroCapabilities = [
  ["AI Training", "Practical learning for automation and modern business workflows"],
  ["LMS Solutions", "Course delivery, learner progress and resource management"],
  ["CRM Software", "Lead, admissions and placement pipeline visibility"],
  ["AI Automation", "Agentic workflows for repetitive operational tasks"],
  ["Job Assistance", "Resume, interview, applications and placement support"],
  ["Corporate Training", "Upskilling programs for teams and business functions"]
];

export const trustMetrics = [
  ["International", "Partner Universities"],
  ["1:1", "Admissions Review"],
  ["Flexible", "Study Options"],
  ["Applied", "Business Research"],
  ["International", "Candidate Network"],
  ["Clear", "Admissions Guidance"]
];

export const academicNetworkSignals = [
  ["University and Awarding Institution", "Understand which organisation delivers the programme and which institution makes the award, where applicable."],
  ["Programme Structure", "Compare taught modules, research stages and dissertation requirements before applying."],
  ["Entry Requirements", "Review academic, professional and English-language requirements for each available route."],
  ["Research Expectations", "Understand proposal, methodology, supervision and dissertation expectations."],
  ["Study Format and Duration", "Compare online, blended or other available formats and expected completion times."],
  ["Programme Fees", "Receive institution-specific fee information before making a commitment."],
  ["Institutional Information", "Review recognition and institutional information independently before enrolment."],
  ["Application Process", "Understand required documents, admissions stages and onboarding steps."]
];

export const clientProofTiles = [
  "Education Providers",
  "Training Institutes",
  "Recruitment Teams",
  "SaaS Startups",
  "SME Operations",
  "Corporate L&D"
];

export const learnerJourney = [
  ["Enroll", "Choose your pathway and complete onboarding."],
  ["Live Classes", "Learn through structured sessions and guided resources."],
  ["Projects", "Build practical evidence through real workflow assignments."],
  ["Mentorship", "Get 1-on-1 guidance for skills, profile and direction."],
  ["Interview Prep", "Practice, refine your resume and improve confidence."],
  ["Placement", "Use CRM-backed application tracking and support workflows."],
  ["Community", "Stay connected through long-term learning and career support."]
];

export const comparisonRows = [
  ["Recorded-only videos", "Live mentorship with guided support"],
  ["Theory-heavy learning", "Real projects and workflow implementation"],
  ["No CRM access", "CRM-style career and admissions tracking"],
  ["No AI tools", "AI automation included in the ecosystem"],
  ["No LMS visibility", "Dedicated LMS and progress dashboard"],
  ["Limited after-course help", "Ongoing career and technology support"]
];

export const ecosystemFlow = [
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

export const successSnapshots = [
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

export const companyTimeline = [
  ["Foundation", "Built around education, placement and digital operations support."],
  ["Student Programs", "Expanded into certification programs and career-readiness workflows."],
  ["CRM Launch", "Introduced lead, admissions and placement tracking systems."],
  ["LMS Launch", "Centralized learner resources, progress and delivery management."],
  ["AI Automation", "Added auto-apply, resume, learning and workflow automation tools."],
  ["Global Expansion", "Positioned services for international learners and business clients."]
];

export function universityPath(university) {
  return `/universities/${university.slug}`;
}

export function getUniversityByPath(pathname) {
  const slug = pathname.replace(/\/$/, "").split("/universities/")[1];
  return partnerUniversities.find((university) => university.slug === slug);
}


