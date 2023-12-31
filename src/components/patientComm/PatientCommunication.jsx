import "./PatientCommunication.css";
import patientComm from "../../assets/landingPageAssets/patientComm.png";

const PatientCommunication = () => {
  return (
    <div className="patientCommunicationWrapper">
      <div className="PatientCommunication-container">
        <div className="PatientCommunication-left">
          {/* <div className="PatientCommunication-left-container"> */}
          <h3>
            Patient Engagement and <br></br> Communication
          </h3>
          <p>
            Reduce wait times, foster patient engagement through messaging
            systems, and personalized communication, enhancing patient
            satisfaction and adherence to treatment plans.
          </p>
          {/* </div> */}
        </div>
        <div className="PatientCommunication-right">
          <img src={patientComm} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default PatientCommunication;
