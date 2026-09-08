import styles from "./hero.module.scss";
import { InfoOutlinedIcon } from "../icons/icons";
import Button from "../button/Button";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import ClientJourneyMini from "../clientJourneyMini/clientJourneyMini";

const HeroSection: React.FC = () => {
  return (
    <main id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Science. Care. Results.</p>

          <h1 className={styles.title}>
            Medical Skin Treatments for{" "}
            <span className={styles.accent}>
              Hyperpigmentation, Acne Scarring{" "}
              <span className={styles.amp}>&</span> Uneven Skin Texture
            </span>
          </h1>

          <p className={styles.lead}>
            Evidence based aesthetic treatments delivered by a registered nurse,
            designed to restore skin health and confidence.
          </p>

          <div className={styles.actions}>
            <Button href="#about" variant="secondary" icon={<InfoOutlinedIcon />}>
              Learn more
            </Button>
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
