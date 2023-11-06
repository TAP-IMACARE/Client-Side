import TopComponent from "../topComponent/TopComponent";
import "./Settings.css";

import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <TopComponent header={"Settings"} />
      <div className="settings-container">
        <div className="settings-leftContainer">
          <Outlet />
        </div>

        <div className="settings-rightComponent">
          <ul className="settings-nav" id="settings-nav">
            <NavLink to={"info"}>
              <li>Personal Information</li>
            </NavLink>
            <NavLink to={"files"}>
              <li>Attached Files</li>
            </NavLink>
            <NavLink to="change_password">
              <li>Change Password</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
