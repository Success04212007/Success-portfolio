import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro, CTA, Eyebrow } from "@/components/sections";

type Service = { title: string; intro: string; fit: string; problem: string; deliver: string[]; features: string[]; outcomes: string[]; faqs: [string, string][] };

const data: Record<string, Service> = {
  "wix-business-website-design": {
    title: "Wix Business Website Design",
    intro: "A professional business website should help people understand what your business does, who it serves and how to take the next step. I plan and build Wix websites around your brand, your audience and the information customers need.",
    fit: "Small businesses, consultants, professional service providers, local businesses, entrepreneurs and personal brands that need a credible online presence.",
    problem: "A business website can feel incomplete when its services are difficult to understand, pages are poorly organized or visitors cannot find a clear route to make an enquiry.",
    deliver: ["Discovery and project objectives", "Page list, sitemap and navigation structure", "Homepage and supporting page layouts", "Content placement and visual consistency", "Contact forms and agreed Wix features", "Responsive layout review", "SEO foundations and pre-launch checks"],
    features: ["Home, About, Services and Contact pages", "Clear calls to action and enquiry paths", "Responsive sections and navigation", "Wix Forms or other agreed native features", "Page titles, descriptions and image alt text"],
    outcomes: ["A clearer presentation of your business", "A consistent brand experience", "Straightforward navigation and page hierarchy", "A website that is easier to manage within Wix"],
    faqs: [["Can you create the website from scratch?", "Yes. A new Wix website can be planned and built around your business information, identity, audience and agreed page requirements."], ["Can the site have several pages?", "Yes. The page structure is agreed during planning and can include the core pages and supporting service pages your project needs."]],
  },
  "wix-website-redesign": {
    title: "Wix Website Redesign",
    intro: "A redesign is an opportunity to improve more than appearance. It can make information easier to navigate, clarify the business message and create a more coherent experience across devices.",
    fit: "Businesses that already have a Wix website but feel its visual design, content structure, navigation or mobile presentation needs attention.",
    problem: "An older website may no longer reflect the quality of the business. Inconsistent layouts, crowded pages, unclear calls to action and difficult mobile navigation can reduce its usefulness.",
    deliver: ["Review of the current Wix website", "Page and content structure recommendations", "Updated visual direction and layout system", "Redesign of the agreed pages", "Navigation and CTA refinement", "Responsive review and refinements", "Pre-publication checks"],
    features: ["Homepage and key page redesign", "Typography, colour and spacing refinement", "Improved section hierarchy", "Mobile and tablet layout adjustments", "Review of existing links and forms"],
    outcomes: ["A more current and professional presentation", "Clearer page structure", "More consistent design across the site", "A smoother visitor experience"],
    faqs: [["Will my existing website content be retained?", "Useful content can be retained and reorganized. Any new copy, photography or content production is agreed as part of the project scope."], ["Can you redesign only selected pages?", "Yes. The project can focus on priority pages or include a broader website redesign, depending on the goals."]],
  },
  "wix-studio-website-design": {
    title: "Wix Studio Website Design",
    intro: "Wix Studio can support more controlled responsive layouts and sophisticated page compositions. I use it where its design and layout capabilities are a good fit for the requirements of the project.",
    fit: "Businesses and brands that need a carefully art-directed website, structured responsive layouts or a more advanced design system within the Wix ecosystem.",
    problem: "Some projects need more than a basic page arrangement. Their visual identity, content density or responsive requirements call for careful control of layout behaviour and design consistency.",
    deliver: ["Project discovery and responsive requirements", "Page structure and visual system", "Responsive section and layout composition", "Reusable design patterns where useful", "Implementation of agreed interactions", "Responsive testing and review", "Handover guidance"],
    features: ["Responsive grid and section layouts", "Consistent typography and spacing", "Reusable components where appropriate", "Desktop, tablet and mobile presentation", "Agreed interactive elements"],
    outcomes: ["A cohesive visual system", "Responsive behaviour planned around content", "More consistent page composition", "A website experience aligned with the brand"],
    faqs: [["Is every project built in Wix Studio?", "Not necessarily. The appropriate Wix environment depends on the project's requirements and the client's existing setup."], ["Do you promise custom-coded features?", "No. Any advanced functionality is assessed separately and only included when it is supported and within the agreed scope."]],
  },
  "wix-landing-page-design": {
    title: "Wix Landing Page Design",
    intro: "A landing page gives one offer or campaign a focused place to communicate its value. Its sections should answer the visitor's questions and make the intended next action easy to understand.",
    fit: "Businesses promoting a service, offer, event, campaign, product launch or lead-generation initiative.",
    problem: "When a page tries to communicate too many messages at once, visitors can lose sight of the offer or the action they are being asked to take.",
    deliver: ["Audience, offer and goal clarification", "Page content and section hierarchy", "Hero and supporting section design", "CTA and enquiry-form placement", "Trust and FAQ content structure where supplied", "Responsive implementation", "Testing of links and agreed forms"],
    features: ["Focused headline and offer presentation", "Benefits and supporting information", "Lead-capture form or contact action", "FAQ or trust elements when appropriate", "Clear primary and secondary CTA"],
    outcomes: ["A focused message", "A clearer visitor journey", "Less distraction around the main action", "A page that supports a specific business objective"],
    faqs: [["Do you write the landing page copy?", "Content structure and messaging guidance can be included. Full copywriting requirements should be agreed separately based on the project."], ["Can the page connect to a booking form?", "A suitable Wix booking or third-party booking feature can be considered if it supports the required workflow."]],
  },
  "wix-ecommerce-website-design": {
    title: "Wix E-commerce Website Design",
    intro: "A considered online store helps customers explore products, understand the offer and move through the shopping journey with confidence. This service focuses on store presentation and Wix-supported e-commerce features.",
    fit: "Retailers, product businesses and brands preparing to sell online or improve an existing Wix store.",
    problem: "A store can become difficult to browse when products are poorly organized, product information is incomplete or the shopping journey is inconsistent.",
    deliver: ["Store structure and product-category planning", "Store homepage and collection presentation", "Product page layouts and content organization", "Navigation and shopping-flow setup", "Configuration of agreed Wix Stores features", "Responsive store review", "Test of agreed shopping interactions"],
    features: ["Product categories and collections", "Product detail pages", "Shopping cart and supported checkout settings", "Shipping and payment configuration where details are supplied", "Responsive product browsing"],
    outcomes: ["Clearer product discovery", "More consistent storefront presentation", "A considered shopping journey", "A store structure that can be managed and updated"],
    faqs: [["Are payment processing fees included?", "No. Wix subscriptions, payment-provider fees, domain registration, apps and other third-party costs are separate unless clearly included in the written project agreement."], ["Can you configure every payment provider?", "Payment options depend on the client's location, account eligibility and providers supported by Wix. Availability is checked for the project before setup."]],
  },
  "wix-cms-dynamic-websites": {
    title: "Wix CMS and Dynamic Websites",
    intro: "Wix CMS can help organize content that follows a repeatable structure. Dynamic pages can present entries from a collection without requiring every page to be designed and maintained separately.",
    fit: "Businesses that need structured project galleries, directories, team profiles, service listings, resource libraries or other repeatable content.",
    problem: "When similar content is added manually page by page, updates can take longer and information may become inconsistent across the website.",
    deliver: ["Content requirements and collection planning", "CMS field and data structure", "Dynamic page templates", "Connected page elements and repeatable layouts", "Content organization and sample entries", "Collection permissions and basic checks", "Guidance for managing entries"],
    features: ["Wix CMS collections", "Dynamic list and item pages", "Reusable content templates", "Connected images and text fields", "Content management guidance"],
    outcomes: ["More organized website content", "Repeatable page structures", "A clearer content update workflow", "A portfolio or resource library that can grow"],
    faqs: [["Do I need CMS for every website?", "No. CMS is useful when content follows a repeatable structure or needs regular updates. A simpler page setup may be better for a small website."], ["Can I update CMS content myself?", "The handover can include guidance on adding and editing entries, based on the collection structure agreed for the project."]],
  },
  "wix-functionality-integrations": {
    title: "Wix Website Functionality and Integrations",
    intro: "Useful website functionality should support the way a business operates. I can help implement appropriate Wix features and supported integrations that fit the agreed requirements.",
    fit: "Businesses that need enquiry forms, bookings, newsletters, member features or connections to supported business tools on their Wix website.",
    problem: "A website may look complete but still make it difficult for visitors to enquire, book, subscribe or access the functions the business needs.",
    deliver: ["Requirements and workflow review", "Selection of suitable Wix features", "Setup of agreed forms or functions", "Configuration of supported integrations", "Responsive and interaction checks", "Basic handover guidance"],
    features: ["Wix Forms and enquiry flows", "Wix Bookings where suitable", "Newsletter sign-up features", "Social and third-party connections", "Member or CMS functionality where agreed"],
    outcomes: ["A website that supports a practical business workflow", "Fewer confusing visitor steps", "Consistent placement of key actions", "Clearer expectations about third-party requirements"],
    faqs: [["Can you connect any third-party tool?", "No. Each integration must be checked for Wix compatibility, account requirements, permissions and project scope before it is promised."], ["Are paid app subscriptions included?", "Third-party subscriptions and service fees are separate unless explicitly included in the project agreement."]],
  },
  "wix-website-optimization-seo-foundations": {
    title: "Wix Website Optimization and SEO Foundations",
    intro: "A useful website needs more than attractive pages. Clear content structure, relevant metadata, mobile usability and sound technical foundations all contribute to how a Wix website works and is understood.",
    fit: "Businesses with an existing Wix website that want to improve page organization, on-page SEO basics, usability or responsive presentation.",
    problem: "Missing page titles, duplicated descriptions, unclear headings, oversized images and inconsistent mobile layouts can make a website harder to use and maintain.",
    deliver: ["Review of page structure and key user journeys", "Page title and meta description updates", "Heading hierarchy and content organization", "Image alt text and internal-link review", "Mobile layout and usability checks", "Technical SEO foundations review", "Prioritized recommendations for further work"],
    features: ["Unique page titles and descriptions", "Logical heading structure", "Descriptive image alt text", "Useful internal links and page URLs", "Responsive and image-optimization checks"],
    outcomes: ["Clearer page information", "Better organized content", "More complete on-page SEO foundations", "A more consistent experience across screens"],
    faqs: [["Can you guarantee first-page rankings?", "No. Search performance depends on many factors beyond website changes. I do not guarantee rankings, traffic or search placement."], ["Does this include ongoing SEO campaigns?", "The service described here covers agreed Wix website and on-page foundations. Ongoing content, outreach or SEO campaign work must be scoped separately."]],
  },
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data[slug];
  if (!item) notFound();

  return (
    <main>
      <PageIntro eyebrow="WIX SERVICE / DESIGN &amp; DEVELOPMENT" title={item.title} body={item.intro} />
      <section className="content-section">
        <div className="container content-grid">
          <div>
            <Eyebrow>WHO THIS IS FOR</Eyebrow>
            <h2>A solution aligned with the stage and needs of your business.</h2>
            <p>{item.fit}</p>
            <div className="service-detail"><h3>THE BUSINESS CHALLENGE</h3><p>{item.problem}</p></div>
            <div className="service-cta"><Link className="button button-light" href="/contact">DISCUSS YOUR WIX PROJECT ↗</Link></div>
          </div>
          <div>
            <Eyebrow>WHAT THE WORK CAN INCLUDE</Eyebrow>
            {item.deliver.map((value, index) => <div className="service-detail" key={value}><h3>{String(index + 1).padStart(2, "0")} / {value}</h3></div>)}
          </div>
        </div>
        <div className="container" style={{ marginTop: 55 }}>
          <Eyebrow>RECOMMENDED FEATURES</Eyebrow>
          <div className="cap-grid">{item.features.map((value, index) => <article className="cap-card" key={value}><span>0{index + 1}</span><h3>{value}</h3></article>)}</div>
        </div>
        <div className="container" style={{ marginTop: 55 }}>
          <Eyebrow>THE VALUE OF A THOUGHTFUL APPROACH</Eyebrow>
          <div className="cap-grid">{item.outcomes.map((value, index) => <article className="cap-card" key={value}><span>0{index + 1}</span><h3>{value}</h3></article>)}</div>
        </div>
        <div className="container" style={{ marginTop: 55 }}>
          <Eyebrow>COMMON QUESTIONS</Eyebrow>
          {item.faqs.map(([question, answer]) => <article className="faq-item" key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          <Link className="text-link" href="/faq">VIEW MORE WIX WEBSITE FAQs ↗</Link>
        </div>
      </section>
      <CTA title={"Let's discuss your " + item.title.toLowerCase() + " project."} body="Share your goals and requirements so we can define the right pages, features and scope before work begins." />
    </main>
  );
}