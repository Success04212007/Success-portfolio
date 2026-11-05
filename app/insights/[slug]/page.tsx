import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro, CTA, Eyebrow } from "@/components/sections";

type Article = { category: string; title: string; intro: string; sections: [string, string[]][] };

const articles: Record<string, Article> = {
  "wix-business-website-professional": {
    category: "WIX WEBSITE DESIGN",
    title: "What Makes a Wix Business Website Feel Professional?",
    intro: "A professional business website is not defined by decoration alone. It is the result of clear information, consistent design and an experience that helps visitors understand the business.",
    sections: [
      ["Start with a clear message", ["Visitors should quickly understand what the business does, who it helps and what makes its offer relevant. A strong headline and concise supporting text create a useful starting point.", "Avoid forcing every service, feature and selling point into the first screen. Lead with the most important message, then provide supporting detail in a logical order."]],
      ["Give every page a purpose", ["A business website usually needs a small number of well-organized pages: a homepage, an introduction to the business, service information and a clear contact route. Additional pages should answer real visitor questions.", "In Wix, create the page structure before adding decorative sections. This makes it easier to maintain a consistent navigation system and avoid duplicated content."]],
      ["Use a consistent visual system", ["Typography, spacing, colour and imagery should feel related from one page to the next. Consistency makes the website easier to scan and helps the brand feel intentional.", "Use genuine, relevant images wherever possible. A well-chosen photograph that reflects the business is usually more useful than generic decoration."]],
      ["Make the next step easy to find", ["A visitor should not have to guess how to contact the business, request information or book a service. Calls to action should be specific, visible and placed where they make sense in the page journey.", "Review the website on mobile as well as desktop. Buttons, text, forms and navigation need to remain easy to use on smaller screens."]],
    ],
  },
  "wix-website-navigation": {
    category: "WEBSITE STRUCTURE",
    title: "Why Your Wix Website Needs Better Navigation",
    intro: "Navigation is more than a row of links. It gives visitors a mental map of the website and helps them decide where to go next.",
    sections: [
      ["Organize pages around visitor questions", ["A useful navigation system reflects the information people are likely to look for. For a service business, that may include the services offered, the story behind the business, useful project examples and a contact route.", "Choose labels that visitors understand. Clear names are more useful than clever wording that hides the page's purpose."]],
      ["Keep the hierarchy manageable", ["If every page is given equal prominence, the navigation can become crowded. Group related information into sensible sections and reserve the main navigation for the most important destinations.", "For larger Wix websites, a dropdown or structured sub-navigation can help, but it should remain easy to use with a mouse, keyboard and touch screen."]],
      ["Make the current location clear", ["Visitors benefit from knowing which part of the website they are viewing. Active link styles, descriptive page headings and consistent page layouts reinforce that sense of location.", "Test the navigation on a phone. A menu that works on desktop may need a different interaction pattern on mobile."]],
      ["Check every destination", ["Navigation is only useful when its links work. Review internal pages, dropdown items, footer links and calls to action before publication. Remove placeholder links and avoid directing visitors to unfinished pages."]],
    ],
  },
  "redesign-existing-wix-website": {
    category: "WIX REDESIGN",
    title: "When Is It Time to Redesign an Existing Wix Website?",
    intro: "A redesign is worth considering when the website no longer serves the business or makes it unnecessarily difficult for visitors to understand the offer.",
    sections: [
      ["The website no longer reflects the business", ["Businesses change. Services, positioning, branding and the audiences they serve may evolve, while the website still presents an older version of the offer.", "A redesign can bring the messaging, visual identity and page structure into line with the current business."]],
      ["Important information is difficult to find", ["If services are buried, the navigation is unclear or page content is difficult to scan, visitors may struggle to understand what the business offers.", "Review the page hierarchy before changing colours or adding animation. Structural problems are best solved through content organization and navigation."]],
      ["The mobile experience feels neglected", ["A page that looks acceptable on a large monitor may become difficult to read or use on a phone. Check text size, content order, spacing, buttons, image crops and forms.", "Wix offers responsive editing options, but each important page still needs to be reviewed at relevant screen widths."]],
      ["The enquiry journey is unclear", ["Look at how visitors move from learning about a service to taking action. If contact details are hidden, forms ask for too much information or calls to action are inconsistent, the journey may need attention.", "A redesign should improve the experience rather than promise a particular conversion result."]],
    ],
  },
  "mobile-layouts-responsive-design": {
    category: "RESPONSIVE DESIGN",
    title: "Why Mobile Layouts Need More Than Shrinking a Desktop Page",
    intro: "Responsive design is not simply a smaller version of a desktop layout. It is a deliberate arrangement of content and interactions for different screen sizes.",
    sections: [
      ["Reconsider content order", ["On mobile, a two-column layout often becomes a vertical sequence. The order of those sections matters: visitors should encounter the most important information first.", "Move supporting details lower when necessary, while preserving the context needed to understand the offer."]],
      ["Protect readability", ["Headings, body text and labels need comfortable sizes and line lengths. Large desktop headlines may need to scale down to avoid awkward wrapping.", "Keep enough space around buttons and form controls so they can be used reliably with touch input."]],
      ["Review images and navigation", ["An image crop that works on desktop may cut off the important subject on mobile. Check portrait framing, product images and background images at the actual mobile layout.", "A mobile menu should be easy to open, close and navigate. Its controls should remain visible and understandable."]],
      ["Test complete journeys", ["Do not test only the homepage. Review service pages, contact forms, portfolio examples and any booking or store experience on a phone.", "Responsive testing should include the interactions visitors use, not just the way each page looks."]],
    ],
  },
  "when-wix-cms-makes-sense": {
    category: "WIX CMS",
    title: "When Does Wix CMS Make Sense for a Website?",
    intro: "Wix CMS can be useful when a website needs to present many pieces of content that share a consistent structure. It is not necessary for every website.",
    sections: [
      ["Look for repeatable content", ["A project gallery, team directory, resource library or structured list of services may contain many entries with similar fields. A CMS collection can store that information in one organized place.", "If a site has only a few pages that rarely change, ordinary page editing may be simpler. Choose the structure that matches the real content requirement."]],
      ["Plan fields before templates", ["A collection should reflect the information each entry needs: title, summary, category, image, descriptive details and any relevant links.", "Decide which fields are required and how the content will be maintained before connecting the collection to a dynamic page."]],
      ["Use dynamic pages with care", ["Dynamic item pages can use one template to present multiple collection entries. Dynamic list pages can group and link to those items.", "The template still needs good content design. If the fields are unclear or incomplete, the result may look repetitive or confusing."]],
      ["Make editing understandable", ["A CMS solution should make updates easier for the people who will maintain the website. Use clear field names, explain the editing workflow and test the collection with representative content."]],
    ],
  },
  "on-page-seo-wix-website": {
    category: "SEO FOUNDATIONS",
    title: "The On-Page SEO Details to Check on a Wix Website",
    intro: "On-page SEO foundations help organize a website's information for visitors and search engines. They are important hygiene, not a guarantee of rankings.",
    sections: [
      ["Write distinct page titles and descriptions", ["Each important page should have a title that describes its subject and a useful meta description that summarizes the page. Avoid copying the same metadata across every URL.", "Keep titles and descriptions natural. They should describe the real page content rather than repeat keywords without context."]],
      ["Use headings to organize the page", ["A clear heading hierarchy helps readers understand the sections on a page. Use one primary page heading and supporting headings that describe the content beneath them.", "Headings should reflect the page structure, not be selected only for visual size. Styling can be adjusted independently."]],
      ["Describe meaningful images", ["Relevant images should have descriptive alternative text when they convey information. Decorative images can use empty alt text so they do not add unnecessary noise for assistive technology.", "Use descriptive file names and appropriately sized images as part of a broader media and performance review."]],
      ["Connect related pages", ["Useful internal links help visitors discover relevant information and help search engines understand relationships between pages. Use clear link text and check that each destination works.", "Review URLs, canonical settings and indexing options in the context of the actual site configuration. Do not assume a setting is correct without checking it."]],
    ],
  },
  "wix-landing-page-one-offer": {
    category: "LANDING PAGES",
    title: "How to Structure a Wix Landing Page Around One Clear Offer",
    intro: "A landing page works best when its content supports one understandable offer and one primary visitor action.",
    sections: [
      ["Explain the offer immediately", ["The opening section should tell visitors what is being offered and who it is for. A specific headline is more useful than a generic slogan.", "Supporting text can explain the value and set expectations without making claims the business cannot substantiate."]],
      ["Answer the important questions", ["Visitors may need to understand the benefits, process, eligibility, pricing approach or what happens after they enquire. Put those details in an order that supports the decision.", "Use genuine proof and accurate information. Do not invent reviews, statistics, guarantees or customer logos to fill space."]],
      ["Use a clear call to action", ["The primary action should be specific: request a consultation, enquire about a service or book an appointment. Repeating the same action in relevant places can make the journey easier to follow.", "Avoid competing calls to action that send visitors in several directions unless the business genuinely offers different paths."]],
      ["Review the mobile experience", ["Check whether the headline wraps cleanly, the offer remains understandable and the form or button is easy to use on a phone.", "A landing page should be tested from its first section through to the final action."]],
    ],
  },
  "responsive-layouts-wix-studio": {
    category: "WIX STUDIO",
    title: "Planning Responsive Layouts in Wix Studio",
    intro: "Responsive layouts are strongest when they are planned around content, hierarchy and the way a page should behave at different screen sizes.",
    sections: [
      ["Start with the content", ["Before choosing a complex layout, understand the text, imagery and interactions the page must contain. The content determines what needs prominence and what can be grouped.", "A visual system should support the content, not force the content into awkward shapes."]],
      ["Define layout priorities", ["Decide which elements sit together on larger screens and how they should reorganize on smaller ones. Columns, gaps, widths and alignment all influence readability.", "Avoid relying on absolute positioning for content that needs to adapt naturally across devices."]],
      ["Create consistent patterns", ["Reusable section patterns can help maintain alignment and spacing across several pages. Repetition should improve consistency without making every page feel identical.", "Document important type sizes, spacing decisions and responsive behaviours so future updates remain coherent."]],
      ["Test actual breakpoints", ["Inspect the design at desktop, tablet and mobile widths. Look for overflow, awkward wrapping, image crops and touch controls that are too small.", "Responsive design is an ongoing review process. A layout that works at one preset width may still need adjustments between common device sizes."]],
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = articles[slug];
  if (!item) return { title: "Wix Website Design Insights" };
  return {
    title: item.title,
    description: item.intro,
  };
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = articles[slug];
  if (!item) notFound();

  return (
    <main>
      <PageIntro eyebrow={"INSIGHTS / " + item.category} title={item.title} body={item.intro} />
      <section className="content-section">
        <article className="container insight-article">
          {item.sections.map(([heading, paragraphs], index) => <section key={heading}><Eyebrow>0{index + 1} / {item.category}</Eyebrow><h2>{heading}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <p style={{ marginTop: 40 }}><Link className="text-link" href="/insights">← BACK TO WIX INSIGHTS</Link></p>
        </article>
      </section>
      <CTA title="Want to improve your Wix website?" body="Let's discuss your website goals and the practical changes that may help." />
    </main>
  );
}