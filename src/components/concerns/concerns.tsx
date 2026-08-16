import type { Concern } from "../../interfaces/skinLab.types";
import styles from "./concerns.module.scss";
import SectionTitle from "../sectionTitle/sectionTitle";

import { Sun, Layers, Shield, Sparkles } from "lucide-react";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";

type Props = {
  concerns: Concern[];
};

const iconByTitle: Record<string, React.ReactNode> = {
  Hyperpigmentation: <Sun size={20} strokeWidth={1.6} />,
  "Acne Scarring": <Layers size={20} strokeWidth={1.6} />,
  Rosacea: <Shield size={20} strokeWidth={1.6} />,
};

const ConcernsSection: React.FC<Props> = ({ concerns }) => {
  return (
    <section id="concerns" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionTitle
            overline="Skin concerns"
            title="Skin concerns we treat"
          />
          <BookConsultationButton />
        </div>

        <div className={styles.grid}>
          {concerns.map((c) => (
            <article key={c.title} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon} aria-hidden="true">
                  {iconByTitle[c.title] ?? (
                    <Sparkles size={20} strokeWidth={1.6} />
                  )}
                </span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </div>

              <p className={styles.cardText}>{c.description}</p>

              <div className={styles.divider} />

              <div className={styles.label}>Recommended treatments</div>
              <ul className={styles.list}>
                {c.treatments.map((t) => (
                  <li key={t} className={styles.listItem}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcernsSection;
