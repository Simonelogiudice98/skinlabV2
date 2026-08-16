import Image from "next/image";
import "./header.scss";
import logo from "../../assets/img/skinlabLogo.svg";
import BookConsultationButton from "../../components/bookConsultationButton/BookConsultationButton";

const Header: React.FC = () => {
  return (
    <nav className="nav">
      <div className="navInner">
        {/* Intrinsic width/height come from the static import (273.5 x 101.7);
            the inline style reproduces the source sizing exactly. `eager`
            matches the plain <img> the source used, which was never lazy. */}
        <Image
          src={logo}
          alt="logo"
          loading="eager"
          style={{ height: "60px", width: "auto", display: "block" }}
        />
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#concerns">Skin Concerns</a>
          <a href="#treatments">Treatments</a>
          <BookConsultationButton />
        </div>
      </div>
    </nav>
  );
};
export default Header;
