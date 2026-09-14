import { ArrowRight, Sparkles } from "lucide-react";
import Link from "../navigation/Link.jsx";

export function Eyebrow({ icon: Icon = Sparkles, children }) {
  return <span className="eyebrow"><Icon size={15} aria-hidden="true" />{children}</span>;
}

export function PrimaryButton({ to, navigate, children }) {
  return <Link className="btn btn-primary" to={to} navigate={navigate}>{children}<ArrowRight size={18} aria-hidden="true" /></Link>;
}

export function SecondaryButton({ to, navigate, children }) {
  return <Link className="btn btn-secondary" to={to} navigate={navigate}>{children}</Link>;
}

export function DownloadButton({ file, label, className = "", children }) {
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

export function SectionIntro({ eyebrow, icon, title, text, align = "center" }) {
  return (
    <div className={`section-intro ${align === "left" ? "left" : ""} reveal`}>
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
