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
        <path d="M12 2.7a9.1 9.1 0 0 0-7.83 13.75L3 21l4.7-1.23A9.15 9.15 0 1 0 12 2.7Z" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
        <path d="M9.1 8.1c-.25-.55-.53-.57-.78-.58l-.66-.01c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.52c.17.23 2.37 3.8 5.86 5.17 2.9 1.15 3.49.92 4.12.86.63-.06 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.09-.14-.32-.23-.67-.4-.34-.17-2.03-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.02-1.89-2.36-.2-.34-.02-.53.15-.7.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.75-1.87-1.06-2.55Z" fill="currentColor" transform="translate(2.9 1.6) scale(.78)" />
      </svg>
    );
  }
  if (channel === "line") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" />
        <path d="M5.3 10.7c0-2.85 2.98-5.17 6.67-5.17s6.68 2.32 6.68 5.17-2.99 5.17-6.68 5.17c-.43 0-.85-.03-1.25-.09l-2.62 1.44.48-2.28c-1.99-.91-3.28-2.47-3.28-4.24Z" fill="#fff" />
        <text x="12" y="12.25" fontSize="4.15" fontWeight="800" fill="#16a34a" textAnchor="middle">LINE</text>
      </svg>
    );
  }
  if (channel === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path d="M13.35 20v-7.3h2.45l.37-2.85h-2.82V8.03c0-.83.23-1.4 1.42-1.4h1.51V4.08c-.26-.03-1.15-.11-2.19-.11-2.17 0-3.65 1.32-3.65 3.74v2.09H8v2.85h2.44V20h2.91Z" fill="#fff" />
      </svg>
    );
  }
  if (channel === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 3.5h2.3l1.15 4.15-1.8 1.8a15.5 15.5 0 0 0 5.7 5.7l1.8-1.8 4.15 1.15v2.3c0 1.05-.85 1.9-1.9 1.9C10.1 18.7 5.3 13.9 5.3 7.2c0-1.05.85-1.9 1.9-1.9Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.7" y="4.5" width="18.6" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m3.6 6 8.4 6.5L20.4 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
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
        >
          <ContactGlyph channel={channel.key} />
        </a>
      ))}
    </aside>
  );
}
\nexport function SiteHeader() {
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