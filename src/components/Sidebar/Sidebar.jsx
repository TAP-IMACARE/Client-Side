import "./Sidebar.css";
import dashboardLogo from "../../assets/dashboard assets/dashboard-logo.svg";

import overviewIcon from "../../assets/dashboard assets/overview-icon.svg";
import appointmentIcon from "../../assets/dashboard assets/appointment-icon.svg";
import prescriptionIcon from "../../assets/dashboard assets/prescription-icon.svg";
import paymentIcon from "../../assets/dashboard assets/payment-icon.svg";
import settingsIcon from "../../assets/dashboard assets/settings-icon.svg";
import chatIcon from "../../assets/dashboard assets/chat-icon.svg";
import profileIcon from "../../assets/dashboard assets/profile-icon.svg";
import helpIcon from "../../assets/dashboard assets/help-icon.svg";
import logoutIcon from "../../assets/dashboard assets/logout-icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <img src={dashboardLogo} alt="logo" />
        </div>

        <ul className="sidebar-tabs">
          <li className="active-sidebar">
            <img src={overviewIcon} style={{ font: "white" }} alt="icon" />
            Overview
          </li>
          <li>
            <img
              src={appointmentIcon}
              style={{ background: "white" }}
              alt="icon"
            />
            Apointment
          </li>
          <li>
            <img src={prescriptionIcon} alt="icon" /> Prescription
          </li>
          <li>
            <img src={paymentIcon} alt="icon" /> Payments
          </li>
          <li>
            <img src={settingsIcon} alt="icon" /> Settings
          </li>
          <hr className="sidebar-hr" color="" />

          <li className="sidebar-mid">
            <img src={chatIcon} alt="icon" />
            Chat
            <div className="chats">
              <p>15</p>
            </div>
          </li>
          <li>
            <img src={profileIcon} alt="icon" />
            Profile
          </li>
          <li className="sidebar-bottom">
            <img src={helpIcon} alt="icon" />
            Help
          </li>
          <li>
            <img src={logoutIcon} alt="icon" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
