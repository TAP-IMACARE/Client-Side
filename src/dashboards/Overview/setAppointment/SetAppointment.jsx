/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";

import "./SetAppointment.css";
import img1 from "../../../assets/dashboard assets/Ubong_b.png";

import TopComponent from "../../topComponent/TopComponent";
import Calendar from "../../../components/calender/Calender";

Modal.setAppElement("#root");
const SetAppointment = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [meeting, setMeeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!meeting) {
      alert("Choose a meeting type..!!");
      return false;
    }
    console.log("Meeting_Type: ", meeting);
    setModal(true);
  };
  return (
    <div>
      <TopComponent header="Set Appointment" />

      <Modal
        isOpen={modal}
        // onRequestClose={() => setModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            zIndex: "999",
          },
          content: {
            textAlign: "center",
            margin: "auto auto",
            maxWidth: "496px",
            height: "300px",
          },
        }}
      >
        <h5
          style={{
            color: "#005E5D",
            fontSize: "30px",
            fontWeight: "600",
            marginBottom: "25px",
          }}
        >
          Thank you for booking an appointment
        </h5>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          You’ll receive a notification when your appointment is confirmed.
        </p>
        {/* <Link to={"/dashboard"}>Overview</Link> */}
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "10px 30px",
            background: "#005E5D",
            borderRadius: "10px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Overview
        </button>
      </Modal>

      <div className="SetAppointment-container">
        <div className="SetAppointment-wrapper">
          {/* LEFT COMPONENT */}
          <div className="SetAppointment-leftCOmponent">
            <img src={img1} alt="avatar" />

            <div className="SetAppointment-doc-portfolio">
              <h3>Dr. Ubong Etuk</h3>
              <p>Pathology Specialist</p>

              <h6>Description</h6>
              <p className="portfolio-text">
                A sought-after pathologist, known for his exceptional diagnostic
                abilities, and his unwavering dedication to patient care.
              </p>
            </div>
          </div>

          {/*  RIGHT COMPONENT*/}
          <div className="SetAppointment-rightCOmponent">
            <form action="#" onSubmit={handleSubmit}>
              <label htmlFor="calender" className="span">
                Select Date
              </label>
              <div className="calender-wrapper2">
                <Calendar id="calender" />
              </div>

              <label htmlFor="time" className="span">
                Select Time
              </label>
              <div className="SetAppointment-time">Time picker goes here!!</div>

              <div className="SetAppointment-radioBTN">
                <div className="virtual">
                  <input
                    type="radio"
                    name="appointment_type"
                    value="virtual"
                    onChange={(e) => setMeeting(e.target.value)}
                  />
                  <h6>Virtual</h6>
                </div>
                <div className="physical">
                  <input
                    type="radio"
                    name="appointment_type"
                    value="physical"
                    onChange={(e) => setMeeting(e.target.value)}
                  />
                  <h6>Physical</h6>
                </div>
              </div>

              <button type="submit">Set Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetAppointment;
