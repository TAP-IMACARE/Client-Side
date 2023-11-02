import TopComponent from "../topComponent/TopComponent";
import "./Settings.css";

import { Link, NavLink, Outlet } from "react-router-dom";

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
            <Link to="files">
              <li>Change Password</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
