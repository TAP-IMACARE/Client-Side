import "./Navbar.css";
import searchIcon from "../../assets/dashboard assets/search-icon.svg";
import notificationIcon from "../../assets/dashboard assets/notification-icon.svg";
import userIcon from "../../assets/dashboard assets/Tosin Wale.svg";

const Navbar = () => {
  return (
    <div className="dashboard-Navbar">
      <div className="dashboard-Navbar-container">
        <form className="navbar-search">
          <img src={searchIcon} alt="search" />
          <input type="text" placeholder="Search" />
        </form>

        <div className="navbar-right">
          <img
            className="notification-icon"
            src={notificationIcon}
            alt="logo"
          />

          <div className="profile">
            <span>Tosin Wale</span>

            <img src={userIcon} alt="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
