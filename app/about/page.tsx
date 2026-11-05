import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Success Daniel",
  description: "Meet Success Daniel, explore the design philosophy, professional standards, platform expertise and process behind his website design work.",
};

const principles = [
  ["01", "Clarity", "Every page should communicate its message effectively. I consider what visitors need to understand, what information matters most, and how the content can be presented without unnecessary friction."],
  ["02", "Structure", "Content, navigation and visual elements should have a logical relationship. A considered structure helps visitors move through a website with confidence and understand how each page fits into the wider experience."],
  ["03", "Visual consistency", "Typography, colour, imagery and layouts should work together as one cohesive identity. Consistency gives a website a more considered appearance and helps reinforce the character of the business."],
  ["04", "Usability", "Visitors should be able to navigate naturally and access the information they need. I pay attention to readable content, clear navigation, responsive layouts and familiar interaction patterns."],
  ["05", "Functionality", "The visual experience must be supported by working features and carefully implemented interactions. Forms, links, menus and business-specific features should serve a clear purpose."],
  ["06", "Purpose", "Important design decisions should have a reason behind them. From the placement of a call to action to the order of information, each choice should contribute to the goals of the website."],
];

const standards = [
  ["01", "Transparency", "Clear expectations, honest communication and a shared understanding of project requirements, scope and priorities."],
  ["02", "Attention to detail", "Careful consideration of design, typography, layout, functionality, responsive behaviour and presentation."],
  ["03", "Responsibility", "Taking agreed project requirements, timelines and deliverables seriously, and communicating when something needs attention."],
  ["04", "Collaboration", "Making room for client knowledge and feedback while keeping discussions focused on the goals of the project."],
  ["05", "Quality", "Reviewing the website's design and functionality, checking key interactions and refining the implementation before handover."],
  ["06", "Continuous improvement", "Remaining open to learning, refining skills and improving the quality of the digital experiences I create."],
];

const capabilities = [
  ["Business website design", "Professional websites that communicate services, establish credibility and give visitors clear next steps."],
  ["Website redesign", "Reworking existing websites to improve structure, visual consistency, usability and responsive presentation."],
  ["E-commerce website design", "Product presentation, store organization, navigation and customer-friendly shopping experiences."],
  ["Landing page design", "Focused page layouts that explain an offer clearly and guide visitors toward a relevant action."],
  ["Responsive development", "Layouts and interactions considered for desktop, tablet and mobile screens."],
  ["User experience design", "Information hierarchy, navigation, page flow and interaction decisions that make websites easier to use."],
  ["Website structure & navigation", "Organizing pages and content so visitors can find relevant information without confusion."],
  ["Conversion-focused design", "Clear messaging, purposeful calls to action and page structures aligned with the intended visitor journey."],
  ["Technical SEO foundations", "Attention to crawlable structure, page performance considerations, metadata and other technical foundations."],
  ["On-page SEO", "Relevant page titles, descriptions, headings, internal links and content organization."],
];

const platforms = [
  ["Wix", "Professional business websites, custom page layouts, responsive experiences, content management and suitable business integrations."],
  ["WordPress", "Flexible website structures, content-driven websites, customized layouts, plugins and adaptable website functionality."],
  ["Shopify", "E-commerce website design, product presentation, store organization, customer-friendly navigation and online shopping experiences."],
];

const approach = [
  ["01", "Discovery", "Understand the business, target audience, objectives and project requirements. This stage establishes what the website needs to communicate and what it should help visitors do."],
  ["02", "Planning", "Organize the website's pages, navigation, content and functional requirements. A clear plan creates a useful foundation for the design and build."],
  ["03", "Design", "Develop the visual direction, page layouts, typography, spacing and user experience, keeping the business identity and visitor needs in view."],
  ["04", "Development", "Build the website on the most appropriate platform and implement the agreed features, content structure and interactions."],
  ["05", "Review", "Test the website, examine its responsiveness, review key links and functionality, and refine the implementation against the agreed requirements."],
  ["06", "Delivery", "Prepare the completed website for handover or publication according to the agreed project scope, with the next steps clearly communicated."],
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-copy">
            <span className="eyebrow"><i /> BEHIND THE DIGITAL EXPERIENCES</span>
            <h1>A Closer Look at the Person, Thinking, and Principles Behind the Work.</h1>
            <p className="about-hero-lede">I am Success Daniel, a website designer focused on creating modern, professional, and strategically structured digital experiences.</p>
            <p className="about-hero-body">My work brings together visual design, website development, user experience, and an understanding of how businesses communicate their value online. I believe a website should have a clear purpose, communicate effectively, and provide visitors with an experience that reflects the quality and identity of the business behind it.</p>
            <Link className="button button-gold" href="#my-approach">EXPLORE MY APPROACH <span>↓</span></Link>
          </div>
          <div className="about-hero-visual">
            <div className="about-portrait-frame">
              <div className="about-portrait-placeholder">
                <Image src="/images/success-daniel-portrait.jpeg" alt="Success Daniel, Website Designer and Digital Experience Specialist" fill priority sizes="(max-width: 800px) 90vw, 38vw" className="about-portrait-image" />
              </div>
              <div className="about-image-note"><span>01 / PERSONAL INTRODUCTION</span><span>DESIGN &amp; DIGITAL EXPERIENCE</span></div>
            </div>
            <div className="about-side-note">A THOUGHTFUL APPROACH TO EVERY DIGITAL DETAIL.</div>
          </div>
        </div>
        <div className="container about-hero-foot"><span>INDEPENDENT WEBSITE DESIGNER</span><span>WIX · WORDPRESS · SHOPIFY</span><span>LAGOS, NIGERIA / WORKING WORLDWIDE</span></div>
      </section>

      <section className="about-section about-meet" id="meet-success">
        <div className="container about-meet-grid">
          <div className="about-section-index"><span>01 / INTRODUCTION</span><span className="index-rule" /></div>
          <div className="about-section-content">
            <span className="eyebrow"><i /> MEET SUCCESS DANIEL</span>
            <h2>The Person Behind the Pixels.</h2>
            <div className="about-meet-columns">
              <div>
                <p className="about-lead">I am Success Daniel, a website designer and digital experience specialist with a focus on building thoughtful, professional websites for businesses and personal brands.</p>
                <p>I work across Wix, WordPress and Shopify, bringing together page structure, visual presentation, responsive design and practical website functionality. My work includes new website builds, redesigns, online stores, landing pages and improvements to existing website experiences.</p>
              </div>
              <div>
                <p>I am interested in the way a business presents itself online: how clearly it explains what it offers, how naturally visitors can find their way around, and whether the overall experience reflects the value of the business behind it.</p>
                <p>I approach each project by first understanding its purpose. From there, I consider the content, structure, design direction and features that can support that purpose. The aim is not simply to fill a screen, but to create a useful digital experience with a clear reason for every important element.</p>
              </div>
            </div>
            <div className="about-focus-strip"><span>MY CORE FOCUS</span><strong>Clear communication</strong><strong>Considered design</strong><strong>Useful functionality</strong><strong>Responsive experiences</strong></div>
          </div>
        </div>
      </section>

      <section className="about-section about-philosophy" id="design-philosophy">
        <div className="container">
          <div className="about-section-heading">
            <div><span className="eyebrow"><i /> DESIGN PHILOSOPHY</span><span className="about-section-count">02 / HOW I THINK</span></div>
            <h2>Good Design Is Not Just About How Something Looks. <em>It Is About How It Works.</em></h2>
            <p>My approach to website design is built around the understanding that every element should contribute to a coherent and useful experience. The design should communicate the identity of the business, help visitors understand information, and make important actions easy to find.</p>
          </div>
          <div className="philosophy-list">
            {principles.map(([number, title, description]) => <article className="philosophy-row" key={number}><span className="philosophy-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="philosophy-mark">↗</span></article>)}
          </div>
        </div>
      </section>

      <section className="about-section about-expertise" id="expertise">
        <div className="container">
          <div className="about-section-heading expertise-heading">
            <div><span className="eyebrow"><i /> EXPERTISE &amp; PLATFORMS</span><span className="about-section-count">03 / WHAT I WORK WITH</span></div>
            <h2>The Platforms and Capabilities Behind My Work.</h2>
            <p>Different projects call for different tools. These are the three primary website platforms I work with, alongside the design and optimization capabilities that support a complete website experience.</p>
          </div>
          <div className="platform-editorial">
            {platforms.map(([name, description], index) => <article className="platform-editorial-row" key={name}><span className="platform-number">0{index + 1}</span><h3>{name}</h3><p>{description}</p><span className="platform-wordmark">{name.toUpperCase()}</span></article>)}
          </div>
          <div className="capabilities-heading"><span>WIDER CAPABILITIES</span><p>From the first page outline to the details that help a website work well.</p></div>
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
            <h2>Understanding First. Designing With Purpose. Delivering With Care.</h2>
            <p>A considered process gives the project direction and makes it easier to keep the work connected to its original objectives. The exact scope varies by project, but these are the stages that generally guide my approach.</p>
          </div>
          <div className="approach-timeline">{approach.map(([number, title, description]) => <article className="approach-step" key={number}><span className="approach-step-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="approach-step-arrow">↗</span></article>)}</div>
          <div className="approach-footer"><p>Want to understand the project stages in more detail?</p><Link className="text-link" href="/process">EXPLORE THE FULL PROCESS <span>→</span></Link></div>
        </div>
      </section>

      <section className="about-final-cta">
        <div className="container about-final-inner">
          <span className="eyebrow"><i /> THE NEXT CONVERSATION</span>
          <h2>Now That You Know the Thinking Behind the Work, <em>Let's Talk About Yours.</em></h2>
          <p>Whether you are planning a new website, improving an existing digital presence, or building an online store, I would be glad to understand your objectives and explore how we can approach your project.</p>
          <div className="about-final-actions"><Link className="button button-gold" href="/contact">DISCUSS YOUR PROJECT <span>↗</span></Link><Link className="text-link light-link" href="/portfolio">EXPLORE MY PORTFOLIO <span>→</span></Link></div>
        </div>
      </section>
    </main>
  );
}