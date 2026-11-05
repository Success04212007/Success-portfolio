import Image from "next/image";
import Link from "next/link";
import { CTA, Eyebrow, SectionHeading } from "@/components/sections";

export const metadata = {
  title: "Professional Wix Website Designer",
  description: "Success Daniel designs modern, responsive Wix websites for businesses, entrepreneurs and personal brands, including Wix website redesigns, landing pages and CMS-powered experiences.",
};

const capabilities = [
  ["01", "Custom Wix website design", "Thoughtfully structured Wix websites shaped around your business, audience, brand identity and goals."],
  ["02", "Wix website redesign", "A clearer visual system, improved content hierarchy and a more useful experience for an existing Wix website."],
  ["03", "Wix Studio experiences", "Responsive layouts and considered page compositions using Wix Studio when it suits the project."],
  ["04", "Wix landing pages", "Focused pages that explain an offer clearly and guide visitors toward one relevant action."],
  ["05", "Wix CMS and dynamic content", "Organized collections and repeatable page structures for content that needs to be managed and updated."],
  ["06", "Wix functionality and optimization", "Practical forms, booking or store features, integrations, responsive checks and SEO foundations within Wix."],
];

const services = [
  ["Wix Business Website Design", "Professional business websites that communicate your value and make the next step clear.", "/services/wix-business-website-design"],
  ["Wix Website Redesign", "Improve an existing Wix website's structure, presentation, navigation and mobile experience.", "/services/wix-website-redesign"],
  ["Wix Studio Website Design", "Build responsive, carefully composed website experiences using Wix Studio where appropriate.", "/services/wix-studio-website-design"],
  ["Wix Landing Page Design", "Create focused landing pages for a service, offer, campaign or lead-generation objective.", "/services/wix-landing-page-design"],
  ["Wix E-commerce Website Design", "Organize products and create a clear shopping experience with Wix Stores and supported features.", "/services/wix-ecommerce-website-design"],
  ["Wix CMS and Dynamic Websites", "Structure repeatable content with Wix CMS collections and dynamic pages where useful.", "/services/wix-cms-dynamic-websites"],
  ["Wix Functionality and Integrations", "Add appropriate forms, booking, member, newsletter and third-party features supported by Wix.", "/services/wix-functionality-integrations"],
  ["Wix Optimization and SEO Foundations", "Improve metadata, page structure, mobile usability and practical search foundations.", "/services/wix-website-optimization-seo-foundations"],
];

const principles = [
  ["Business understanding", "Start with the business, its audience and the purpose of the website."],
  ["Visual consistency", "Use typography, spacing, colour and imagery as one coherent design system."],
  ["Visitor experience", "Make information easy to understand and important actions easy to find."],
  ["Practical functionality", "Keep forms, links, responsive layouts and agreed integrations useful and reliable."],
];

const concepts = [
  ["13", "AURELIS", "Global music & culture website concept", "An international music platform bringing music and global culture together.", "/images/portfolio/aurelis-global-music.png", "/portfolio/aurelis-global-music"],
  ["14", "Crocodile Leather Shoes", "Luxury footwear website concept", "A refined digital presentation for an exotic-leather footwear atelier.", "/images/portfolio/crocodile-leather-atelier.png", "/portfolio/crocodile-leather-atelier"],
  ["15", "Global Frontline", "Editorial newsletter & publication concept", "A structured reading experience for an international editorial publication.", "/images/portfolio/global-frontline-newsletter.png", "/portfolio/global-frontline-newsletter"],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <Eyebrow>INDEPENDENT WIX WEBSITE DESIGNER &amp; DIGITAL EXPERIENCE SPECIALIST</Eyebrow>
            <h1>Your business deserves more than just a website. <em>It deserves a powerful digital presence.</em></h1>
            <p className="hero-lede">I design and build modern, responsive Wix websites that help businesses establish credibility, communicate their value and create better experiences for their customers.</p>
            <p className="hero-sub">From new business websites and thoughtful redesigns to focused landing pages and structured content experiences, I bring design, usability and practical Wix functionality together around your business objectives.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">START A PROJECT ↗</Link>
              <Link className="text-link light-link" href="/portfolio">EXPLORE MY WIX WORK ↗</Link>
            </div>
            <div className="hero-proof"><span>WIX WEBSITE DESIGN</span><span>RESPONSIVE DEVELOPMENT</span><span>BUSINESS-FOCUSED EXPERIENCES</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-placeholder">
                <Image src="/images/success-daniel-portrait.jpeg" alt="Success Daniel, Wix Website Designer and Digital Experience Specialist" fill priority sizes="(max-width: 800px) 90vw, 36vw" className="hero-portrait-image" />
              </div>
              <div className="portrait-caption"><b>SUCCESS DANIEL</b><span>Wix Website Designer &amp; Digital Experience Specialist</span></div>
            </div>
          </div>
        </div>
        <div className="hero-bottom container"><span>ONE SPECIALIZATION: WIX.</span><span>DESIGN WITH INTENTION.</span><span>DEVELOP WITH PURPOSE.</span></div>
      </section>

      <section className="section-pad">
        <div className="container intro-grid">
          <div><Eyebrow>THE THINKING BEHIND THE DESIGN</Eyebrow><h2>A professional website should represent the true quality of your business. <em>Every detail should have a purpose.</em></h2></div>
          <div className="intro-copy">
            <p>Your website is often one of the first interactions potential customers have with your business. It influences how people understand your services, perceive your brand and decide whether to take the next step.</p>
            <p>I approach Wix website design with more than visual appearance in mind. I consider content hierarchy, navigation, responsive layouts, useful functionality and the way the website supports your business objectives.</p>
            <Link className="text-link" href="/about">MEET SUCCESS DANIEL ↗</Link>
          </div>
        </div>
      </section>

      <section className="cap-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="MY CORE SPECIALIZATION" title="Focused entirely on creating better Wix website experiences." body="One platform focus, applied with care to the structure, visual presentation, usability and functionality of each project." />
          <div className="cap-grid">{capabilities.map(([number, title, description]) => <article className="cap-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="split-heading"><SectionHeading eyebrow="WIX WEBSITE DESIGN SERVICES" title="The right Wix solution for your business and its next stage." body="Explore the services I offer within the Wix ecosystem. The final scope is shaped around the requirements and functionality of each project." /><Link className="text-link" href="/services">VIEW ALL WIX SERVICES ↗</Link></div>
          <div className="service-grid">{services.map(([title, description, href], index) => <Link className="service-card" href={href} key={href}><span>0{index + 1} / WIX SERVICE</span><h3>{title}</h3><p>{description}</p><b>EXPLORE SERVICE ↗</b></Link>)}</div>
        </div>
      </section>

      <section className="platform-section">
        <div className="container platform-row">
          <div><Eyebrow>WHY A THOUGHTFUL WIX BUILD</Eyebrow><h2>Wix is the foundation. The quality comes from how the experience is planned and built.</h2></div>
          <div className="wix-value-list"><span>Clear page structure</span><span>Flexible content management</span><span>Responsive presentation</span><span>Useful native features</span></div>
        </div>
      </section>

      <section className="work-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="SELECTED WEBSITE DESIGN CONCEPTS" title="A closer look at the visual work behind each experience." body="Explore a selection of the actual website visuals supplied for this portfolio. Each is presented as an independent design concept, with its own case study and clear project classification." />
          <div className="work-grid">{concepts.map(([number, title, type, description, image, href]) => <article className="work-card" key={href}>
            <Link href={href} className="work-art-link" aria-label={"View case study: " + title}>
              <div className="work-art">
                <Image src={image} alt={title + " website design concept"} fill sizes="(max-width: 800px) 92vw, 30vw" className="work-project-image" />
                <span className="concept-label">INDEPENDENT CONCEPT</span>
              </div>
            </Link>
            <div className="work-meta"><span>{number} / {type.toUpperCase()}</span><b>{title}</b><p>{description}</p><Link className="text-link" href={href}>VIEW CONCEPT CASE STUDY ↗</Link></div>
          </article>)}</div>
          <Link className="text-link" href="/portfolio">EXPLORE ALL 15 PORTFOLIO CONCEPTS ↗</Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="HOW I APPROACH THE WORK" title="Good website design starts with understanding the business." body="The design decisions should connect to what the business needs to communicate and what its visitors need to do." />
          <div className="cap-grid">{principles.map(([title, description], index) => <article className="cap-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="process-preview section-pad">
        <div className="container process-grid">
          <div><Eyebrow>A CLEAR, COLLABORATIVE APPROACH</Eyebrow><h2>From the first conversation to a carefully reviewed Wix website.</h2><p>Every project follows a considered process: discovery, planning, design, Wix development, testing and handover. The scope and timing are agreed before the build begins.</p><Link className="text-link" href="/process">EXPLORE MY WIX PROJECT PROCESS ↗</Link></div>
          <div className="process-list">{[["01","Discover","Understand the business, audience, goals and requirements."],["02","Plan & design","Shape the page structure, content hierarchy and visual direction."],["03","Build in Wix","Develop the approved experience and implement agreed features."],["04","Review & hand over","Check responsive layouts, links and functionality before delivery."]].map(([number,title,description])=><div key={number}><span>{number}</span><section><b>{title}</b><p>{description}</p></section></div>)}</div>
        </div>
      </section>

      <CTA title="Let's create a Wix website that gives your business the digital presence it deserves." body="Tell me what your business does, what your website needs to achieve and the kind of experience you want to create. We can discuss the requirements and a suitable project scope." />
    </main>
  );
}