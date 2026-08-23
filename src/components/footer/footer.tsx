import Image from "next/image";
import { MessageCircle } from "lucide-react";
import styles from "./footer.module.scss";
import { WHATSAPP_LINK } from "../../utils/utils";
import Logo from "../logo/logo";
import Button from "../button/Button";
import nmc from "../../assets/images/footer/nmc.jpeg";
import dermaInstitute from "../../assets/images/footer/derma-institute.jpeg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Logo className={styles.logo} />
        <Button
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          icon={<MessageCircle size={16} strokeWidth={1.6} />}
        >
          WhatsApp Booking
        </Button>
      </div>

      <div className={styles.details}>
        <div className={styles.column}>
          <div className={styles.columnLabel}>Clinic</div>
          <p className={styles.columnText}>Hampstead, London</p>
        </div>

        <div className={styles.column}>
          <div className={styles.columnLabel}>Clinic Lead</div>
          <p className={styles.columnText}>Nella Balemama</p>
          <p className={styles.columnText}>Registered Nurse</p>
        </div>

        <div className={styles.column}>
          <div className={styles.columnLabel}>Registered with</div>
          <Image
            src={nmc}
            alt="Nursing &amp; Midwifery Council"
            className={styles.mark}
          />
        </div>

        <div className={styles.column}>
          <div className={styles.columnLabel}>Trained at</div>
          <Image
            src={dermaInstitute}
            alt="Derma Institute"
            className={styles.mark}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
