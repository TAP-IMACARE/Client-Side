import "./ScheduleAppointment.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Imacare-logo2.png";
import closeIcon from "../../assets/close.svg";

const ScheduleAppointment = () => {
  return (
    <div className="schedule-appointment-container">
      <header className="schedule-appointment-header">
        <Link to={"/"}>
          <img src={logo} alt="logo" id="scheduleAppointment-logo" />
        </Link>

        <Link to={"/"}>
          <img src={closeIcon} alt="close" id="scheduleAppointment-closeIcon" />
        </Link>
      </header>

      <div className="schedule-appointment-content">
        <h1>Schedule Appointment</h1>
        <p>Are you new or an already existing patient?</p>

        <div className="schedule-appointment-cards">
          <div className="schedule-appointment-card">
            <h3>Current Patient</h3>
            <p>Already have an account? Log in to book an appointment</p>

            <Link to="#">
              <button>Log in</button>
            </Link>
          </div>

          <div className="schedule-appointment-card">
            <h3>New Patient</h3>
            <p>Don’t have an account? Sign Up to book an appointment</p>

            <Link to="#">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="schedule-appointment-footer">
        <p>Privacy policy | Terms</p>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
