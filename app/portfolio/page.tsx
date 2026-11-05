import { PageIntro, CTA } from "@/components/sections";
import PortfolioGallery from "./portfolio-gallery";

export const metadata = {
  title: "Wix Website Design Portfolio",
  description: "Explore Success Daniel's Wix website design concepts and case studies, including business websites, service experiences, e-commerce concepts and landing pages.",
};

export default function Portfolio() {
  return (
    <main>
      <PageIntro eyebrow="SELECTED WIX WEBSITE PROJECTS" title="Exploring the work and thinking behind each digital experience." body="A collection of Wix-focused independent design concepts and demonstrations showing my approach to visual presentation, website structure, user experience and responsive layouts. Project classifications are stated clearly so concepts are not confused with commissioned client work." />
      <PortfolioGallery />
      <CTA title="Have a similar Wix website project in mind?" body="Tell me about your business, the pages you need and the experience you want to create." />
    </main>
  );
}