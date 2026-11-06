"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const services = [
  ["Wix Business Website Design", "/services/wix-business-website-design"],
  ["Wix Website Redesign", "/services/wix-website-redesign"],
  ["Wix Studio Website Design", "/services/wix-studio-website-design"],
  ["Wix Landing Page Design", "/services/wix-landing-page-design"],
  ["Wix E-commerce Website Design", "/services/wix-ecommerce-website-design"],
  ["Wix CMS & Dynamic Websites", "/services/wix-cms-dynamic-websites"],
  ["Wix Functionality & Integrations", "/services/wix-functionality-integrations"],
  ["Wix Optimization & SEO Foundations", "/services/wix-website-optimization-seo-foundations"],
];

const aboutLinks = [
  ["01", "Meet Success Daniel", "Professional identity and the person behind the work.", "/about#meet-success"],
  ["02", "Design Philosophy", "The principles behind visual design, structure and usability.", "/about#design-philosophy"],
  ["03", "Wix Specialization", "The Wix website design and development capabilities I focus on.", "/about#expertise"],
  ["04", "Professional Standards", "The values that guide communication, collaboration and quality.", "/about#professional-standards"],
  ["05", "My Approach", "How Wix projects move from discovery and planning to delivery.", "/about#my-approach"],
];


type ContactChannel = {
  key: "whatsapp" | "line" | "facebook" | "phone" | "email";
  label: string;
  note: string;
  href: string;
  external?: boolean;
};

const contactChannels: ContactChannel[] = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    note: "Message me directly",
    href: "https://wa.me/2349163256121?text=Hello%20Success%20Daniel%2C%20I%27d%20like%20to%20discuss%20a%20Wix%20website%20project.",
    external: true,
  },
  {
    key: "line",
    label: "LINE",
    note: "Connect through LINE",
    href: "https://line.me/ti/p/eQjYTsbuJN",
    external: true,
  },
  {
    key: "facebook",
    label: "Facebook",
    note: "Find Emmanuel Daniel",
    href: "https://www.facebook.com/search/top?q=Emmanuel%20Daniel",
    external: true,
  },
  {
    key: "phone",
    label: "Phone",
    note: "+234 916 325 6121",
    href: "tel:+2349163256121",
  },
  {
    key: "email",
    label: "Email",
    note: "successayomide623@gmail.com",
    href: "mailto:successayomide623@gmail.com?subject=Website%20project%20enquiry",
  },
];

function ContactGlyph({ channel }: { channel: ContactChannel["key"] }) {
  if (channel === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    );
  }
  if (channel === "line") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    );
  }
  if (channel === "facebook") {
    return (
      <svg viewBox="0 0 320 512" aria-hidden="true">
        <path fill="currentColor" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    );
  }
  if (channel === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ContactMethods({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "contact-methods is-compact" : "contact-methods"}>
      {contactChannels.map((channel) => (
        <a
          className={"contact-option contact-option-" + channel.key}
          href={channel.href}
          key={channel.key}
          target={channel.external ? "_blank" : undefined}
          rel={channel.external ? "noopener noreferrer" : undefined}
          aria-label={channel.label + ": " + channel.note}
        >
          <span className="contact-option-icon"><ContactGlyph channel={channel.key} /></span>
          <span className="contact-option-copy"><strong>{channel.label}</strong><small>{channel.note}</small></span>
          <span className="contact-option-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function FloatingContactDock() {
  return (
    <aside className="contact-dock" aria-label="Quick contact links">
      {contactChannels.map((channel) => (
        <a
          className={"contact-dock-link contact-dock-" + channel.key}
          href={channel.href}
          key={channel.key}
          target={channel.external ? "_blank" : undefined}
          rel={channel.external ? "noopener noreferrer" : undefined}
          aria-label={channel.label + ": " + channel.note}
          title={channel.label}
          data-tooltip={channel.label}
        >
          <ContactGlyph channel={channel.key} />
        </a>
      ))}
    </aside>
  );
}
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
          <span className="brand-mark"><Image src="/images/success-daniel-logo.jpg" alt="" width={52} height={52} priority className="brand-logo-image" /></span>
          <span className="brand-copy">
            <strong>SUCCESS DANIEL</strong>
            <small>WIX WEBSITE DESIGN &amp; DEVELOPMENT</small>
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
                  <p className="mega-role">Wix Website Designer &amp; Digital Experience Specialist</p>
                  <p>Get to know the person behind the work and the principles that shape my approach to designing and building professional Wix websites.</p>
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
          <Link href="/process" onClick={closeMenus} aria-current={pathname.startsWith("/process") ? "page" : undefined}>My Process</Link>
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
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div><Link href="/" className="footer-brand-lockup" aria-label="Success Daniel home"><Image src="/images/success-daniel-logo.jpg" alt="" width={58} height={58} className="footer-brand-image" /><b className="footer-brand">SUCCESS DANIEL<span>.</span></b></Link><p>Wix website design and development.<br />Thoughtful digital experiences built around your business.</p><div className="footer-quick-links"><Link href="/about">About</Link><Link href="/services">Wix Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/process">My Process</Link><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link></div></div>
          <div className="footer-contact-block"><small>HAVE A WIX PROJECT IN MIND?</small><p>Choose your preferred way to contact me directly.</p><ContactMethods compact /></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Success Daniel. All rights reserved.</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/faq">FAQs</Link></div></div>
      </div>
    </footer>
    <FloatingContactDock />
    </>
  );
}