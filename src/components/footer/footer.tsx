import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import styles from "./footer.module.scss";
import { WHATSAPP_LINK } from "../../utils/utils";
import Button from "../button/Button";
import Logo from "../logo/logo";
import { TikTokIcon } from "../icons/icons";
import { connectLinks, exploreLinks } from "../data/skinLab.data";
import type { ConnectId } from "../../interfaces/skinLab.types";
import nmc from "../../assets/images/footer/nmc.jpeg";
import dermaInstitute from "../../assets/images/footer/derma-institute.jpeg";

/* Decorative: the label beside each one already carries the meaning, so the
   marks are hidden from assistive tech and inherit the link's colour. */
const connectIcons: Record<ConnectId, React.ReactNode> = {
  instagram: <Instagram size={16} strokeWidth={1.6} aria-hidden="true" />,
  tiktok: <TikTokIcon className={styles.connectIcon} />,
  email: <Mail size={16} strokeWidth={1.6} aria-hidden="true" />,
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* --------------------------------------------------------- anchor */}
      <div className={styles.anchor}>
        <div className={styles.mast}>
          <Logo className={styles.logo} />
          <p className={styles.statement}>Science. Care. Results.</p>
        </div>

        <div className={styles.anchorAside}>
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
      </div>

      {/* ----------------------------------------------------------- info */}
      <div className={styles.info}>
        <div className={styles.column}>
          <h2 className={styles.columnLabel}>Visit</h2>
          <p className={styles.columnText}>Hampstead, London</p>
          <p className={styles.columnMeta}>By appointment</p>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnLabel}>Clinic lead</h2>
          <p className={styles.columnText}>Nella Balemama</p>
          <p className={styles.columnMeta}>Registered Nurse</p>
        </div>

        <nav className={styles.column} aria-label="Footer">
          <h2 className={styles.columnLabel}>Explore</h2>
          <div className={styles.columnList}>
            {exploreLinks.map((link) => (
              <a key={link.href} className={styles.link} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.columnLabel}>Connect</h2>
          <div className={styles.columnList}>
            {connectLinks.map((link) => (
              <a
                key={link.id}
                className={`${styles.link} ${styles.connectLink}`}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className={styles.connectMark} aria-hidden="true">
                  {connectIcons[link.id]}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- credentials */}
      <div className={styles.credentials}>
        <div className={styles.credential}>
          <h2 className={styles.columnLabel}>Regulated by</h2>
          <Image
            src={nmc}
            alt="Nursing &amp; Midwifery Council"
            className={styles.mark}
          />
        </div>

        <div className={styles.credential}>
          <h2 className={styles.columnLabel}>Trained at</h2>
          <Image
            src={dermaInstitute}
            alt="Derma Institute"
            className={styles.mark}
          />
        </div>
      </div>

      {/* ---------------------------------------------------------- legal */}
      <div className={styles.legal}>
        <p className={styles.legalText}>
          &copy; {new Date().getFullYear()} The Medical Skin Lab
        </p>
        <p className={styles.legalText}>
          Treatments are subject to consultation and suitability assessment.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
