"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./faq.module.scss";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import type { FaqClosing, FaqItem } from "../../interfaces/skinLab.types";

type Props = {
  items: FaqItem[];
  closing: FaqClosing;
};

/* One open item at a time, everything closed on first render. The panels stay
   in the DOM so the row can animate; `inert` keeps the closed ones out of the
   tab order and out of the accessibility tree. */
const Faq: React.FC<Props> = ({ items, closing }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();
  const headingId = `${baseId}-heading`;

  return (
    <section id="faq" className={styles.section} aria-labelledby={headingId}>
      <h3 id={headingId} className={styles.ruleLabel}>
        Frequently asked questions
      </h3>
      <p className={styles.standfirst}>
        Everything you need to know before you begin.
      </p>

      <div className={styles.card}>
        <ul className={styles.list}>
          {items.map((item, index) => {
            const open = openIndex === index;
            const buttonId = `${baseId}-question-${index}`;
            const panelId = `${baseId}-answer-${index}`;

            return (
              <li key={item.question} className={styles.item}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.question}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <ChevronDown
                    className={
                      open
                        ? `${styles.chevron} ${styles.chevronOpen}`
                        : styles.chevron
                    }
                    size={18}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!open}
                  className={
                    open ? `${styles.panel} ${styles.panelOpen}` : styles.panel
                  }
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Closes the section: a plain card, not an accordion row — it never
          opens or closes, and it reuses the site's existing booking CTA. */}
      <div className={`${styles.card} ${styles.closingCard}`}>
        <h4 className={styles.closingTitle}>{closing.title}</h4>
        <p className={styles.closingText}>{closing.text}</p>
        <div className={styles.closingCta}>
          <BookConsultationButton />
        </div>
      </div>
    </section>
  );
};

export default Faq;
