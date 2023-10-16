import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import imacareLogo from "../../assets/LandingPage assets/imacare-logo.png";
import harmburger from "../../assets/hamburger-menu.svg";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(true);
  };

  return (
    <>
      <MobileHeader hamburger={hamburger} setHamburger={setHamburger} />
      <header className="header">
        <div className="header-container">
          <LinkRoll
            activeclass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={imacareLogo} alt="logo" />
          </LinkRoll>
          <div className="hamburger-menu" onClick={toggleHamburger}>
            <img src={harmburger} alt="menu" />
          </div>
          <nav className="nav">
            <div className="nav-container"></div>
            <ul>
              <li>
                <LinkRoll
                  activeclass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </LinkRoll>
              </li>
              <li>
                <LinkRoll
                  activeclass="active"
                  to="product"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  <span>Product</span>
                </LinkRoll>
              </li>
              <li>
                <LinkRoll
                  activeclass="active"
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={35}
                  duration={500}
                >
                  <span>Pricing</span>
                </LinkRoll>
              </li>
              <li>
                <LinkRoll
                  activeclass="active"
                  to={"whyIMACARE"}
                  spy={true}
                  smooth={true}
                  offset={35}
                  duration={500}
                >
                  Why IMACARE
                </LinkRoll>
              </li>
            </ul>

            <div className="links">
              <Link to={"/login"} id="login">
                Log in
              </Link>
              <Link to={"#"} id="getStarted">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
