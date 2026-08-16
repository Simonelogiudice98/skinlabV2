import "./hero.scss";
import Pill from "../pill/pill";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import ClientJourneyMini from "../clientJourneyMini/clientJourneyMini";

const HeroSection: React.FC = () => {
  return (
    <main id="top" className="hero">
      <div className="container">
        <div className="heroGrid">
          <div className="heroCopy">
            <div className="pill">
              <Pill variant="light">
                Medically led • Results driven • Personalised to you
              </Pill>
            </div>

            <h1 className="h1">
              Medical Skin Treatments for{" "}
              <span className="accent">
                Hyperpigmentation, Acne Scarring & Rosacea
              </span>
            </h1>

            <p className="lead">
              Evidence based aesthetic treatments delivered by a registered
              nurse, designed to restore skin health and confidence.
            </p>

            <div className="heroActions">
              <a className="btnGhost" href="#about">
                <InfoOutlinedIcon className="btnIcon" />
                <span>Learn more</span>
              </a>
            </div>

            <div className="heroJourney">
              <BookConsultationButton />
            </div>
            <ClientJourneyMini />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
