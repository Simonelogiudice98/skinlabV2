import React from "react";
import "./BookConsultationButton.scss";
import { WHATSAPP_LINK } from "../../utils/utils";

const BookConsultationButton: React.FC = () => {
  return (
    <a
      className="btn-consultation"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Book your dermatology consultation via WhatsApp"
    >
      <span className="btn-consultation__text">Book Your Consultation</span>
    </a>
  );
};

export default BookConsultationButton;
