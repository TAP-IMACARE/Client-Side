import "./Footer.css";
import footerLogo from "../../assets/footer-logo.png";
import mailLogo from "../../assets/mail-logo.svg";
import locationLogo from "../../assets/location-logo.svg";
import facebookLogo from "../../assets/facebook-icon.svg";
import twitterLogo from "../../assets/twitter-logo.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import linkednLogo from "../../assets/linkedn-logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" />

          <p>Together we can embark on a journey towards wellness</p>
        </div>

        <div className="company">
          <h4>Company</h4>

          <p>About Us</p>
          <p>Services</p>
          <p>Privacy Policy</p>
          <p>Company Policy</p>
          <p>Contact Us</p>
        </div>

        <div className="resources">
          <h4>Resources</h4>

          <p>Doctor Consultation</p>
          <p>Careers</p>
          <p>News & Updates</p>
        </div>

        <div className="help">
          <h4>Help</h4>

          <p>Help Centre</p>
          <p>Support</p>
          <p>FAQs</p>
        </div>
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
  );
};

export default Footer;
