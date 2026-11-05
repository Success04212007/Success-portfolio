import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro, CTA, Eyebrow } from "@/components/sections";

type CaseStudyData = {
  title: string;
  category: string;
  summary: string;
  imageAlts: string[];
  images: string[];
  audience: string;
  direction: string;
  focus: string[];
};

const cases: Record<string, CaseStudyData> = {
  "aurelis-global-music": {
    title: "AURELIS",
    category: "Global music & culture website concept",
    summary: "An international music platform concept built around the meeting point of music, artists and global culture.",
    audience: "A music and culture platform seeking a distinctive digital identity for an international audience of listeners, artists and culture enthusiasts.",
    direction: "The concept gives the platform a clear editorial and visual identity. Its presentation is intended to make the music and cultural focus immediately recognizable, while organizing content so visitors can discover the platform and explore what it represents.",
    focus: ["Global music and culture brand positioning", "Clear content and editorial hierarchy", "Artist- and music-led visual presentation", "A coherent navigation and discovery experience"],
    images: ["/images/portfolio/aurelis-global-music.png"],
    imageAlts: ["AURELIS global music and culture website design concept"],
  },
  "crocodile-leather-atelier": {
    title: "Crocodile Leather Shoes",
    category: "Luxury exotic-leather footwear website concept",
    summary: "A luxury footwear website concept for an exotic-leather atelier, with the product and craftsmanship at the centre of the experience.",
    audience: "A specialist footwear atelier looking to present its exotic-leather shoes and craftsmanship through a refined online brand experience.",
    direction: "The concept is intended to feel considered and premium, allowing product imagery, material details and the character of the atelier to lead. A clear collection structure helps visitors understand the range and explore the footwear.",
    focus: ["Luxury footwear brand presentation", "Product and collection discovery", "Craftsmanship and material storytelling", "A clear route for product enquiries"],
    images: ["/images/portfolio/crocodile-leather-atelier.png"],
    imageAlts: ["Luxury crocodile leather footwear atelier website design concept"],
  },
  "global-frontline-newsletter": {
    title: "Global Frontline",
    category: "Newsletter & editorial publication website concept",
    summary: "An editorial newsletter and publication concept focused on presenting information in a clear, readable and organized digital format.",
    audience: "A publication seeking a recognizable editorial identity and a more structured way for readers to explore its newsletter and content.",
    direction: "The concept is built around legibility, content hierarchy and a clear publication identity. The intended experience gives headlines and editorial content a defined structure, helping readers navigate from the publication overview into individual stories and updates.",
    focus: ["Editorial identity and publication positioning", "Readable headline and content hierarchy", "Organized newsletter and story presentation", "A clear reader subscription pathway"],
    images: ["/images/portfolio/global-frontline-newsletter.png"],
    imageAlts: ["Global Frontline editorial newsletter and publication website design concept"],
  },
  "arch-studio": {
    title: "ARCH STUDIO",
    category: "Architecture & design website concept",
    summary: "A minimal architecture and design website direction for a studio whose work needs a confident, image-led digital presentation.",
    audience: "Architecture and design studios looking for a refined way to introduce their practice and present selected work.",
    direction: "The concept puts the studio identity and visual work at the centre of the experience. A restrained layout gives architectural imagery room to communicate scale, material and atmosphere, while clear page structure helps visitors understand the practice.",
    focus: ["Studio positioning and introduction", "Image-led project presentation", "Clear movement between information and selected work", "A direct route for project enquiries"],
    images: ["/images/portfolio/arch-studio.png"],
    imageAlts: ["ARCH STUDIO minimal architecture and design website concept"],
  },
  "aurelia-estates": {
    title: "Aurelia Estates",
    category: "International property website concept",
    summary: "A refined property brand direction focused on presenting an international real-estate offering with clarity and confidence.",
    audience: "A property business that needs to introduce its brand and make property information easier to explore.",
    direction: "The visual direction is designed to feel curated and considered. Brand presentation, property imagery and information hierarchy work together to give prospective buyers a clear starting point for exploring the offer.",
    focus: ["Property brand introduction", "Organized property discovery", "Clear presentation of property information", "An enquiry path for interested visitors"],
    images: ["/images/portfolio/aurelia-estates.png"],
    imageAlts: ["Aurelia Estates international property website concept"],
  },
  "bamboo-kitchen": {
    title: "Bamboo Kitchen",
    category: "Restaurant website concept",
    summary: "A neighbourhood kitchen website direction that brings the restaurant identity and visitor essentials into one welcoming digital experience.",
    audience: "A neighbourhood restaurant that wants its online presence to reflect the character of its food and hospitality.",
    direction: "The concept gives the restaurant a clear identity and uses food and atmosphere imagery to support the experience. Essential visitor information should be easy to find, with a natural route from first impression to menu and visit planning.",
    focus: ["Restaurant identity and atmosphere", "Food-led visual presentation", "Clear menu and visitor information", "Convenient location and contact details"],
    images: ["/images/portfolio/bamboo-kitchen.png"],
    imageAlts: ["Bamboo Kitchen neighborhood restaurant website concept"],
  },
  "black-ink-studio": {
    title: "Black Ink Studio",
    category: "Custom tattoo studio website concept",
    summary: "A distinctive website direction for a custom tattoo studio, with emphasis on studio identity and creative work.",
    audience: "A tattoo studio that needs a professional way to introduce its artists, visual style and consultation process.",
    direction: "The concept is built around a recognisable studio presence. A portfolio-led structure gives prospective clients a way to understand the studio's creative direction before taking the next step.",
    focus: ["Studio identity and positioning", "Tattoo artwork and portfolio presentation", "Useful service and consultation information", "A clear contact or booking route"],
    images: ["/images/portfolio/black-ink-tattoo-studio.png"],
    imageAlts: ["Black Ink Studio custom tattoo website concept"],
  },
  "atelier-lumen": {
    title: "Atelier Lumen",
    category: "Fine art photography website concept",
    summary: "An editorial website direction for a fine art photography studio, allowing its visual work to lead the experience.",
    audience: "A photography studio or independent photographer who needs an elegant online portfolio.",
    direction: "The concept treats photography as the primary communication tool. The surrounding layout stays considered and quiet so the work remains the focus, while studio information and navigation provide a clear frame for the collection.",
    focus: ["Image-first portfolio presentation", "Editorial visual hierarchy", "Clear portfolio navigation", "Studio introduction and enquiry information"],
    images: ["/images/portfolio/atelier-lumen-photography.png"],
    imageAlts: ["Atelier Lumen fine art photography website concept"],
  },
  "kisslanding-pilot-shop": {
    title: "Kisslanding Pilot Shop",
    category: "Aviation retail website concept",
    summary: "A specialist aviation retail website direction for pilot supplies and aviation gifts, with an emphasis on product discovery.",
    audience: "A specialist retailer serving pilots and aviation enthusiasts.",
    direction: "The concept brings the retail identity and product offer together in a structured storefront presentation. Clear categories and consistent product information help visitors understand the range and move through the shop.",
    focus: ["Specialist retail brand presentation", "Product and category discovery", "Consistent product information", "A clear shopping journey"],
    images: ["/images/portfolio/kisslanding-pilot-shop.png"],
    imageAlts: ["Kisslanding Pilot Shop Bangkok aviation gifts and pilot supplies website concept"],
  },
  "seoul-glow": {
    title: "Seoul Glow Skin Studio",
    category: "Beauty & wellness website concept",
    summary: "A calm digital brand direction for a Korean skin care clinic, balancing a polished appearance with clear service communication.",
    audience: "A skin care clinic that wants its online presence to communicate its identity and services clearly.",
    direction: "The concept uses a composed beauty and wellness visual language. Service information, imagery and page hierarchy are intended to make the clinic easier to understand and give visitors a clear next step.",
    focus: ["Clinic identity and service positioning", "Clear treatment and service information", "A calm, consistent visual system", "A clear route for appointment enquiries"],
    images: ["/images/portfolio/seoul-glow-skin-studio.png"],
    imageAlts: ["Seoul Glow Skin Studio Korean skin care clinic website concept"],
  },
  "pct-car-detailing": {
    title: "PCT Car Wash & Detailing",
    category: "Automotive website concept",
    summary: "An automotive care website direction for a car wash and detailing business, designed to make its service offer easier to understand.",
    audience: "A car wash and detailing business that needs a professional online presentation of its services.",
    direction: "The concept places the service business at the centre of the experience. A clear hierarchy can help visitors compare the available care options and find the right way to contact the business.",
    focus: ["Automotive service brand presentation", "Clear service and package information", "Strong supporting vehicle imagery", "A direct enquiry or booking path"],
    images: ["/images/portfolio/pct-car-wash-detailing.png"],
    imageAlts: ["PCT Car Wash and Detailing website concept"],
  },
  "procore-gaming": {
    title: "ProCore Gaming",
    category: "Gaming retail website concept",
    summary: "A gaming gear storefront direction for a brand focused on precision equipment and products for competitive players.",
    audience: "A gaming gear retailer that needs clear product presentation and a recognisable brand experience.",
    direction: "The concept uses a confident product-led approach. Category structure and consistent product presentation are intended to help visitors browse specialist gear without losing the identity of the brand.",
    focus: ["Gaming brand identity", "Product category hierarchy", "Clear product presentation", "A consistent shopping journey"],
    images: ["/images/portfolio/procore-gaming.png"],
    imageAlts: ["ProCore Gaming precision gear website concept"],
  },
  "voren": {
    title: "VORÉN",
    category: "Fashion & lifestyle website concept",
    summary: "A modern fashion website direction built around a distinctive brand mood and product-led presentation.",
    audience: "A fashion and lifestyle brand seeking a polished digital storefront and coherent identity.",
    direction: "The concept gives the brand a refined visual frame and allows product imagery to carry the presentation. A considered collection structure supports browsing while keeping the experience cohesive.",
    focus: ["Fashion brand identity", "Editorial product presentation", "Collection and category structure", "Clear shopping navigation"],
    images: ["/images/portfolio/voren-modern-fashion.png"],
    imageAlts: ["VORÉN modern elegance and timeless style fashion website concept"],
  },
  "vulcan-chainworks": {
    title: "Vulcan Chainworks",
    category: "Industrial website concept",
    summary: "A professional industrial brand direction for lifting and heavy-duty chain products, supported by two supplied visual explorations.",
    audience: "An industrial supplier that needs to present specialist products and technical information in a clear, credible way.",
    direction: "The concept is centred on clarity and confidence. A structured presentation can help technical buyers understand the product range, locate relevant information and identify the appropriate next step for an enquiry.",
    focus: ["Industrial brand positioning", "Organized product and range presentation", "Accessible technical information", "A direct route for product enquiries"],
    images: [
      "/images/portfolio/vulcan-chainworks-industrial.png",
      "/images/portfolio/vulcan-chainworks-industrial-detail.png",
    ],
    imageAlts: [
      "Vulcan Chainworks industrial lifting and heavy-duty chains website concept",
      "Additional Vulcan Chainworks industrial website visual supplied for the portfolio",
    ],
  },
  "max-taipei-balayage": {
    title: "Max — Taipei Balayage",
    category: "Hair colour specialist website concept",
    summary: "A specialist hairstylist website direction centred on balayage, dimensional colour and a polished presentation of hair services.",
    audience: "A Taipei hairstylist specialising in balayage and dimensional hair colour.",
    direction: "The concept gives specialist colour work a strong visual role while making the stylist's service focus clear. The intended journey helps visitors understand the offering and find a natural next step for consultation.",
    focus: ["Balayage and dimensional colour positioning", "Hair colour imagery and portfolio presentation", "Clear service information", "Consultation and appointment enquiry path"],
    images: ["/images/portfolio/max-taipei-balayage.png"],
    imageAlts: ["Max Taipei hairstylist balayage and dimensional hair colour website concept"],
  },
};

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases[slug];
  return item
    ? { title: item.title + " | Website Design Concept", description: item.summary }
    : { title: "Wix Portfolio Concept" };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases[slug];
  if (!item) notFound();

  return (
    <main>
      <PageIntro eyebrow={"PORTFOLIO / " + item.category.toUpperCase()} title={item.title} body={item.summary} />
      <section className="content-section case-study-visual-section">
        <div className="container">
          <div className="case-study-image-grid">
            {item.images.map((src, index) => (
              <figure className="case-study-image-card" key={src}>
                <div className="case-study-image-frame">
                  <Image
                    src={src}
                    alt={item.imageAlts[index]}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 800px) 94vw, 82vw"
                    className="case-study-project-image"
                  />
                </div>
                {item.images.length > 1 && <figcaption>{index === 0 ? "PRIMARY VISUAL" : "ADDITIONAL VISUAL"}</figcaption>}
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section case-study-details-section">
        <div className="container">
          <div className="notice">
            INDEPENDENT DESIGN CONCEPT — This page presents a website design concept using the supplied visual asset. It is not a claim of a commissioned client engagement, a confirmed live Wix launch or measured business results.
          </div>
          <div className="content-grid case-study-content-grid" style={{ marginTop: 45 }}>
            <div>
              <Eyebrow>PROJECT CONTEXT</Eyebrow>
              <h2>Who this experience is intended to serve.</h2>
              <p>{item.audience}</p>
            </div>
            <div>
              <Eyebrow>VISUAL &amp; EXPERIENCE DIRECTION</Eyebrow>
              <h2>What the design is intended to communicate.</h2>
              <p>{item.direction}</p>
              <h3>Design considerations</h3>
              <ul>{item.focus.map((value) => <li key={value}>{value}</li>)}</ul>
            </div>
          </div>
          <p style={{ marginTop: 40 }}><Link className="text-link" href="/portfolio">← BACK TO WIX PORTFOLIO</Link></p>
        </div>
      </section>
      <CTA title="Have a similar Wix website project in mind?" body="Let's discuss your business, the experience your visitors need and the right structure for your Wix website." />
    </main>
  );
}
