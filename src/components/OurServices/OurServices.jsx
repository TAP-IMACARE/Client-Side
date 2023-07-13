import "./OurServices.css";
import pharmacyIcon from "../../assets/pharmarcy-icon.png";
import rehabIcon from "../../assets/rehabilitation-icon.png";
import maternityIcon from "../../assets/maternity-icon.png";
import labIcon from "../../assets/laboratory-icon.png";
import emergencyIcon from "../../assets/emergency-icon.png";
import intensiveCareIcon from "../../assets/itensiveCare-icon.png";

const OurServices = () => {
  return (
    <div className="ourService-container" id="services">
      <div className="ourService-top">
        <h2>Our Services</h2>
        <p>
          We are dedicated to providing comprehensive and reliable healthcare
          services to individuals and communities
        </p>
      </div>

      <div className="ourService-card-wrapper">
        <div className="ourService-card">
          <div className="ourService-card-image">
            <img src={pharmacyIcon} alt="icon" />
          </div>

          <h4>Pharmacy</h4>
          <p>Dispensing of medications and pharmaceutical consultations</p>
        </div>

        <div className="ourService-card">
          <div className="ourService-card-image">
            <img src={rehabIcon} alt="icon" />
          </div>

          <h4>Rehabilitation</h4>
          <p>
            Physical, occupational, and speech therapy for patients recovering
            from injuries or surgeries.
          </p>
        </div>

        <div className="ourService-card">
          <div className="ourService-card-image">
            <img src={maternityIcon} alt="icon" />
          </div>

          <h4>Maternity Care</h4>
          <p>
            Prenatal care, labor and delivery, postpartum care, and specialized
            care for newborns.
          </p>
        </div>

        <div className="ourService-card">
          <div className="ourService-card-image">
            <img src={labIcon} alt="icon" />
          </div>

          <h4>Laboratory</h4>
          <p>
            Comprehensive diagnostic testing, including blood work, pathology,
            and microbiology.
          </p>
        </div>

        <div className="ourService-card">
          <div className="ourService-card-image">
            <img src={emergencyIcon} alt="icon" />
          </div>

          <h4>Emergency Care</h4>
          <p>
            Ambulance and paramedic services for on-site emergency response and
            transportation to the hospital.
          </p>
        </div>

        <div className="ourService-card">
          <div className="ourService-card-image">
            <img src={intensiveCareIcon} alt="icon" />
          </div>

          <h4>Intensive Care Units</h4>
          <p>
            Critical care services for patients with severe illnesses or
            injuries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
