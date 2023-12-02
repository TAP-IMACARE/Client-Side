import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import { useEffect, useState } from "react";

import "./Header.css";
import homeIcon from "../../assets/mobile-home.svg";
import docIcon from "../../assets/mobile-findADoctor.svg";
import servicesIcon from "../../assets/mobile-services.svg";
import adminIcon from "../../assets/mobile-admin.svg";
import loginIcon from "../../assets/mobile-login.svg";
import signupIcon from "../../assets/mobile-signup.svg";

// eslint-disable-next-line react/prop-types
const MobileHeader = ({ hamburger, setHamburger }) => {
  const [screenWidth, setScreenWidth] = useState([window.innerWidth]);

  useEffect(() => {
    const changescreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    // prettier-ignore
    window.addEventListener('resize', changescreenWidth);
  }, []);

  return (
    <>
      {screenWidth < 900 && hamburger && (
        <div
          className={hamburger && " mobile-nav-container"}
          onClick={() => setHamburger(false)}
        >
          <div
            className={
              hamburger === true ? "mobile-nav mobile-nav-width" : "mobile-nav"

              // hamburger && "mobile-nav activated"
            }
          >
            {console.log(hamburger)}
            <ul>
              <LinkRoll
                activeclass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="active">
                  <img src={homeIcon} alt="icon" />
                  <span>Home</span>
                </li>
              </LinkRoll>

              <LinkRoll
                activeclass="active"
                to="product"
                spy={true}
                smooth={true}
                offset={-35}
                duration={500}
              >
                <li>
                  <img src={docIcon} alt="icon" />
                  <span>Product</span>
                </li>
              </LinkRoll>

              <LinkRoll
                activeclass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={35}
                duration={500}
              >
                <li>
                  <img src={servicesIcon} alt="icon" />
                  <span>Pricing</span>
                </li>
              </LinkRoll>
              <LinkRoll
                activeclass="active"
                to={"whyIMACARE"}
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                <li>
                  <img src={adminIcon} alt="icon" />
                  <span>Why IMACARE</span>
                </li>
              </LinkRoll>
              <Link to={"/login"}>
                <li>
                  <img src={loginIcon} alt="icon" />
                  <span>Log in</span>
                </li>
              </Link>
              <Link to={"/login"}>
                <li>
                  <img src={signupIcon} alt="icon" />
                  <span>Get Started</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
