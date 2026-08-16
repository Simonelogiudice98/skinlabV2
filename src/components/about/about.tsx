import Image from "next/image";
import styles from "../../assets/commonStyles/commonStyles.module.scss";
import "./about.scss";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import profileImg from "../../assets/images/about/profile.jpg";
import type { PhilosophyPillar } from "../../interfaces/skinLab.types";

type Props = {
  philosophy: PhilosophyPillar[];
};

const AboutSection: React.FC<Props> = ({ philosophy }) => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <SectionTitle
            overline="About The Medical Skin Lab"
            title="Science. Care. Results."
            subtitle="Clinical expertise. Personalised care. Skin focused results."
            uppercase
          />

          <div className="twoCol">
            <div className="aboutCopy">
              <p>
                The Medical Skin Lab is a London based, nurse led skin clinic
                specialising in the treatment of acne scarring,
                hyperpigmentation and uneven skin texture.
              </p>
              <p>
                Founded by a Registered Nurse with a passion for skin health,
                The Medical Skin Lab was created to offer a more considered
                approach to professional skin treatments combining clinical
                expertise, evidence based protocols and personalised care.
              </p>
              <p>
                We believe effective skin treatment isn’t about quick fixes or
                following the same protocol for everyone.
              </p>
              <p>
                It’s about understanding your skin, treating it appropriately
                and adapting as it changes.
              </p>
              <p>
                Every client begins with a comprehensive consultation, allowing
                us to understand your skin concerns, history and goals before
                creating a personalised treatment plan.
              </p>
              <p>
                We use medical grade Mesoestetic products and treatment
                protocols, alongside the Mesoestetic Axion Professional
                Microneedling System, to provide targeted treatments for acne
                scarring, hyperpigmentation and uneven skin texture.
              </p>
            </div>

            <div className="sideCol">
              <div className="aboutMedia">
                {/* `fill` + the existing .aboutMediaImg class (position:absolute;
                    inset:0; object-fit:cover; object-position:50% 46%). The
                    container has a fixed height (470px desktop, 4/3 aspect below
                    980px), so there is no layout shift. Lazy loading matches the
                    source, which passed priority={false}. */}
                <Image
                  src={profileImg}
                  alt="Registered Nurse and founder of The Medical Skin Lab"
                  className="aboutMediaImg"
                  fill
                  sizes="(max-width: 980px) calc(100vw - 96px), 45vw"
                />
              </div>
            </div>
          </div>

          <div className="philosophy">
            <h3 className="philosophyHeadline">Our Philosophy</h3>
            {philosophy.map((pillar) => (
              <div className="philosophyItem" key={pillar.title}>
                <h4 className="philosophyTitle">{pillar.title}</h4>
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
