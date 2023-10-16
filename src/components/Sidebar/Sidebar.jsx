/* eslint-disable react/prop-types */
import "./Sidebar.css";
import dashboardLogo from "../../assets/dashboard assets/dashboard-logo.svg";

import overviewIcon from "../../assets/dashboard assets/overview-icon.svg";
import overviewIconInactive from "../../assets/dashboard assets/overviewInactive.svg";
import appointmentIcon from "../../assets/dashboard assets/appointment-icon.svg";
import activeAppointmentIcon from "../../assets/dashboard assets/activeAppointment.svg";
import prescriptionIcon from "../../assets/dashboard assets/prescription-icon.svg";
import activePrescriptions from "../../assets/dashboard assets/activePrescriptions.svg";
import paymentIcon from "../../assets/dashboard assets/payment-icon.svg";
import activePayment from "../../assets/dashboard assets/activePayment.svg";
import settingsIcon from "../../assets/dashboard assets/settings-icon.svg";
import activeSettings from "../../assets/dashboard assets/activeSettings.svg";
import chatIcon from "../../assets/dashboard assets/chat-icon.svg";
import profileIcon from "../../assets/dashboard assets/profile-icon.svg";
import helpIcon from "../../assets/dashboard assets/help-icon.svg";
import logoutIcon from "../../assets/dashboard assets/logout-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

const CustomNav = ({ to, children, activeIcon, inactiveIcon }) => {
  const { pathname } = useLocation();
  const isActive = useMemo(() => {
    const routeList = to.split("/").filter(Boolean);
    const exactPath = routeList[1];
    if (routeList.length === 1) {
      return to === pathname;
    }
    return pathname.includes(exactPath);
  }, [pathname, to]);
  return (
    <Link to={to} className={isActive ? "active" : ""}>
      <li>
        <img src={isActive ? activeIcon : inactiveIcon} alt="icon" />
        {children}
      </li>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <Link to={"/"}>
            <img src={dashboardLogo} alt="logo" />
          </Link>
        </div>

        <ul className="sidebar-tabs">
          <CustomNav
            to={"/dashboard"}
            activeIcon={overviewIcon}
            inactiveIcon={overviewIconInactive}
          >
            Overview
          </CustomNav>

          <CustomNav
            to={"/dashboard/appointment/upcoming"}
            activeIcon={activeAppointmentIcon}
            inactiveIcon={appointmentIcon}
          >
            Apointment
          </CustomNav>

          <CustomNav
            to={"/dashboard/prescription"}
            activeIcon={activePrescriptions}
            inactiveIcon={prescriptionIcon}
          >
            Prescription
          </CustomNav>

          <CustomNav
            to={"/dashboard/payments"}
            activeIcon={activePayment}
            inactiveIcon={paymentIcon}
          >
            Payments
          </CustomNav>

          <CustomNav
            to={"/dashboard/settings"}
            activeIcon={activeSettings}
            inactiveIcon={settingsIcon}
          >
            Settings
          </CustomNav>
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
