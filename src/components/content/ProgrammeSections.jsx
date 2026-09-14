import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  Lightbulb,
  Target
} from "lucide-react";
import {
  appliedResearchSteps,
  britInstituteUrl,
  journey,
  productTools,
  researchTopics,
  technologyServices,
  valuePillars
} from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import { Eyebrow, PrimaryButton, SectionIntro } from "../ui/Actions.jsx";

export function ProgramFacts() {
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

export function ProductEcosystemSection({ navigate }) {
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

export function TechnologyServicesSection({ navigate }) {
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

export function ValueSection() {
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

export function ResearchSection({ navigate, image = "/assets/dba-home-research-v2.jpg", variant = "home" }) {
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

export function JourneySection({ navigate }) {
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

export function AppliedResearchSection() {
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


