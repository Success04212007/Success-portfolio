import { PageIntro, CTA } from "@/components/sections";

const faqs = [
  ["What do you specialize in?", "I specialize in Wix website design and development, creating modern, responsive and professionally structured websites for businesses, entrepreneurs, service providers and personal brands."],
  ["Do you design Wix websites from scratch?", "Yes. A new Wix website can be planned and built around the business identity, requirements, audience and objectives."],
  ["Can you redesign my existing Wix website?", "Yes. A redesign can address visual presentation, content hierarchy, navigation, responsive layouts and the overall visitor journey."],
  ["Do you work with Wix Studio?", "Wix Studio can be used where its responsive layout and design capabilities are suitable for the project. The right Wix environment is selected based on the requirements."],
  ["Can you build an online store with Wix?", "Wix Stores and supported e-commerce features can be used to organize products and create a shopping experience. Payment and shipping options depend on the client's location, account eligibility and the providers supported by Wix."],
  ["Will my Wix website work on mobile?", "Responsive design is part of the process. Pages and key interactions are reviewed and adjusted for desktop, tablet and mobile screens."],
  ["Can I edit my website after delivery?", "Wix provides website editing and management capabilities. The handover can include guidance on managing relevant content and website elements."],
  ["Can you add booking or enquiry functionality?", "Suitable Wix features or compatible integrations can be considered after understanding the workflow. Compatibility, account requirements and any third-party costs are checked before they are promised."],
  ["Can you help with SEO?", "I can implement Wix SEO foundations and on-page improvements such as metadata, headings, image alt text, internal links and content structure. Search rankings and traffic cannot be guaranteed."],
  ["How much does a Wix website cost?", "Pricing depends on the number of pages, design complexity, functionality, integrations, content requirements and project scope. A proposal can be prepared after understanding the requirements."],
  ["How long does a project take?", "The timeline depends on scope, features, content availability, feedback and approvals. A realistic timeline is agreed before development begins."],
  ["Are Wix subscriptions and domain costs included?", "Wix subscriptions, domain registration, paid applications and third-party service costs are identified separately unless they are explicitly included in the written agreement."],
  ["Do you offer ongoing maintenance?", "Future updates and maintenance can be discussed according to the client's requirements and the agreed scope."],
  ["How do we get started?", "Use the contact page to outline your business, current website status and objectives. We can then discuss fit, scope and the next steps."],
];

export const metadata = {
  title: "Wix Website Design FAQs",
  description: "Answers to common questions about Success Daniel's Wix website design, redesign, e-commerce, responsive layouts, SEO foundations and project process.",
};

export default function FAQ() {
  return (
    <main>
      <PageIntro eyebrow="WIX WEBSITE DESIGN / FAQ" title="Questions worth answering before a Wix website project begins." body="Practical answers about Wix design, project scope, functionality, subscriptions and collaboration." />
      <section className="content-section">
        <div className="container">{faqs.map(([question, answer]) => <article className="faq-item" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      </section>
      <CTA title="Have a question about your Wix website?" body="Share your requirements and I will use them to understand what the project needs." />
    </main>
  );
}