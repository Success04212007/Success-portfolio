import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro, CTA, Eyebrow } from "@/components/sections";

const cases: Record<string, { title: string; category: string; summary: string; focus: string[]; direction: string; features: string[] }> = {
  "considered-digital-home": {
    title: "A considered digital home",
    category: "Wix business website concept",
    summary: "An independent Wix business website design direction built around clear positioning, useful service information and a considered enquiry journey.",
    focus: ["Clarify the business offer at a glance", "Organize services into an understandable hierarchy", "Create consistent page rhythm and responsive layouts", "Give visitors a clear route to make an enquiry"],
    direction: "The design direction uses restrained typography, generous spacing and a calm visual system. The page structure prioritizes the visitor's questions: what the business does, who it serves, what makes the offer relevant and how to get in touch.",
    features: ["Homepage and service-page structure", "Clear calls to action", "Responsive layout planning", "Contact and enquiry journey"],
  },
  "focused-storefront": {
    title: "A more focused storefront",
    category: "Wix e-commerce design concept",
    summary: "An independent exploration of product discovery, collection hierarchy and a consistent shopping experience with Wix Stores as the intended platform.",
    focus: ["Make product categories easier to explore", "Give product imagery and descriptions room to work", "Keep navigation and shopping actions clear", "Maintain a coherent visual experience across store pages"],
    direction: "The concept focuses on a clean product-led layout, consistent collection presentation and clear shopping cues. It is a design exploration, not a live store or a report of sales performance.",
    features: ["Store homepage and collection hierarchy", "Product detail-page structure", "Clear shopping actions", "Responsive product browsing"],
  },
  "clearer-service-journey": {
    title: "A clearer service journey",
    category: "Wix landing page concept",
    summary: "An independent Wix landing page direction focused on one offer, clear supporting information and a purposeful next action.",
    focus: ["Establish the offer and intended audience", "Structure the page around key visitor questions", "Use clear section transitions and visual hierarchy", "Make the primary action easy to find"],
    direction: "The concept uses a focused message, concise supporting sections and a deliberate CTA sequence. It demonstrates a possible design approach rather than a completed client campaign.",
    features: ["Focused headline and offer presentation", "Benefits and supporting content", "CTA and enquiry placement", "Responsive page composition"],
  },
};

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases[slug];
  return item ? { title: item.title + " | Wix Design Concept", description: item.summary } : { title: "Wix Portfolio Concept" };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases[slug];
  if (!item) notFound();

  return (
    <main>
      <PageIntro eyebrow={"PORTFOLIO / " + item.category.toUpperCase()} title={item.title} body={item.summary} />
      <section className="content-section">
        <div className="container">
          <div className="notice">INDEPENDENT DESIGN CONCEPT — This page documents an illustrative Wix design direction. It is not a client engagement, published client website, verified Wix launch or measured business result.</div>
          <div className="content-grid" style={{ marginTop: 45 }}>
            <div><Eyebrow>DESIGN OBJECTIVES</Eyebrow><h2>What this concept is exploring.</h2><ul>{item.focus.map((value) => <li key={value}>{value}</li>)}</ul></div>
            <div><Eyebrow>CREATIVE DIRECTION</Eyebrow><h2>How the experience comes together.</h2><p>{item.direction}</p><h3>Proposed Wix experience</h3><ul>{item.features.map((value) => <li key={value}>{value}</li>)}</ul></div>
          </div>
          <p style={{ marginTop: 40 }}><Link className="text-link" href="/portfolio">← BACK TO WIX PORTFOLIO</Link></p>
        </div>
      </section>
      <CTA title="Have a similar Wix website project in mind?" body="Let's discuss the business goal, page structure and features your project needs." />
    </main>
  );
}