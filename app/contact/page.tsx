"use client";

import { useState } from "react";
import { PageIntro, Eyebrow } from "@/components/sections";

export default function Contact() {
  const [previewed, setPreviewed] = useState(false);

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
          <div className="contact-panel">
            {previewed ? (
              <>
                <h2>Enquiry preview prepared.</h2>
                <p>Your browser completed the form preview, but nothing has been emailed or stored. The site owner must connect a verified destination and secure form handling before this can receive live enquiries.</p>
                <button className="button button-light" onClick={() => setPreviewed(false)}>EDIT MY PREVIEW</button>
              </>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setPreviewed(true); }}>
                <Eyebrow>PROJECT ENQUIRY DETAILS</Eyebrow>
                <label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label>
                <label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
                <label>Business or brand name<input name="business" autoComplete="organization" placeholder="Your business name" /></label>
                <label>Current website URL<input name="website" type="url" placeholder="https://" /></label>
                <label>What type of Wix project do you need?
                  <select name="projectType" defaultValue="" required>
                    <option value="" disabled>Select a project type</option>
                    <option>New Wix business website</option>
                    <option>Wix website redesign</option>
                    <option>Wix Studio website</option>
                    <option>Wix landing page</option>
                    <option>Wix e-commerce website</option>
                    <option>Wix CMS / dynamic website</option>
                    <option>Wix functionality and integrations</option>
                    <option>Wix website optimization / SEO foundations</option>
                    <option>Other Wix-related project</option>
                  </select>
                </label>
                <label>Current website status
                  <select name="websiteStatus" defaultValue="">
                    <option value="">Choose one</option>
                    <option>I do not have a website yet</option>
                    <option>I already have a Wix website</option>
                    <option>I have another website that needs to be moved or rebuilt in Wix</option>
                    <option>I am planning a new website</option>
                  </select>
                </label>
                <label>Project budget
                  <select name="budget" defaultValue="">
                    <option value="">Not yet decided</option>
                    <option>Under $500</option>
                    <option>$500–$1,000</option>
                    <option>$1,000–$2,500</option>
                    <option>$2,500–$5,000</option>
                    <option>$5,000+</option>
                  </select>
                </label>
                <label>Project timeline
                  <select name="timeline" defaultValue="">
                    <option value="">Not yet decided</option>
                    <option>As soon as possible</option>
                    <option>Within two weeks</option>
                    <option>Within one month</option>
                    <option>Within two to three months</option>
                    <option>Flexible</option>
                  </select>
                </label>
                <label>Tell me about your project<textarea required name="message" rows={6} placeholder="What does your business do? What pages, features or improvements do you need? What would you like the website to accomplish?" /></label>
                <button className="button button-light" type="submit">PREVIEW ENQUIRY — NOT SENT</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}