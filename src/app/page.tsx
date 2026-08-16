import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import styles from "./page.module.scss";
import {
  concerns,
  philosophy,
  treatmentsContent,
} from "../components/data/skinLab.data";
import AboutSection from "../components/about/about";
import ConcernsSection from "../components/concerns/concerns";
import TreatmentsSection from "../components/treatments/treatments";
import HeroSection from "../components/hero/hero";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />

      <HeroSection />

      <AboutSection philosophy={philosophy} />

      <ConcernsSection concerns={concerns} />

      <TreatmentsSection content={treatmentsContent} />

      <Footer />
    </div>
  );
};
export default Home;
