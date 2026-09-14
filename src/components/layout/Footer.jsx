import Link from "../navigation/Link.jsx";
import { BrandLogo } from "./Header.jsx";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer({ navigate, logo }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link className="footer-brand" to="/" navigate={navigate}><BrandLogo logo={logo} /></Link>
          <p>LearnifyOps is the parent ecosystem behind Brit Institute—bringing together UK-focused AI and data analytics learning, doctoral pathways, career technology and placement support.</p>
          <span className="footer-disclaimer">Brit Institute delivers career-focused learning, mentoring and placement readiness. LearnifyOps develops the technology, analytics and automation ecosystem that supports it.</span>
        </div>

        <nav className="footer-links" aria-label="Doctoral programme links">
          <strong>Doctoral Pathways</strong>
          <Link to="/program" navigate={navigate}>Overview</Link>
          <Link to="/curriculum" navigate={navigate}>Curriculum</Link>
          <Link to="/experience" navigate={navigate}>Experience</Link>
          <Link to="/partnership" navigate={navigate}>Partner Universities</Link>
        </nav>

        <nav className="footer-links" aria-label="LearnifyOps ecosystem links">
          <strong>Learning &amp; Careers</strong>
          <a href="https://britinstitute.uk/" target="_blank" rel="noreferrer">Brit Institute <ArrowUpRight size={14} aria-hidden="true" /></a>
          <Link to="/contact" navigate={navigate}>AI &amp; Data Analytics</Link>
          <Link to="/contact" navigate={navigate}>Placement Support</Link>
          <Link to="/contact" navigate={navigate}>AI Job Auto-Apply</Link>
        </nav>

        <div className="footer-links footer-contact">
          <strong>Talk to our team</strong>
          <a href="mailto:info@learnifyops.com"><Mail size={16} aria-hidden="true" />info@learnifyops.com</a>
          <a href="tel:+447447177848"><Phone size={16} aria-hidden="true" />+44 7447 177848</a>
          <Link className="footer-contact-cta" to="/contact" navigate={navigate}>Book a consultation <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 LearnifyOps. All rights reserved.</span>
        <span>United Kingdom · Global delivery · AI, data analytics &amp; career technology</span>
      </div>
    </footer>
  );
}
