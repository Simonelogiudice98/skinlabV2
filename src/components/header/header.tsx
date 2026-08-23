import styles from "./header.module.scss";
import Logo from "../logo/logo";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import MobileNav from "../mobileNav/mobileNav";

const Header: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Logo className={styles.logo} />

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
          <span className={styles.cta}>
            <BookConsultationButton />
          </span>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
export default Header;
