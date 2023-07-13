import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <img src="./logo.png" alt="logo" />

      <nav>
        <div className="nav-container"></div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
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
    </header>
  );
};

export default Header;
