import "./OurDoctors.css";
import DrImg1 from "../../assets/Ubong.png";
import DrImg2 from "../../assets/Bisola.png";
import DrImg3 from "../../assets/Chinedu.png";
import DrImg4 from "../../assets/Alice.png";

const OurDoctors = () => {
  return (
    <div className="ourDoctors-container">
      <div className="ourDoctors-top">
        <h2>Meet Our Specialist Doctors</h2>
        <p>
          Get in touch with our team of highly skilled and compassionate doctors
          who are dedicated to providing exceptional healthcare services to
          patients
        </p>
      </div>
      <div className="ourDoctors-card-wrapper">
        <div className="ourDoctor-card">
          <img src={DrImg1} alt="doctor" />

          <div className="ourDoctor-card-detail">
            <h3>Dr. Ubong Etuk</h3>
            <p>Pathology Specialist</p>
          </div>
        </div>

        <div className="ourDoctor-card">
          <img src={DrImg2} alt="doctor" />

          <div className="ourDoctor-card-detail">
            <h3>Dr. Bisola Adeniyi</h3>
            <p>Psychiatric Specialist</p>
          </div>
        </div>

        <div className="ourDoctor-card">
          <img src={DrImg3} alt="doctor" />

          <div className="ourDoctor-card-detail">
            <h3>Dr. Chinedu Okeke</h3>
            <p>Surgical Specialist</p>
          </div>
        </div>

        <div className="ourDoctor-card">
          <img src={DrImg4} alt="doctor" />

          <div className="ourDoctor-card-detail">
            <h3>Dr. Alice Eze</h3>
            <p>Paramedic Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
