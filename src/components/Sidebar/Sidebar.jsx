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
import activeChatIcon from "../../assets/dashboard assets/activeChatIcon.svg";
import profileIcon from "../../assets/dashboard assets/profile-icon.svg";
import activeProfileIcon from "../../assets/dashboard assets/activeProfileIcon.svg";
import helpIcon from "../../assets/dashboard assets/help-icon.svg";
import logoutIcon from "../../assets/dashboard assets/logout-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

const CustomNav = ({ to, children, activeIcon, inactiveIcon }) => {
  const { pathname } = useLocation();
  const isActive = useMemo(() => {
    let link = to;
    // console.log("link :", to);
    const routeList = to.split("/").filter(Boolean);
    const pathList = pathname.split("/").filter(Boolean);
    // console.log(routeList);
    const exactPath = routeList[1];

    if (pathname === "/dashboard/book-appointment" && routeList.length === 1) {
      // console.log("entered");
      link = "/dashboard/book-appointment";
    }
    if (pathname === "/dashboard/set-appointment" && routeList.length === 1) {
      link = "/dashboard/set-appointment";
    }
    if (routeList.length === 1) {
      return link === pathname;
    }
    return pathList[1] === exactPath;
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
            to={"/dashboard/settings/info"}
            activeIcon={activeSettings}
            inactiveIcon={settingsIcon}
          >
            Settings
          </CustomNav>
          <hr className="sidebar-hr" color="" />

          <div className="sidebar-mid">
            <CustomNav
              to={"/dashboard/chat"}
              activeIcon={activeChatIcon}
              inactiveIcon={chatIcon}
            >
              Chat
              <div className="chats">
                <p>15</p>
              </div>
            </CustomNav>
          </div>
          <CustomNav
            to={"/dashboard/profile"}
            activeIcon={activeProfileIcon}
            inactiveIcon={profileIcon}
          >
            Profile
          </CustomNav>
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
