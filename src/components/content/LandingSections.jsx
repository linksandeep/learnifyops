import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  FileText,
  Globe2,
  GraduationCap,
  Lightbulb,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import {
  academicNetworkSignals,
  clientProofTiles,
  companyTimeline,
  comparisonRows,
  dbaBrochureUrl,
  ecosystemFlow,
  learnerJourney,
  successSnapshots,
  trustMetrics
} from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import { DownloadButton, Eyebrow, PrimaryButton, SectionIntro } from "../ui/Actions.jsx";

export function HomeHero({ navigate }) {
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

export function GlobalAcademicNetworkSection({ navigate }) {
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

export function TrustIndicatorsSection() {
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

export function ClientProofSection() {
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

export function LearningJourneySection() {
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

export function WhyChooseSection() {
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

export function EcosystemMapSection({ navigate }) {
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

export function SuccessSnapshotsSection() {
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

export function CompanyTimelineSection() {
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


