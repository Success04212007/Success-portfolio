import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Success Daniel | Wix Website Designer",
  description: "Meet Success Daniel, an independent Wix website designer focused on thoughtful website structure, responsive design, useful functionality and professional digital experiences.",
};

const principles = [
  ["01", "Clarity", "Every page should communicate its message effectively. I consider what visitors need to understand, which information matters most and how it can be presented without unnecessary friction."],
  ["02", "Structure", "Content, navigation and visual elements should have a logical relationship. A considered structure helps visitors move through a website with confidence."],
  ["03", "Visual consistency", "Typography, colour, spacing and imagery should work together as one cohesive identity and reinforce the character of the business."],
  ["04", "Usability", "Visitors should be able to navigate naturally and access the information they need across desktop, tablet and mobile screens."],
  ["05", "Functionality", "Forms, links, menus and agreed Wix features should support a clear purpose and work as expected."],
  ["06", "Purpose", "Important design decisions should have a reason behind them. Each choice should contribute to the goals of the website."],
];

const standards = [
  ["01", "Transparency", "Clear expectations, honest communication and a shared understanding of project requirements, scope and priorities."],
  ["02", "Attention to detail", "Careful consideration of design, typography, layout, functionality, responsive behaviour and presentation."],
  ["03", "Responsibility", "Taking agreed requirements, timelines and deliverables seriously, and communicating when something needs attention."],
  ["04", "Collaboration", "Making room for client knowledge and feedback while keeping discussions focused on the goals of the project."],
  ["05", "Quality", "Reviewing the website's design and functionality, checking key interactions and refining the implementation before handover."],
  ["06", "Continuous improvement", "Remaining open to learning, refining skills and improving the quality of the Wix experiences I create."],
];

const capabilities = [
  ["Wix business website design", "Professional pages that communicate services, establish credibility and give visitors clear next steps."],
  ["Wix website redesign", "Reworking an existing Wix website to improve structure, visual consistency, usability and responsive presentation."],
  ["Wix Studio design", "Responsive page compositions and layouts using Wix Studio where the project requirements call for it."],
  ["Wix landing pages", "Focused page layouts that explain an offer clearly and guide visitors toward a relevant action."],
  ["Wix CMS and dynamic pages", "Organizing repeatable content with collections and dynamic page structures where appropriate."],
  ["Wix Stores and e-commerce", "Product presentation, store organization and a customer-friendly shopping experience using supported Wix features."],
  ["Wix functionality and integrations", "Practical forms, booking, newsletter, member and third-party features where supported and within the agreed scope."],
  ["Responsive implementation", "Layouts and interactions reviewed for desktop, tablet and mobile screens."],
  ["SEO foundations", "Page titles, meta descriptions, heading structure, alt text, internal links and related on-page basics."],
];

const approach = [
  ["01", "Discovery", "Understand the business, target audience, objectives and project requirements. This establishes what the website needs to communicate and what visitors should be able to do."],
  ["02", "Planning", "Organize the website's pages, navigation, content and functional requirements. A clear plan creates a useful foundation for the design and build."],
  ["03", "Design", "Develop the visual direction, page layouts, typography, spacing and user experience, keeping the business identity and visitor needs in view."],
  ["04", "Wix development", "Build the approved website within Wix and implement the agreed page structure, responsive layouts and practical features."],
  ["05", "Review", "Test the website across screen sizes, check navigation and key interactions, and refine the implementation against the agreed requirements."],
  ["06", "Delivery", "Prepare the completed website for publication or handover according to the agreed project scope, with relevant guidance clearly communicated."],
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="eyebrow"><i /> ABOUT SUCCESS DANIEL</span>
            <h1>The Person Behind the Design. <em>The Thinking Behind Every Wix Website.</em></h1>
            <p className="about-hero-lede">I am Success Daniel, an independent Wix website designer focused on creating modern, responsive and professionally structured digital experiences.</p>
            <p className="about-hero-body">My work brings together visual design, website structure, user experience and practical Wix functionality. I believe a website should communicate the value of a business, make information easy to find and help visitors understand the next step.</p>
            <Link className="button button-gold" href="#my-approach">EXPLORE MY APPROACH <span>↓</span></Link>
          </div>
          <div className="about-hero-visual">
            <div className="about-portrait-frame">
              <div className="about-portrait-placeholder">
                <Image src="/images/success-daniel-portrait.jpeg" alt="Success Daniel, Wix Website Designer and Digital Experience Specialist" fill priority sizes="(max-width: 800px) 90vw, 38vw" className="about-portrait-image" />
              </div>
              <div className="about-image-note"><span>01 / PERSONAL INTRODUCTION</span><span>WIX WEBSITE DESIGN</span></div>
            </div>
            <div className="about-side-note">A THOUGHTFUL APPROACH TO EVERY DIGITAL DETAIL.</div>
          </div>
        </div>
        <div className="container about-hero-foot"><span>INDEPENDENT WIX WEBSITE DESIGNER</span><span>WIX WEBSITE DESIGN &amp; DEVELOPMENT</span><span>LAGOS, NIGERIA / WORKING WORLDWIDE</span></div>
      </section>

      <section className="about-section about-meet" id="meet-success">
        <div className="container about-meet-grid">
          <div className="about-section-index"><span>01 / INTRODUCTION</span><span className="index-rule" /></div>
          <div className="about-section-content">
            <span className="eyebrow"><i /> MEET SUCCESS DANIEL</span>
            <h2>The Person Behind the Pixels.</h2>
            <div className="about-meet-columns">
              <div>
                <p className="about-lead">I am Success Daniel, a Wix website designer creating thoughtful, professional websites for businesses, entrepreneurs, service providers and personal brands.</p>
                <p>I focus my website design practice on Wix. My work includes new website builds, existing Wix website redesigns, landing pages, online-store experiences, content organization and improvements to website usability.</p>
              </div>
              <div>
                <p>I am interested in how a business presents itself online: how clearly it explains what it offers, how naturally visitors can find their way around and whether the overall experience reflects the value of the business behind it.</p>
                <p>I approach each project by first understanding its purpose. From there, I consider the content, structure, visual direction and Wix features that can support that purpose. The aim is not simply to fill a screen, but to create a useful digital experience with a clear reason for every important element.</p>
              </div>
            </div>
            <div className="about-focus-strip"><span>MY CORE FOCUS</span><strong>Wix specialization</strong><strong>Considered design</strong><strong>Useful functionality</strong><strong>Responsive experiences</strong></div>
          </div>
        </div>
      </section>

      <section className="about-section about-philosophy" id="design-philosophy">
        <div className="container">
          <div className="about-section-heading">
            <div><span className="eyebrow"><i /> DESIGN PHILOSOPHY</span><span className="about-section-count">02 / HOW I THINK</span></div>
            <h2>Good Design Is Not Just About How Something Looks. <em>It Is About How It Works.</em></h2>
            <p>My approach to Wix website design is built around the understanding that every element should contribute to a coherent and useful experience. The design should communicate the business identity, help visitors understand information and make important actions easy to find.</p>
          </div>
          <div className="philosophy-list">{principles.map(([number, title, description]) => <article className="philosophy-row" key={number}><span className="philosophy-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="philosophy-mark">↗</span></article>)}</div>
        </div>
      </section>

      <section className="about-section about-expertise" id="expertise">
        <div className="container">
          <div className="about-section-heading expertise-heading">
            <div><span className="eyebrow"><i /> WIX EXPERTISE</span><span className="about-section-count">03 / WHAT I FOCUS ON</span></div>
            <h2>One Platform Focus. A Range of Website Experiences.</h2>
            <p>I focus my professional website design work on Wix. The exact tools and features used depend on the website's purpose, the client's needs and the functionality agreed for the project.</p>
          </div>
          <div className="platform-editorial">
            <article className="platform-editorial-row"><span className="platform-number">01</span><h3>Wix</h3><p>Business websites, redesigned experiences, landing pages, Wix Studio layouts, content management and suitable native or supported integrations.</p><span className="platform-wordmark">WIX</span></article>
          </div>
          <div className="capabilities-heading"><span>WIX DESIGN &amp; DEVELOPMENT CAPABILITIES</span><p>From the first page outline to the details that help a website work well.</p></div>
          <div className="capabilities-grid">{capabilities.map(([name, description], index) => <article className="capability-item" key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="about-section about-standards" id="professional-standards">
        <div className="container standards-grid">
          <div className="standards-intro">
            <span className="eyebrow"><i /> PROFESSIONAL STANDARDS</span>
            <span className="about-section-count">04 / WHAT GUIDES THE WORK</span>
            <h2>The Standards I Bring to Every Project.</h2>
            <p>The quality of a project is shaped not only by the final design, but also by the decisions, communication and care that go into producing it. These are the principles I aim to bring to each working relationship.</p>
          </div>
          <div className="standards-list">{standards.map(([number, title, description]) => <article className="standard-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </div>
      </section>

      <section className="about-section about-approach" id="my-approach">
        <div className="container">
          <div className="about-section-heading approach-heading">
            <div><span className="eyebrow"><i /> MY APPROACH</span><span className="about-section-count">05 / HOW PROJECTS MOVE FORWARD</span></div>
            <h2>Understanding First. Designing With Purpose. Building in Wix.</h2>
            <p>A considered process gives the project direction and makes it easier to keep the work connected to its original objectives. The exact scope varies by project, but these are the stages that generally guide my approach.</p>
          </div>
          <div className="approach-timeline">{approach.map(([number, title, description]) => <article className="approach-step" key={number}><span className="approach-step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="approach-step-arrow">↗</span></article>)}</div>
          <div className="approach-footer"><p>Want to understand the project stages in more detail?</p><Link className="text-link" href="/process">EXPLORE THE FULL PROCESS <span>→</span></Link></div>
        </div>
      </section>

      <section className="about-final-cta">
        <div className="container about-final-inner">
          <span className="eyebrow"><i /> THE NEXT CONVERSATION</span>
          <h2>Now That You Know the Thinking Behind the Work, <em>Let's Talk About Your Wix Website.</em></h2>
          <p>Whether you are planning a new Wix website, improving an existing one or exploring a focused page for your business, I would be glad to understand your objectives and discuss a suitable approach.</p>
          <div className="about-final-actions"><Link className="button button-gold" href="/contact">DISCUSS YOUR WIX PROJECT <span>↗</span></Link><Link className="text-link light-link" href="/portfolio">EXPLORE MY PORTFOLIO <span>→</span></Link></div>
        </div>
      </section>
    </main>
  );
}
