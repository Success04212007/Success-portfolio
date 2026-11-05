"use client";

import { useState } from "react";

type FAQ = [string, string];

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        const panelId = "faq-answer-" + index;
        return (
          <article className={isOpen ? "faq-item is-open" : "faq-item"} key={question}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                <span>{question}</span><span aria-hidden="true" className="faq-toggle">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            {isOpen ? <div id={panelId} className="faq-answer"><p>{answer}</p></div> : null}
          </article>
        );
      })}
    </div>
  );
}