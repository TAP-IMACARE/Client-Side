// import scheduleIcon from "../../assets/dashboard assets/schedule-icon.svg";
// import Ubong from "../../assets/dashboard assets/Ubong.svg";
// import Chinedu from "../../assets/dashboard assets/Chinedu.svg";
// import call from "../../assets/dashboard assets/call.svg";
// import duo from "../../assets/dashboard assets/duo.svg";
// import chat from "../../assets/dashboard assets/chat.svg";
import "./Appointment.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import TopComponent from "../topComponent/TopComponent";

const Appointment = () => {
  return (
    <div>
      <TopComponent header={"Booking Activity"} />

      <div className="appointmet-wrapper">
        <div className="appointment-container">
          <ul className="appointment-nav">
            <NavLink to="upcoming">
              <li className="appointment-items">Upcoming</li>
            </NavLink>
            <NavLink to="completed">
              <li className="appointment-items">Completed</li>
            </NavLink>
            <NavLink to="canceled">
              <li className="appointment-items">Canceled</li>
            </NavLink>
          </ul>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
