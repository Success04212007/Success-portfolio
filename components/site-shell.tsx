"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const services = [
  ["Business Website Design", "/services/business-website-design"],
  ["Website Redesign", "/services/website-redesign"],
  ["E-commerce Development", "/services/ecommerce-website-development"],
  ["Landing Page Design", "/services/landing-page-design"],
  ["Wix Development", "/services/wix-website-development"],
  ["WordPress Development", "/services/wordpress-website-development"],
  ["Shopify Development", "/services/shopify-website-development"],
  ["Website Optimization & SEO", "/services/website-optimization-seo"],
];

const aboutLinks = [
  ["01", "Meet Success Daniel", "Professional identity, background and approach to website design.", "/about#meet-success"],
  ["02", "Design Philosophy", "The principles behind visual design, structure and user experience.", "/about#design-philosophy"],
  ["03", "Expertise & Platforms", "Wix, WordPress, Shopify and digital experience capabilities.", "/about#expertise"],
  ["04", "Professional Standards", "The values that guide communication, collaboration and quality.", "/about#professional-standards"],
  ["05", "My Approach", "How projects move from discovery and planning to delivery.", "/about#my-approach"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAboutOpen(false);
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const closeMenus = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="brand" onClick={closeMenus} aria-label="Success Daniel home">
          <b className="brand-mark">SD<span>.</span></b>
          <span className="brand-copy">
            <strong>SUCCESS DANIEL</strong>
            <small>WEB DESIGN &amp; DIGITAL EXPERIENCES</small>
          </span>
        </Link>

        <button
          className={mobileOpen ? "menu-toggle is-open" : "menu-toggle"}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span /><span />
        </button>

        <nav id="primary-navigation" className={mobileOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <Link href="/" onClick={closeMenus} aria-current={pathname === "/" ? "page" : undefined}>Home</Link>

          <div
            className={aboutOpen ? "nav-dropdown about-dropdown is-expanded" : "nav-dropdown about-dropdown"}
            onMouseEnter={() => { if (window.matchMedia("(min-width: 801px)").matches) setAboutOpen(true); }}
            onMouseLeave={() => { if (window.matchMedia("(min-width: 801px)").matches) setAboutOpen(false); }}
          >
            <button
              className={pathname.startsWith("/about") ? "nav-trigger active" : "nav-trigger"}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              aria-controls="about-mega-menu"
              onClick={() => setAboutOpen((value) => !value)}
              onFocus={() => { if (window.matchMedia("(min-width: 801px)").matches) setAboutOpen(true); }}
            >
              About Success <span className="nav-chevron" aria-hidden="true">⌄</span>
            </button>

            <div id="about-mega-menu" className="about-mega-menu" aria-hidden={!aboutOpen}>
              <div className="mega-intro">
                <div className="mega-portrait">
                  <Image src="/images/success-daniel-portrait.jpeg" alt="Success Daniel" fill sizes="110px" className="mega-portrait-image" />
                </div>
                <div className="mega-profile-copy">
                  <span className="mega-kicker">THE PERSON BEHIND THE WORK</span>
                  <h2>SUCCESS DANIEL</h2>
                  <p className="mega-role">Website Designer &amp; Digital Experience Specialist</p>
                  <p>Get to know the person behind the work, explore the thinking behind the designs, and discover the principles that shape my approach to creating digital experiences.</p>
                  <Link className="mega-story-link" href="/about#meet-success" onClick={closeMenus}>EXPLORE MY STORY <span>→</span></Link>
                </div>
              </div>

              <div className="mega-links">
                <div className="mega-links-heading">
                  <span className="mega-kicker">GET TO KNOW THE PRACTICE</span>
                  <span>ABOUT / INDEX</span>
                </div>
                {aboutLinks.map(([number, title, description, href]) => (
                  <Link className="mega-link" href={href} key={number} onClick={closeMenus}>
                    <span className="mega-number">{number}</span>
                    <span className="mega-link-copy"><strong>{title}</strong><small>{description}</small></span>
                    <span className="mega-arrow" aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className={servicesOpen ? "nav-dropdown services-dropdown is-expanded" : "nav-dropdown services-dropdown"}>
            <button className="nav-trigger" aria-expanded={servicesOpen} aria-haspopup="true" onClick={() => setServicesOpen((value) => !value)}>
              Services <span className="nav-chevron" aria-hidden="true">⌄</span>
            </button>
            <div className="dropdown-menu" role="menu">
              {services.map(([name, href]) => <Link role="menuitem" key={href} href={href} onClick={closeMenus}>{name}</Link>)}
            </div>
          </div>

          <Link href="/portfolio" onClick={closeMenus} aria-current={pathname.startsWith("/portfolio") ? "page" : undefined}>Portfolio</Link>
          <Link href="/process" onClick={closeMenus} aria-current={pathname.startsWith("/process") ? "page" : undefined}>Process</Link>
          <Link href="/insights" onClick={closeMenus} aria-current={pathname.startsWith("/insights") ? "page" : undefined}>Insights</Link>
          <Link href="/contact" onClick={closeMenus} aria-current={pathname.startsWith("/contact") ? "page" : undefined}>Contact</Link>
          <Link className="nav-cta" href="/contact" onClick={closeMenus}>LET'S DISCUSS YOUR PROJECT <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div><b className="footer-brand">SUCCESS DANIEL<span>.</span></b><p>Strategic digital design. Thoughtful website experiences.<br />Built around the way your business works.</p></div>
          <div><small>HAVE A PROJECT IN MIND?</small><p><Link href="/contact">Let's make it meaningful ↗</Link></p></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Success Daniel. All rights reserved.</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/faq">FAQs</Link></div></div>
      </div>
    </footer>
  );
}