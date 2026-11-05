import Link from "next/link";
import { PageIntro, CTA } from "@/components/sections";

const items = [
  ["Wix Business Website Design", "Plan and build a professional Wix website that communicates your business, services and value.", "wix-business-website-design"],
  ["Wix Website Redesign", "Transform an existing Wix website with clearer structure, stronger presentation and responsive layouts.", "wix-website-redesign"],
  ["Wix Studio Website Design", "Create considered responsive compositions using Wix Studio when it is right for the project.", "wix-studio-website-design"],
  ["Wix Landing Page Design", "Develop a focused page for a service, campaign, offer or lead-generation objective.", "wix-landing-page-design"],
  ["Wix E-commerce Website Design", "Organize products and create a clear shopping experience using Wix Stores and supported features.", "wix-ecommerce-website-design"],
  ["Wix CMS and Dynamic Websites", "Structure repeatable content with Wix CMS collections and dynamic pages where appropriate.", "wix-cms-dynamic-websites"],
  ["Wix Functionality and Integrations", "Implement practical Wix forms, booking, newsletter, member and supported third-party features.", "wix-functionality-integrations"],
  ["Wix Website Optimization and SEO Foundations", "Improve page structure, metadata, mobile usability and practical on-page SEO foundations.", "wix-website-optimization-seo-foundations"],
];

export const metadata = {
  title: "Wix Website Design Services",
  description: "Explore Success Daniel's Wix website design services, including business websites, redesigns, Wix Studio, landing pages, e-commerce, CMS, integrations and SEO foundations.",
};

export default function Services() {
  return (
    <main>
      <PageIntro eyebrow="WIX WEBSITE DESIGN SERVICES" title="Professional Wix website design and development, shaped around your business." body="I help businesses create, improve and organize professional websites within the Wix ecosystem. Each project is approached with thoughtful design, clear structure, responsive implementation and practical functionality." />
      <section className="content-section">
        <div className="container service-grid">
          {items.map(([title, description, slug], index) => <Link className="service-card" href={"/services/" + slug} key={slug}><span>0{index + 1} / WIX SERVICE</span><h3>{title}</h3><p>{description}</p><b>EXPLORE SERVICE ↗</b></Link>)}
        </div>
      </section>
      <section className="section-pad">
        <div className="container content-grid">
          <div><h2>Built around the requirements of your project.</h2><p className="notice">The exact deliverables depend on the pages, content, features and integrations agreed before work begins. I only include Wix functionality that is supported and within the implementation scope.</p></div>
          <div><h2>Not sure which service fits?</h2><p>Share what your business does, whether you already have a Wix website and what you want the website to help you achieve. We can discuss the most suitable direction.</p><Link className="button button-light" href="/contact">DISCUSS YOUR WIX PROJECT ↗</Link></div>
        </div>
      </section>
      <CTA title="Let's find the right Wix website solution for your business." body="Start with a clear conversation about your goals, requirements and the experience you want your website to provide." />
    </main>
  );
}