import React from "react";
import styles from "./BookConsultationButton.module.scss";
import { WHATSAPP_LINK } from "../../utils/utils";

type Props = {
  /** `onDark` is for the Roman Coffee band, where Sage loses contrast. */
  tone?: "default" | "onDark";
};

const BookConsultationButton: React.FC<Props> = ({ tone = "default" }) => {
  return (
    <a
      className={
        tone === "onDark" ? `${styles.button} ${styles.onDark}` : styles.button
      }
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Book your dermatology consultation via WhatsApp"
    >
      Book Your Consultation
    </a>
  );
};

export default BookConsultationButton;
