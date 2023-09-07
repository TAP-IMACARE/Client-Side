import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import homeIcon from "../../assets/mobile-home.svg";
import docIcon from "../../assets/mobile-findADoctor.svg";
import servicesIcon from "../../assets/mobile-services.svg";
import adminIcon from "../../assets/mobile-admin.svg";
import loginIcon from "../../assets/mobile-login.svg";
import signupIcon from "../../assets/mobile-signup.svg";
import { useEffect, useState } from "react";

const MobileHeader = ({ hamburger }) => {
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
          className={
            hamburger === false ? "mobile-nav" : "mobile-nav activated"
          }
        >
          <ul>
            <NavLink to={"/"}>
              <li className="active">
                <img src={homeIcon} alt="icon" />
                <span>Home</span>
              </li>
            </NavLink>
            <Link to={"#"}>
              <li>
                <img src={docIcon} alt="icon" />
                <span>Find a Doctor</span>
              </li>
            </Link>
            <Link to={"#services"} reloadDocument>
              <li>
                <img src={servicesIcon} alt="icon" />
                <span>Services</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li>
                <img src={adminIcon} alt="icon" />
                <span>Admin</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li>
                <img src={loginIcon} alt="icon" />
                <span>Log in</span>
              </li>
            </Link>
            <Link to={"#"}>
              <li>
                <img src={signupIcon} alt="icon" />
                <span>Sign Up</span>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
