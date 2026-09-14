import { useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  FileText,
  ShieldCheck,
  X
} from "lucide-react";
import { dbaBrochureUrl, dbaCurriculumUrl, partnerUniversities } from "../../data/siteContent.js";
import Link from "../navigation/Link.jsx";
import PageHero from "./PageHero.jsx";
import { DownloadButton, PrimaryButton } from "../ui/Actions.jsx";

export function UniversitiesSection({ navigate, compact = false }) {
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

export function UniversityDetailPage({ navigate, university }) {
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
