import type { Concern } from "../../interfaces/skinLab.types";
import styles from "../../assets/commonStyles/commonStyles.module.scss";
import "./concerns.scss";
import SectionTitle from "../../components/sectionTitle/sectionTitle";

import { Sun, Layers, Shield, Sparkles } from "lucide-react";
import BookConsultationButton from "../../components/bookConsultationButton/BookConsultationButton";

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
      <div className={styles.container}>
        <div className="concernsHeader">
          <SectionTitle
            overline="Skin concerns"
            title="Skin concerns we treat"
          />
          <BookConsultationButton />
        </div>
        <div className="grid1">
          {concerns.map((c) => (
            <article key={c.title} className={styles.card}>
              <div className="cardHead">
                <div className="iconBadge" aria-hidden="true">
                  {iconByTitle[c.title] ?? (
                    <Sparkles size={20} strokeWidth={1.6} />
                  )}
                </div>
                <h3 className="h3">{c.title}</h3>
              </div>

              <p className="cardText">{c.description}</p>

              <div className="cardDivider" />

              <div className="smallLabel">Recommended treatments</div>
              <ul className="list">
                {c.treatments.map((t) => (
                  <li key={t}>{t}</li>
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
