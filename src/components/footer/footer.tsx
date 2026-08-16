import Image from "next/image";
import styles from "./footer.module.scss";
import { WHATSAPP_LINK } from "../../utils/utils";
import logo from "../../assets/img/skinlabLogo.svg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image src={logo} alt="logo" loading="eager" className={styles.logo} />
        <a
          className={styles.link}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Booking
        </a>
      </div>
    </footer>
  );
};
export default Footer;
