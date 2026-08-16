import Image from "next/image";
import styles from "./about.module.scss";
import profileImg from "../../assets/images/about/profile.jpg";
import type { PhilosophyPillar } from "../../interfaces/skinLab.types";
import SectionTitle from "../sectionTitle/sectionTitle";

type Props = {
  philosophy: PhilosophyPillar[];
};

const AboutSection: React.FC<Props> = ({ philosophy }) => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          overline="About The Medical Skin Lab"
          title="Science. Care. Results."
          subtitle="Clinical expertise. Personalised care. Skin focused results."
        />

        <div className={styles.body}>
          <div className={styles.copy}>
            <p>
              The Medical Skin Lab is a London based, nurse led skin clinic
              specialising in the treatment of acne scarring, hyperpigmentation
              and uneven skin texture.
            </p>
            <p>
              Founded by a Registered Nurse with a passion for skin health, The
              Medical Skin Lab was created to offer a more considered approach
              to professional skin treatments combining clinical expertise,
              evidence based protocols and personalised care.
            </p>
            <p>
              We believe effective skin treatment isn’t about quick fixes or
              following the same protocol for everyone.
            </p>
            <p>
              It’s about understanding your skin, treating it appropriately and
              adapting as it changes.
            </p>
            <p>
              Every client begins with a comprehensive consultation, allowing us
              to understand your skin concerns, history and goals before
              creating a personalised treatment plan.
            </p>
            <p>
              We use medical grade Mesoestetic products and treatment protocols,
              alongside the Mesoestetic Axion Professional Microneedling System,
              to provide targeted treatments for acne scarring,
              hyperpigmentation and uneven skin texture.
            </p>
          </div>

          {/* `fill` inside a container with a fixed aspect ratio: the box is
              sized before the image loads, so there is no layout shift. */}
          <div className={styles.portrait}>
            <Image
              src={profileImg}
              alt="Registered Nurse and founder of The Medical Skin Lab"
              className={styles.portraitImage}
              fill
              sizes="(max-width: 60rem) calc(100vw - 2.5rem), 36vw"
            />
          </div>
        </div>

        <div className={styles.philosophy}>
          <h3 className={styles.ruleLabel}>Our Philosophy</h3>

          <div className={styles.pillars}>
            {philosophy.map((pillar) => (
              <div className={styles.pillar} key={pillar.title}>
                <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                {pillar.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
