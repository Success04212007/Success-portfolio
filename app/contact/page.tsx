import { PageIntro, Eyebrow } from "@/components/sections";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact Success Daniel | Wix Website Projects",
  description: "Discuss your Wix website design, redesign, landing page or development requirements with Success Daniel. Start a professional project enquiry.",
};

export default function Contact() {
  return (
    <main>
      <PageIntro eyebrow="CONTACT / START A WIX PROJECT" title="Tell me what you want your Wix website to achieve." body="Whether you need a new business website, a complete redesign, a landing page or improvements to an existing Wix website, the first step is understanding your objectives and requirements." />
      <section className="content-section">
        <div className="container content-grid">
          <div>
            <Eyebrow>LET'S DISCUSS YOUR WIX PROJECT</Eyebrow>
            <h2>Start with the business goal. We can work through the website details together.</h2>
            <p>Share a little about your business, the website you have now (if any), the features you need and what you want the website to accomplish. The more context you provide, the more useful the conversation can be.</p>
            <div className="service-detail"><h3>WIX WEBSITE DESIGN &amp; DEVELOPMENT</h3><p>New websites, redesigns, Wix Studio layouts, landing pages, e-commerce, CMS, functionality and SEO foundations.</p></div>
            <p className="notice">Contact form delivery is not connected yet because a verified business email or submission destination has not been supplied. This form is currently a local preview only. Do not use it to send confidential information; submitting it here does not deliver an enquiry.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}