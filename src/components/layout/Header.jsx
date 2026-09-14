import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Globe2, Menu, Search, X } from "lucide-react";
import Link from "../navigation/Link.jsx";

function BrandLogo({ logo, variant = "full" }) {
  if (variant === "navigation") {
    return <span className="brand-mark"><img src={logo} alt="LearnifyOps" /></span>;
  }

  return <img className="brand-logo" src={logo} alt="LearnifyOps" />;
}

function MegaMenu({ id, menu, navigate, open, onNavigate }) {
  const [activeTab, setActiveTab] = useState(menu.tabs?.[0]?.label || "");
  const activeDoctoralTab = menu.tabs?.find((tab) => tab.label === activeTab) || menu.tabs?.[0];
  const menuClassName = [
    "mega-menu",
    `mega-menu-${menu.key}`,
    menu.type === "doctoral" ? "mega-menu-doctoral" : "",
    open ? "open" : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={menuClassName} id={id} role="region" aria-label={`${menu.label} menu`}>
      <div className="mega-menu-main">
        <div className="mega-menu-content">
          {menu.type === "doctoral" ? (
            <div className="doctoral-mega-layout">
              <div className="doctoral-mega-tabs" role="tablist" aria-label="Doctoral route categories">
                {menu.tabs.map((tab) => (
                  <button
                    key={tab.label}
                    type="button"
                    className={activeDoctoralTab?.label === tab.label ? "doctoral-mega-tab active" : "doctoral-mega-tab"}
                    onMouseEnter={() => setActiveTab(tab.label)}
                    onFocus={() => setActiveTab(tab.label)}
                    onClick={() => setActiveTab(tab.label)}
                    role="tab"
                    aria-selected={activeDoctoralTab?.label === tab.label}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="doctoral-mega-panel" role="tabpanel">
                {activeDoctoralTab?.items.map((item) => (
                  item.to ? (
                    <Link
                      key={item.title}
                      to={item.to}
                      navigate={navigate}
                      className="doctoral-mega-item doctoral-mega-link"
                      onNavigate={onNavigate}
                    >
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <article className="doctoral-mega-item" key={item.title}>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </article>
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className={menu.key === "tools-services" ? "mega-menu-grid mega-menu-grid-tools-services" : "mega-menu-grid"}>
              {menu.columns.map((column) => (
                <div className="mega-menu-column" key={column.title}>
                  <strong>{column.title}</strong>
                  {column.intro && <p className="mega-menu-column-intro">{column.intro}</p>}
                  {column.items.map((item) => (
                    item.to ? (
                      <Link key={item.title} to={item.to} navigate={navigate} className="mega-menu-card" onNavigate={onNavigate}>
                        <span>{item.title}</span>
                        <p>{item.text}</p>
                      </Link>
                    ) : (
                      <article className="mega-menu-card" key={item.title}>
                        <span>{item.title}</span>
                        <p>{item.text}</p>
                      </article>
                    )
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        <Link className="mega-feature" to={menu.feature.to} navigate={navigate} onNavigate={onNavigate}>
          <img src={menu.feature.image} alt="" />
          <div className="mega-feature-copy">
            <span>{menu.feature.eyebrow}</span>
            <strong>{menu.feature.title}</strong>
            <p>{menu.feature.text}</p>
            <i><ArrowRight size={21} aria-hidden="true" /></i>
          </div>
        </Link>
      </div>
      <div className="mega-menu-footer">
        <p>{menu.footer}</p>
        {menu.cta.external ? (
          <a className="mega-menu-cta" href={menu.cta.href} target="_blank" rel="noreferrer">{menu.cta.label}<ArrowRight size={15} aria-hidden="true" /></a>
        ) : (
          <Link className="mega-menu-cta" to={menu.cta.to} navigate={navigate} onNavigate={onNavigate}>{menu.cta.label}<ArrowRight size={15} aria-hidden="true" /></Link>
        )}
      </div>
    </div>
  );
}

export default function Header({ path, navigate, megaMenus, logo, britInstituteUrl }) {
  const [open, setOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [mobileMenuTop, setMobileMenuTop] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setOpenMega(null);
  }, [path]);

  useEffect(() => {
    const closeMenus = () => {
      setOpen(false);
      setOpenMega(null);
    };
    const closeOnOutsidePointer = (event) => {
      if (!headerRef.current?.contains(event.target)) closeMenus();
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeMenus();
    };

    window.addEventListener("scroll", closeMenus, { passive: true, capture: true });
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("scroll", closeMenus, { capture: true });
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setOpenMega(null);
  };

  const toggleNavigation = () => {
    const compactViewport = window.matchMedia("(max-width: 1180px)").matches;
    const headerHeight = Math.ceil(headerRef.current?.getBoundingClientRect().height || 72);
    setMobileMenuTop(compactViewport ? headerHeight : null);
    setOpen((current) => !current);
    setOpenMega(null);
  };

  const mobileMenuStyle = open && mobileMenuTop
    ? { position: "fixed", zIndex: 1001, top: `${mobileMenuTop}px`, right: 0, bottom: 0, left: 0, height: "fit-content", maxHeight: "none", overflowY: "auto" }
    : undefined;

  return (
    <>
      <header className={path === "/" ? "site-header home-header" : "site-header"} ref={headerRef} onMouseLeave={() => setOpenMega(null)}>
        <div className="global-bar">
          <div className="container global-bar-inner">
            <span className="global-brandline"><Globe2 size={14} aria-hidden="true" /> Brit Institute Education Ecosystem</span>
            <span className="global-menu-line">Doctoral Pathway <i /> Skill Certifications <i /> Tools &amp; Services</span>
            <a className="global-link" href={britInstituteUrl} target="_blank" rel="noreferrer">Visit Brit Institute <ArrowRight size={13} aria-hidden="true" /></a>
          </div>
        </div>
        <nav className="nav container" aria-label="Primary navigation">
          <Link className="brand" to="/" navigate={navigate} aria-label="LearnifyOps DBA home">
            <BrandLogo logo={logo} variant="navigation" />
          </Link>
          <div className={open ? "nav-links open" : "nav-links"} id="primary-navigation" style={mobileMenuStyle}>
            {megaMenus.map((menu) => (
              <Fragment key={menu.key}>
                <div className="mega-nav-item" onMouseEnter={() => setOpenMega(menu.key)} onFocus={() => setOpenMega(menu.key)}>
                  <button className={openMega === menu.key ? "mega-trigger active" : "mega-trigger"} type="button" aria-expanded={openMega === menu.key} aria-controls={`mega-${menu.key}`} onClick={() => setOpenMega(openMega === menu.key ? null : menu.key)}>
                    {menu.label}<ChevronDown size={15} aria-hidden="true" />
                  </button>
                  <MegaMenu id={`mega-${menu.key}`} menu={menu} navigate={navigate} open={openMega === menu.key} onNavigate={closeMenus} />
                </div>
                {menu.key === "doctoral" && <Link to="/partnership" navigate={navigate} className={path === "/partnership" ? "active" : undefined} onMouseEnter={() => setOpenMega(null)} onNavigate={closeMenus}>Universities</Link>}
              </Fragment>
            ))}
            <Link to="/admissions" navigate={navigate} className={path === "/admissions" ? "active" : undefined} onMouseEnter={() => setOpenMega(null)} onNavigate={closeMenus}>Admissions</Link>
          </div>
          <Link className="header-search" to="/contact" navigate={navigate} onMouseEnter={() => setOpenMega(null)} aria-label="Contact LearnifyOps"><Search size={24} aria-hidden="true" /></Link>
          <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-controls="primary-navigation" aria-expanded={open} onClick={toggleNavigation}>
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </nav>
      </header>
      <div className={openMega ? "mega-page-overlay open" : "mega-page-overlay"} aria-hidden="true" />
    </>
  );
}

export { BrandLogo };
