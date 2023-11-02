import "./PatientAppointmentScheduling.css";
import img from "../../assets/landingPageAssets/setAppointment.png";

const PatientAppointmentScheduling = () => {
  return (
    <div className="PatientAppointmentScheduling-container">
      <div className="PatientAppointmentScheduling-left">
        <img src={img} alt="image" />
      </div>
      <div className="PatientAppointmentScheduling-right">
        <div className="PatientAppointmentScheduling-right-container">
          <h3>Appointment Scheduling</h3>
          <p>
            Streamline the appointment booking process for patients, doctors,
            and other healthcare professionals, ensuring optimal resource
            allocation and reduced wait times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointmentScheduling;
