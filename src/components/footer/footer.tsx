import Image from "next/image";
import './footer.scss';
import { WHATSAPP_LINK } from '../../utils/utils';
import logo from "../../assets/img/skinlabLogo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        {/* NOTE: "container" is a global class name here, but .container only
            exists inside commonStyles.module.scss (hashed), so it matches no
            rule. Ported as-is: the source footer is not width-constrained. */}
        <div className="container">
          <div className="footerInner">
            <div className="footerBrand">
              <Image src={logo} alt="logo" loading="eager" style={{height: "40px", width: "auto", display: "block"}} />
            </div>
            <a className="footerLink" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp Booking
            </a>
          </div>
        </div>
      </footer>
  )
}
export default Footer
