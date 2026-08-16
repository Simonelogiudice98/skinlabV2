import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../assets/img/skinlabLogo.svg";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";

const Header: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Intrinsic width/height come from the static import (273.5 x 101.7),
            so the CSS height + auto width keeps the aspect ratio and reserves
            the box before load. `eager` matches the plain <img> the source
            used, which was never lazy. */}
        <Image src={logo} alt="logo" loading="eager" className={styles.logo} />

        <div className={styles.links}>
          <a className={styles.link} href="#about">
            About
          </a>
          <a className={styles.link} href="#concerns">
            Skin Concerns
          </a>
          <a className={styles.link} href="#treatments">
            Treatments
          </a>
          <BookConsultationButton />
        </div>
      </div>
    </nav>
  );
};
export default Header;
