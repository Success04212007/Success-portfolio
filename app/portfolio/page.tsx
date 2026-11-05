import { PageIntro, CTA } from "@/components/sections";
import PortfolioGallery from "./portfolio-gallery";

export const metadata = {
  title: "Wix Website Design Portfolio",
  description: "Explore Success Daniel's Wix-focused website design portfolio, featuring 12 independent visual concepts across business, hospitality, beauty, automotive, retail and creative industries.",
};

export default function Portfolio() {
  return (
    <main>
      <PageIntro eyebrow="SELECTED WEBSITE DESIGN CONCEPTS" title="Real visual work. Clear thinking behind every experience." body="Explore 12 independent website design concepts using the actual visuals supplied for this portfolio. Each case study explains its intended audience and design direction. The site remains focused on Wix website design; these visuals are presented as concepts, not as proof of commissioned client projects or completed Wix launches." />
      <PortfolioGallery />
      <CTA title="Have a similar Wix website project in mind?" body="Tell me about your business, the pages you need and the experience you want to create." />
    </main>
  );
}