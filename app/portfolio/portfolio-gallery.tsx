"use client";

import { useState } from "react";
import Link from "next/link";

const filters = [
  "ALL PROJECTS",
  "BUSINESS WEBSITES",
  "BEAUTY & WELLNESS",
  "AUTOMOTIVE",
  "RESTAURANTS",
  "SERVICE BUSINESSES",
  "E-COMMERCE",
  "LANDING PAGES",
  "REDESIGN CONCEPTS",
];

const projects = [
  {
    slug: "considered-digital-home",
    number: "01",
    title: "A considered digital home",
    category: "BUSINESS WEBSITES",
    type: "Wix business website concept",
    description: "A professional business website direction built around clear positioning, organized service information and a straightforward enquiry journey.",
  },
  {
    slug: "focused-storefront",
    number: "02",
    title: "A more focused storefront",
    category: "E-COMMERCE",
    type: "Wix e-commerce design concept",
    description: "An independent exploration of product discovery, category hierarchy and a consistent shopping experience using Wix Stores as the intended platform.",
  },
  {
    slug: "clearer-service-journey",
    number: "03",
    title: "A clearer service journey",
    category: "LANDING PAGES",
    type: "Wix landing page concept",
    description: "A focused page direction for a service offer, with clear messaging, supporting information and a purposeful next action.",
  },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState("ALL PROJECTS");
  const visible = active === "ALL PROJECTS" ? projects : projects.filter((project) => project.category === active);

  return (
    <section className="content-section portfolio-gallery-section">
      <div className="container">
        <div className="portfolio-filters" aria-label="Filter portfolio projects">
          {filters.map((filter) => <button key={filter} type="button" className={active === filter ? "portfolio-filter is-active" : "portfolio-filter"} aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
        </div>
        {visible.length > 0 ? (
          <div className="portfolio-concept-grid">
            {visible.map((project) => <article className="portfolio-concept-card" key={project.slug}>
              <Link className="portfolio-concept-art" href={"/portfolio/" + project.slug} aria-label={"Open case study: " + project.title}>
                <div className="mock-browser">
                  <div className="browser-bar">● ● ● <span>WIX DESIGN CONCEPT / {project.number}</span></div>
                  <div className="mock-content"><small>{project.category}</small><b>{project.title}</b><span>{project.type}</span><i className="mock-line" /></div>
                </div>
                <span className="concept-label">INDEPENDENT DESIGN CONCEPT</span>
              </Link>
              <div className="portfolio-concept-copy">
                <span>{project.number} / {project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <small>CLASSIFICATION: INDEPENDENT DESIGN CONCEPT</small>
                <Link className="text-link" href={"/portfolio/" + project.slug}>VIEW CASE STUDY ↗</Link>
              </div>
            </article>)}
          </div>
        ) : (
          <div className="portfolio-empty-state" role="status">
            <span>NO PROJECT PUBLISHED IN THIS CATEGORY YET</span>
            <p>This category will be updated when a relevant Wix project or clearly labelled design concept is ready to present.</p>
            <button type="button" className="text-link" onClick={() => setActive("ALL PROJECTS")}>VIEW ALL AVAILABLE CONCEPTS ↗</button>
          </div>
        )}
        <p className="notice" style={{ marginTop: 30 }}>Portfolio authenticity: the currently published examples are independent design concepts. They are not commissioned client projects, verified client launches or measured business results.</p>
      </div>
    </section>
  );
}