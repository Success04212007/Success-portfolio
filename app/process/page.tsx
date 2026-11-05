import Link from "next/link";
import { PageIntro, CTA, Eyebrow } from "@/components/sections";

const steps = [
  ["01", "Discovery", "We begin with a conversation about your business, audience, goals, existing materials and what the Wix website needs to accomplish. The aim is to understand the context before choosing a direction."],
  ["02", "Planning", "The requirements are translated into a practical structure: page list, navigation, content priorities, key visitor journeys and the Wix features the project needs."],
  ["03", "Design", "The visual direction is developed through layout, typography, colour, spacing and imagery. The design should feel aligned with your brand and make the content easy to understand."],
  ["04", "Wix development", "The approved direction is built within Wix. Pages, responsive behaviour, content and the agreed functionality are implemented with the project scope in view."],
  ["05", "Testing and review", "The website is reviewed across desktop, tablet and mobile. Navigation, buttons, forms, links and agreed integrations are checked and refined."],
  ["06", "Launch and handover", "After approval and the required Wix account, domain and subscription arrangements, the website is prepared for publication. Handover covers the practical details needed to manage the site."],
];

export const metadata = {
  title: "My Process | Wix Website Design",
  description: "Explore Success Daniel's six-stage approach to Wix website design, from discovery and planning through development, review and handover.",
};

export default function Process() {
  return (
    <main>
      <PageIntro eyebrow="MY WIX PROJECT PROCESS" title="A structured approach to professional Wix website design." body="A good website project is collaborative. Clear stages help keep decisions focused, expectations aligned and the final experience connected to the business goals." />
      <section className="content-section">
        <div className="container">
          {steps.map(([number, title, description]) => <div className="step" key={number}><span>{number} / STEP</span><div><h3>{title}</h3><p>{description}</p></div></div>)}
          <div className="content-grid" style={{ marginTop: 50 }}>
            <div><Eyebrow>WHAT I MAY NEED FROM YOU</Eyebrow><h2>Good inputs make the process smoother.</h2><ul><li>Business information and accurate service descriptions.</li><li>Logo, brand assets and approved photographs.</li><li>Website copy or the information to develop it.</li><li>Wix account access through the appropriate collaborator permissions.</li><li>Domain and subscription decisions where required.</li><li>Feedback and approvals at agreed review points.</li></ul></div>
            <div><Eyebrow>PROJECT SCOPE</Eyebrow><h2>Clear expectations before development.</h2><p>The agreed page count, features, content responsibilities, third-party costs, timeline and handover are documented before work begins. Wix subscriptions, domains, paid applications and external service fees are separate unless the written agreement says otherwise.</p><p className="notice">The exact sequence and deliverables may vary by project. Timing depends on scope, content readiness, feedback and third-party services.</p></div>
          </div>
          <p style={{ marginTop: 35 }}><Link className="text-link" href="/services">EXPLORE WIX SERVICES ↗</Link></p>
        </div>
      </section>
      <CTA title="Let's give your Wix website a clear direction." body="Tell me about the business, the audience and what you need the website to accomplish. We can define the right scope before the build begins." />
    </main>
  );
}