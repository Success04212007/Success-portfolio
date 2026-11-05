import Link from "next/link";
import { PageIntro, CTA } from "@/components/sections";

const posts = [
  ["01 / WIX WEBSITE DESIGN", "What Makes a Wix Business Website Feel Professional?", "Professional presentation comes from clear positioning, a considered page hierarchy, consistent typography, useful imagery and navigation that helps visitors find the information they need."],
  ["02 / WEBSITE STRUCTURE", "Why Your Wix Website Needs Better Navigation", "A useful navigation system helps visitors understand the shape of a business, find relevant information and move between questions and decisions without unnecessary friction."],
  ["03 / WIX REDESIGN", "When Is It Time to Redesign an Existing Wix Website?", "A redesign may be worth considering when the website no longer reflects the business, important information is difficult to find, mobile layouts feel awkward or the enquiry journey is unclear."],
  ["04 / RESPONSIVE DESIGN", "Why Mobile Layouts Need More Than Shrinking a Desktop Page", "Mobile visitors have different space and interaction needs. Content order, readable type, touch targets, image crops and navigation should be considered deliberately."],
  ["05 / WIX CMS", "When Does Wix CMS Make Sense for a Website?", "CMS is useful when content follows a repeatable structure or changes regularly. A collection and dynamic template can make projects, services or resources easier to manage."],
  ["06 / SEO FOUNDATIONS", "The On-Page SEO Details to Check on a Wix Website", "Page titles, descriptions, headings, image alt text, descriptive URLs and internal links help organize the information on a website. They are foundations, not ranking guarantees."],
  ["07 / LANDING PAGES", "How to Structure a Wix Landing Page Around One Clear Offer", "A landing page should help visitors understand the offer, who it is for, why it matters and what to do next. Every section should support that journey."],
  ["08 / WIX STUDIO", "Planning Responsive Layouts in Wix Studio", "Responsive design begins with understanding content and layout priorities at different screen sizes. The design should adapt intentionally rather than simply compress."],
];

export const metadata = {
  title: "Wix Website Design Insights",
  description: "Practical insights from Success Daniel about Wix website design, Wix Studio, website structure, responsive design, CMS and SEO foundations.",
};

export default function Insights() {
  return (
    <main>
      <PageIntro eyebrow="INSIGHTS / WIX WEBSITE DESIGN" title="Practical thinking about better Wix websites." body="Notes and perspectives on website structure, user experience, Wix features, responsive design and the decisions that shape a professional business website." />
      <section className="content-section">
        <div className="container insight-grid">{posts.map(([tag, title, body]) => <article className="insight-card" key={title}><small>{tag}</small><h2>{title}</h2><p>{body}</p><span className="notice">Wix design note / Editorial summary</span></article>)}</div>
      </section>
      <CTA title="Have a Wix website question of your own?" body="Start a conversation about your business, your website and the experience you want to create." />
    </main>
  );
}