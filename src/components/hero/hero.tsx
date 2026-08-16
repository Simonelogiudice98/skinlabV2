import styles from "./hero.module.scss";
import { InfoOutlinedIcon } from "../icons/icons";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import ClientJourneyMini from "../clientJourneyMini/clientJourneyMini";

const HeroSection: React.FC = () => {
  return (
    <main id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Medically led • Results driven • Personalised to you
          </p>

          <h1 className={styles.title}>
            Medical Skin Treatments for{" "}
            <span className={styles.accent}>
              Hyperpigmentation, Acne Scarring & Rosacea
            </span>
          </h1>

          <p className={styles.lead}>
            Evidence based aesthetic treatments delivered by a registered nurse,
            designed to restore skin health and confidence.
          </p>

          <div className={styles.actions}>
            <a className={styles.ghost} href="#about">
              <InfoOutlinedIcon className={styles.ghostIcon} />
              <span>Learn more</span>
            </a>
            <BookConsultationButton />
          </div>
        </div>

        <div className={styles.journey}>
          <ClientJourneyMini />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
