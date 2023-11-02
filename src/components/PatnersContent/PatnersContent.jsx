import logo1 from "../../assets/landingPageAssets/REDDINGTON-LOGO.svg";
import logo2 from "../../assets/landingPageAssets/sacred heart.svg";
import logo3 from "../../assets/landingPageAssets/EVERCARE_LOGO.svg";
import logo4 from "../../assets/landingPageAssets/Kelina-Logo-1.svg";
import logo5 from "../../assets/landingPageAssets/limi hospital.svg";
import "./PatnersContent.css";

const PatnersContent = () => {
  return (
    <div className="patnersContent-container">
      <div className="patnersContent-header">
        <h4>Trusted by over 1000+ hospitals across Africa</h4>
      </div>
      <div className="patners-logo-container">
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
        <img src={logo5} alt="logo" />
      </div>
    </div>
  );
};

export default PatnersContent;
