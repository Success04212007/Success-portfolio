"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const filters = [
  "ALL PROJECTS",
  "BUSINESS & PROPERTY",
  "HOSPITALITY",
  "CREATIVE & SERVICE",
  "CREATIVE PORTFOLIOS",
  "BEAUTY & WELLNESS",
  "AUTOMOTIVE",
  "E-COMMERCE",
  "INDUSTRIAL & TECHNOLOGY",
  "HAIR & SALON",
];

const projects = [
  {
    slug: "arch-studio",
    number: "01",
    title: "ARCH STUDIO",
    category: "BUSINESS & PROPERTY",
    type: "Architecture & design",
    image: "/images/portfolio/arch-studio.png",
    alt: "ARCH STUDIO minimal architecture and design website concept",
    description: "A minimal architecture and design website direction built around a strong studio identity and image-led project presentation.",
  },
  {
    slug: "aurelia-estates",
    number: "02",
    title: "Aurelia Estates",
    category: "BUSINESS & PROPERTY",
    type: "International property",
    image: "/images/portfolio/aurelia-estates.png",
    alt: "Aurelia Estates international property website concept",
    description: "A considered property brand concept exploring refined presentation, clear property discovery and an enquiry-led visitor journey.",
  },
  {
    slug: "bamboo-kitchen",
    number: "03",
    title: "Bamboo Kitchen",
    category: "HOSPITALITY",
    type: "Restaurant website",
    image: "/images/portfolio/bamboo-kitchen.png",
    alt: "Bamboo Kitchen neighborhood restaurant website concept",
    description: "A neighborhood kitchen website direction focused on restaurant identity, appetite-led presentation and easy access to essential information.",
  },
  {
    slug: "black-ink-studio",
    number: "04",
    title: "Black Ink Studio",
    category: "CREATIVE & SERVICE",
    type: "Tattoo studio",
    image: "/images/portfolio/black-ink-tattoo-studio.png",
    alt: "Black Ink Studio custom tattoo website concept",
    description: "A custom tattoo studio concept with a distinctive visual identity and a portfolio-led way to introduce the studio and its work.",
  },
  {
    slug: "atelier-lumen",
    number: "05",
    title: "Atelier Lumen",
    category: "CREATIVE PORTFOLIOS",
    type: "Fine art photography",
    image: "/images/portfolio/atelier-lumen-photography.png",
    alt: "Atelier Lumen fine art photography website concept",
    description: "A fine art photography concept that gives the imagery room to lead while keeping the studio presentation considered and editorial.",
  },
  {
    slug: "kisslanding-pilot-shop",
    number: "06",
    title: "Kisslanding Pilot Shop",
    category: "E-COMMERCE",
    type: "Aviation gifts & pilot supplies",
    image: "/images/portfolio/kisslanding-pilot-shop.png",
    alt: "Kisslanding Pilot Shop Bangkok aviation gifts and pilot supplies website concept",
    description: "A specialist aviation retail concept designed around a recognizable identity and clear product discovery.",
  },
  {
    slug: "seoul-glow",
    number: "07",
    title: "Seoul Glow Skin Studio",
    category: "BEAUTY & WELLNESS",
    type: "Skin care clinic",
    image: "/images/portfolio/seoul-glow-skin-studio.png",
    alt: "Seoul Glow Skin Studio Korean skin care clinic website concept",
    description: "A skin care clinic concept balancing a calm beauty identity with clear presentation of the studio and its services.",
  },
  {
    slug: "pct-car-detailing",
    number: "08",
    title: "PCT Car Wash & Detailing",
    category: "AUTOMOTIVE",
    type: "Automotive care",
    image: "/images/portfolio/pct-car-wash-detailing.png",
    alt: "PCT Car Wash and Detailing website concept",
    description: "An automotive care website direction that puts the service brand first and makes the offer easier for visitors to understand.",
  },
  {
    slug: "procore-gaming",
    number: "09",
    title: "ProCore Gaming",
    category: "E-COMMERCE",
    type: "Gaming gear",
    image: "/images/portfolio/procore-gaming.png",
    alt: "ProCore Gaming precision gear website concept",
    description: "A gaming gear storefront concept with a confident product identity and a clear structure for browsing specialist equipment.",
  },
  {
    slug: "voren",
    number: "10",
    title: "VORÉN",
    category: "E-COMMERCE",
    type: "Fashion & lifestyle",
    image: "/images/portfolio/voren-modern-fashion.png",
    alt: "VORÉN modern elegance fashion website concept",
    description: "A modern fashion concept built around a distinctive brand mood and product-led visual presentation.",
  },
  {
    slug: "vulcan-chainworks",
    number: "11",
    title: "Vulcan Chainworks",
    category: "INDUSTRIAL & TECHNOLOGY",
    type: "Industrial equipment",
    image: "/images/portfolio/vulcan-chainworks-industrial.png",
    alt: "Vulcan Chainworks industrial lifting and heavy-duty chains website concept",
    description: "An industrial brand concept for presenting lifting and heavy-duty chain products with a structured, professional visual system.",
  },
  {
    slug: "max-taipei-balayage",
    number: "12",
    title: "Max — Taipei Balayage",
    category: "HAIR & SALON",
    type: "Hair colour specialist",
    image: "/images/portfolio/max-taipei-balayage.png",
    alt: "Max Taipei hairstylist balayage and dimensional hair colour website concept",
    description: "A hairstylist website concept centred on balayage, dimensional colour and a more polished presentation of specialist hair services.",
  },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState("ALL PROJECTS");
  const visible = active === "ALL PROJECTS" ? projects : projects.filter((project) => project.category === active);

  return (
    <section className="content-section portfolio-gallery-section">
      <div className="container">
        <div className="portfolio-filters" aria-label="Filter portfolio projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={active === filter ? "portfolio-filter is-active" : "portfolio-filter"}
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="portfolio-results-count" aria-live="polite">
          SHOWING {visible.length.toString().padStart(2, "0")} OF {projects.length.toString().padStart(2, "0")} DESIGN CONCEPTS
        </div>
        {visible.length > 0 ? (
          <div className="portfolio-concept-grid">
            {visible.map((project) => (
              <article className="portfolio-concept-card" key={project.slug}>
                <Link className="portfolio-concept-art" href={"/portfolio/" + project.slug} aria-label={"Open case study: " + project.title}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 800px) 92vw, (max-width: 1100px) 45vw, 30vw"
                    className="portfolio-project-image"
                  />
                  <span className="portfolio-image-number">{project.number} / 12</span>
                  <span className="concept-label">INDEPENDENT DESIGN CONCEPT</span>
                </Link>
                <div className="portfolio-concept-copy">
                  <span>{project.number} / {project.category}</span>
                  <h2>{project.title}</h2>
                  <p className="portfolio-project-type">{project.type}</p>
                  <p>{project.description}</p>
                  <small>CLASSIFICATION: INDEPENDENT DESIGN CONCEPT</small>
                  <Link className="text-link" href={"/portfolio/" + project.slug}>VIEW CASE STUDY ↗</Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="portfolio-empty-state" role="status">
            <span>NO PROJECT PUBLISHED IN THIS CATEGORY YET</span>
            <p>This category will be updated when a relevant Wix project or clearly labelled design concept is ready to present.</p>
            <button type="button" className="text-link" onClick={() => setActive("ALL PROJECTS")}>VIEW ALL AVAILABLE CONCEPTS ↗</button>
          </div>
        )}
        <p className="notice portfolio-authenticity-note">
          Portfolio authenticity: these visuals are presented as independent website design concepts. They are not represented as commissioned client engagements, confirmed live Wix launches or measured business results.
        </p>
      </div>
    </section>
  );
}
