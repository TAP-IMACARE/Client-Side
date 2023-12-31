// import React from "react";
import img1 from "../../../assets/dashboard assets/Ubong_b.png";
import img2 from "../../../assets/dashboard assets/Alice_b.png";
import img3 from "../../../assets/dashboard assets/Chinedu_b.png";
// import img4 from "../../../assets/dashboard assets/Bisola_b.png";
import star from "../../../assets/dashboard assets/star.svg";

import TopComponent from "../../topComponent/TopComponent";
import "./BookAppointment.css";
import { Link, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const doctorsData = [
    {
      avatar: img1,
      name: "Dr. Ubong Etuk",
      portfolio: "Pathology Specialist",
      info: "A sought-after pathologist, known for his exceptional diagnosti abilities, and his unwavering dedication to patient care.",
    },
    {
      avatar: img2,
      name: "Dr. Alice Eze",
      portfolio: "Paramedic Specialist",
      info: "Extensive knowledge in advanced life support techniques, trauma management, pre-hospital care, emergency medicine, and disaster management.",
    },
    {
      avatar: img3,
      name: "Dr. Chinedu Okeke",
      portfolio: "Surgical Specialist",
      info: "A highly skilled and accomplished surgical specialist with expertise in Gynecology. Dedicated in making impact on the field of surgery and improving lives.",
    },
  ];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("set-appointment");
  };

  return (
    <div>
      <TopComponent header={"Book Appointment"} />

      <div className="bookAppointment-container">
        {/* Card 1 */}
        {doctorsData.map((data, i) => (
          <div key={i}>
            <div className="bookAppointment">
              <img src={data.avatar} alt="avatar" className="doc-avatar" />

              <div className="doctor-portfolio">
                <h3>{data.name}</h3>
                <h5>{data.portfolio}</h5>

                <p>{data.info}</p>

                <div className="bottomContent ">
                  <div className="doc-rating">
                    <img src={star} alt="avatar" />
                    <p style={{ marginRight: "15px", fontSize: "13px" }}>4.5</p>
                    <p style={{ fontSize: "13px" }}>5 years of experience</p>
                  </div>

                  <div className="appointment-btn">
                    <Link
                      to={"/dashboard/set-appointment"}
                      id="appointment-btn"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CARD 2 */}
        {/* <div className="bookAppointment">
          <img src={img2} alt="avatar" className="doc-avatar" />

          <div className="doctor-portfolio">
            <h3>Dr. Alice Eze</h3>
            <h5>Paramedic Specialist</h5>

            <p>
              Extensive knowledge in advanced life support techniques, trauma
              management, pre-hospital care, emergency medicine, and disaster
              management.
            </p>

            <div className="bottomContent ">
              <div className="doc-rating">
                <img src={star} alt="avatar" />
                <p style={{ marginRight: "15px", fontSize: "13px" }}>4.5</p>
                <p style={{ fontSize: "13px" }}>5 years of experience</p>
              </div>

              <div className="appointment-btn">
                <Link to={"#"} id="appointment-btn">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        {/* CARD 3 */}
        {/* <div className="bookAppointment">
          <img src={img3} alt="avatar" className="doc-avatar" />

          <div className="doctor-portfolio">
            <h3>Dr. Chinedu Okeke</h3>
            <h5>Surgical Specialist</h5>

            <p>
              A highly skilled and accomplished surgical specialist with
              expertise in Gynecology. Dedicated in making impact on the field
              of surgery and improving lives.
            </p>

            <div className="bottomContent ">
              <div className="doc-rating">
                <img src={star} alt="avatar" />
                <p style={{ marginRight: "15px", fontSize: "13px" }}>4.5</p>
                <p style={{ fontSize: "13px" }}>5 years of experience</p>
              </div>

              <div className="appointment-btn">
                <Link to={"#"} id="appointment-btn">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BookAppointment;
