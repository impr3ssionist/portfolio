import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/caleb.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Caleb Ford</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <h5 className="text-light">(with my head in the Cloud)</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} loading="lazy" alt="me" />
        </div>

        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
