import { ArrowRight } from "lucide-react";
import Link from "../components/navigation/Link.jsx";
import { PrimaryButton, SecondaryButton } from "../components/ui/Actions.jsx";

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
        <div className="editorial-hero-sparkles" aria-hidden="true">
          {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
        </div>
        <span className="editorial-hero-eyebrow">GLOBAL EXECUTIVE EDUCATION</span>
        <div className="editorial-world-copy container reveal visible">
          <h1>Learn, research and lead on a global stage.</h1>
          <p>LearnifyOps helps experienced professionals compare doctoral pathways and translate ambition into applied business research.</p>
          <PrimaryButton to="/contact" navigate={navigate}>Speak to an adviser</PrimaryButton>
        </div>
        <img src="/assets/world_map_highlighted_europe_india_usa.svg" alt="Illustrated world map representing LearnifyOps' international network" />
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


export default HomePage;
