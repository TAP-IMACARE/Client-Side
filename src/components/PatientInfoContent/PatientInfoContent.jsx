import "./PatientInfoContent.css";
import { Link } from "react-router-dom";
import patientInfoImg from "../../assets/landingPageAssets/patientInfo.png";
// import patientInfoImg from "../../assets/landingPageAssets/patient dashboard product.png";
import PatientAppointmentScheduling from "../patientAppointmentScheduling/PatientAppointmentScheduling";
import PatientCommunication from "../patientComm/PatientCommunication";
import PatnersContent from "../patnersContent/PatnersContent";

const PatientInfoContent = () => {
  return (
    <div id="product">
      <div className="PatientInfoContent-container">
        <div className="PatientInfoContent-header">
          <h3>Optimize Operations and Enhance Patient</h3>
          <p>
            Empower your hospital with our comprehensive Software Management
            Tool to improve overall healthcare service delivery.
          </p>
        </div>

        <div className="PatientInfoContent-content">
          <div className="PatientInfoContent-left">
            <div className="PatientContent-left-container">
              <h4>
                Patient Information <br></br> Management
              </h4>
              <p>
                Effortlessly manage patient records, medical history,
                demographic details, and contact information in a secure and
                organized manner.
              </p>
              <Link id="freeDemo-btn">
                <span>Free Demo Trial</span>
              </Link>
            </div>
          </div>
          <div className="PatientInfoContent-right">
            <img src={patientInfoImg} alt="info" />
          </div>
        </div>
      </div>

      <PatientAppointmentScheduling />
      <PatientCommunication />
      <PatnersContent />
    </div>
  );
};

export default PatientInfoContent;
