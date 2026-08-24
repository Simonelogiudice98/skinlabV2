import Image from "next/image";
import { MessageCircle } from "lucide-react";
import styles from "./footer.module.scss";
import { WHATSAPP_LINK } from "../../utils/utils";
import Button from "../button/Button";
import Logo from "../logo/logo";
import nmc from "../../assets/images/footer/nmc.jpeg";
import dermaInstitute from "../../assets/images/footer/derma-institute.jpeg";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#concerns", label: "Skin Concerns" },
  { href: "#treatments", label: "Treatments" },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* --------------------------------------------------------- anchor */}
      <div className={styles.anchor}>
        <div className={styles.mast}>
          <Logo className={styles.logo} />
          <p className={styles.statement}>
            Healthy skin. Long term results.{" "}
            <span className={styles.statementAccent}>
              Expert clinical care.
            </span>
          </p>
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
          {navLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
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
