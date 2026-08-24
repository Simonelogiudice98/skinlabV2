"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./mobileNav.module.scss";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import { headerNavLinks } from "../data/skinLab.data";

const PANEL_ID = "mobile-nav-panel";

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    /* The drawer covers the page, so the page behind it must not scroll with
       it — otherwise closing returns the reader somewhere else. */
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={() => setOpen(true)}
      >
        <Menu size={22} strokeWidth={1.6} aria-hidden="true" />
      </button>

      {open ? (
        <>
          <button
            type="button"
            className={styles.scrim}
            aria-label="Close navigation menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />

          <div
            className={styles.panel}
            id={PANEL_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className={styles.panelHead}>
              <button
                type="button"
                className={styles.trigger}
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
              >
                <X size={22} strokeWidth={1.6} aria-hidden="true" />
              </button>
            </div>

            {headerNavLinks.map((link) => (
              <a
                key={link.href}
                className={styles.link}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className={styles.cta}>
              <BookConsultationButton variant="secondary" />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MobileNav;
