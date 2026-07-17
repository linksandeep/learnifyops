import React from "react";
import { Globe2, Mail, Phone } from "lucide-react";

const logo = "/assets/learnifyops-logo-transparent.png";
const britInstituteUrl = "https://britinstitute.uk/";

function FooterLink({ to, navigate, children }) {
  return (
    <a
      href={to}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

function FooterBrand({ navigate }) {
  return (
    <a
      className="footer-brand"
      href="/"
      aria-label="LearnifyOps home"
      onClick={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <img className="brand-logo" src={logo} alt="LearnifyOps" />
    </a>
  );
}

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <FooterBrand navigate={navigate} />
          <p>
            DBA pathway guidance, admissions review and partner-university comparison for experienced professionals.
          </p>
          <span className="footer-disclaimer">
            University selection, fees, curriculum and awarding models are confirmed during admissions review.
          </span>
        </div>

        <nav className="footer-links" aria-label="DBA program links">
          <strong>Explore</strong>
          <FooterLink to="/program" navigate={navigate}>Overview</FooterLink>
          <FooterLink to="/curriculum" navigate={navigate}>Curriculum</FooterLink>
          <FooterLink to="/experience" navigate={navigate}>Experience</FooterLink>
        </nav>

        <nav className="footer-links" aria-label="Admissions links">
          <strong>Admissions</strong>
          <FooterLink to="/admissions" navigate={navigate}>Qualifications</FooterLink>
          <FooterLink to="/partnership" navigate={navigate}>Partner Network</FooterLink>
          <FooterLink to="/contact" navigate={navigate}>Book Discussion</FooterLink>
        </nav>

        <div className="footer-links footer-contact">
          <strong>Contact</strong>
          <a className="footer-contact-chip" href="mailto:info@learnifyops.com">
            <Mail size={16} aria-hidden="true" />
            info@learnifyops.com
          </a>
          <a className="footer-contact-chip" href="tel:+447447177848">
            <Phone size={16} aria-hidden="true" />
            +44 7447 177848
          </a>
          <a className="footer-contact-chip" href={britInstituteUrl} target="_blank" rel="noreferrer">
            <Globe2 size={16} aria-hidden="true" />
            Brit Institute
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 LearnifyOps. All rights reserved.</span>
        <span>DBA pathways · Admissions guidance · Partner universities</span>
      </div>
    </footer>
  );
}
