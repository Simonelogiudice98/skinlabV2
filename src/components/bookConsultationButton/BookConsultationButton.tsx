import React from "react";
import Button, { type ButtonTone, type ButtonVariant } from "../button/Button";
import { CalendarMonthOutlinedIcon } from "../icons/icons";
import { WHATSAPP_LINK } from "../../utils/utils";

type Props = {
  /** Filled for the page's leading action, outline for secondary positions. */
  variant?: ButtonVariant;
  /** `onDark` is for the Roman Coffee band, where Sage loses contrast. */
  tone?: ButtonTone;
};

const BookConsultationButton: React.FC<Props> = ({
  variant = "primary",
  tone = "default",
}) => {
  return (
    <Button
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Book your dermatology consultation via WhatsApp"
      variant={variant}
      tone={tone}
      icon={<CalendarMonthOutlinedIcon />}
    >
      Book Your Consultation
    </Button>
  );
};

export default BookConsultationButton;
