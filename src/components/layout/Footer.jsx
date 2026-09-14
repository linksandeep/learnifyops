import Link from "../navigation/Link.jsx";
import { BrandLogo } from "./Header.jsx";

export default function Footer({ navigate, logo }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="footer-brand" to="/" navigate={navigate}><BrandLogo logo={logo} /></Link>
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
