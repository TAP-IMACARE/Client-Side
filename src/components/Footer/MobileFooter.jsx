import "./Footer.css";
import mobileArrowUp from "../../assets/mobile-arrowUp.svg";
import mobileArrowDown from "../../assets/mobile-arrowDown.svg";
import { useState } from "react";

const listData = [
  {
    header: "Company",
    item1: "About Us",
    item2: "Services",
    item3: "Privacy Policy",
    item4: "Company Policy",
    item5: "Contact Us",
  },
  {
    header: "Resources",
    item1: "Doctor Consultation",
    item2: "Careers",
    item3: "News & Updates",
  },
  {
    header: "Help",
    item1: "Help Centre",
    item2: "Support",
    item3: "FAQs",
  },
];

const MobileFooter = ({
  footerLogo,
  mailLogo,
  locationLogo,
  facebookLogo,
  twitterLogo,
  instagramLogo,
  linkednLogo,
}) => {
  const [showList, setShowList] = useState(0);
  const show = (id) => {
    setShowList(id);
  };
  return (
    <div className="mobile-footer">
      <div className="mobileFooter-top">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" />

          <p>Together we can embark on a journey towards wellness</p>
        </div>

        <div className="mobileContact-address">
          <div className="mail">
            <img src={mailLogo} alt="logo" />

            <p>info@imacare.com</p>
          </div>

          <div className="address">
            <img src={locationLogo} alt="logo" />

            <p>Abuja, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="mobileFooter-mid">
        {listData.map((list, index) => (
          <div key={index}>
            <hr className="mobileFooter-hr" size="1" color="#E9E9E9" />
            <div className="company">
              <div
                className={
                  showList === index
                    ? "mobileList-active-header"
                    : "mobileList-inactive-header"
                }
                onClick={() => show(index)}
              >
                <h4>{list.header}</h4>
                <img
                  src={showList === index ? mobileArrowUp : mobileArrowDown}
                  alt="arrow"
                />
              </div>
              <div>
                <ul
                  value={index}
                  className={
                    showList === index ? "mobileFooter-mid-list" : "inactive"
                  }
                >
                  <li>{list.item1}</li>
                  <li>{list.item2}</li>
                  <li>{list.item3}</li>
                  <li>{list.item4}</li>
                  <li>{list.item5}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mobileFooter-bottom">
        <div className="horizontal-line"></div>

        <div className="socials">
          <img src={facebookLogo} alt="facebook" />
          <img src={twitterLogo} alt="twitter" />
          <img src={instagramLogo} alt="instagram" />
          <img src={linkednLogo} alt="linkedn" />
        </div>
        <div className="mobileFooter-allRights">
          <p>© IMACARE 2023. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
