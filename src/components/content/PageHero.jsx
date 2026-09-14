import { Eyebrow } from "../ui/Actions.jsx";

export default function PageHero({ eyebrow, icon, title, text, image, tone = "midnight", caption = "Global DBA pathway" }) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="page-hero-image">
        <img src={image} alt="" />
      </div>
      <div className="container page-hero-grid">
        <div className="page-hero-copy reveal visible">
          <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{text}</p>
          <span className="page-caption">{caption}</span>
        </div>
      </div>
    </section>
  );
}
