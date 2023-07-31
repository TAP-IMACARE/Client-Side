import "./Footer.css";
import footerLogo from "../../assets/footer-logo.png";
import mailLogo from "../../assets/mail-logo.svg";
import locationLogo from "../../assets/location-logo.svg";
import facebookLogo from "../../assets/facebook-icon.svg";
import twitterLogo from "../../assets/twitter-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import linkednLogo from "../../assets/linkedn-logo.svg";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <MobileFooter
        footerLogo={footerLogo}
        mailLogo={mailLogo}
        locationLogo={locationLogo}
        facebookLogo={facebookLogo}
        twitterLogo={twitterLogo}
        instagramLogo={instagramLogo}
        linkednLogo={linkednLogo}
      />
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={footerLogo} alt="logo" />

            <p>Together we can embark on a journey towards wellness</p>
          </div>

          <ul className="company">
            <h4>Company</h4>

            <li>About Us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Company Policy</li>
            <li>Contact Us</li>
          </ul>

          <ul className="resources">
            <h4>Resources</h4>

            <li>Doctor Consultation</li>
            <li>Careers</li>
            <li>News & Updates</li>
          </ul>

          <ul className="help">
            <h4>Help</h4>

            <li>Help Centre</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div className="contact-address">
            <div className="mail">
              <img src={mailLogo} alt="logo" />

              <p>info@imacare.com</p>
            </div>

            <div className="address">
              <img src={locationLogo} alt="logo" />

              <p>Abuja, Nigeria</p>
            </div>
          </div>

          <div className="horizontal-line"></div>

          <div className="footer-allRights">
            <p>© IMACARE 2023. All Rights Reserved</p>

            <div className="socials">
              <img src={facebookLogo} alt="facebook" />
              <img src={twitterLogo} alt="twitter" />
              <img src={instagramLogo} alt="instagram" />
              <img src={linkednLogo} alt="linkedn" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
