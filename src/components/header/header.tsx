import styles from "./header.module.scss";
import Logo from "../logo/logo";
import BookConsultationButton from "../bookConsultationButton/BookConsultationButton";
import MobileNav from "../mobileNav/mobileNav";
import { headerNavLinks } from "../data/skinLab.data";

const Header: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Logo className={styles.logo} />

        <div className={styles.links}>
          {headerNavLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
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
