import "./Header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import harmburger from "../../assets/hamburger-menu.svg";
import MobileHeader from "./MobileHeader";
const Header = () => {
  const [hamburger, setHamburgr] = useState(false);
  const toggleHamburger = () => {
    setHamburgr(true);
    console.log("clicked");
  };
  return (
    <>
      <MobileHeader hamburger={hamburger} />
      <header className="header">
        <div className="header-container">
          <img src="./logo.png" alt="logo" />
          <div className="hamburger-menu" onClick={toggleHamburger}>
            <img src={harmburger} alt="menu" />
          </div>
          <nav>
            <div className="nav-container"></div>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <Link to={"#"}>Find a Doctor</Link>
              </li>
              <li>
                <Link to={"#services"} reloadDocument>
                  Services
                </Link>
              </li>
              <li>
                <Link to={"#"}>Admin</Link>
              </li>
            </ul>

            <div className="links">
              <Link to={"#"} id="login">
                Log in
              </Link>
              <Link to={"#"} id="signup">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
