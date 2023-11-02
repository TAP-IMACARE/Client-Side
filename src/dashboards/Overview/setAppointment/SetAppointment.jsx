/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./SetAppointment.css";
import img1 from "../../../assets/dashboard assets/Ubong_b.png";

import TopComponent from "../../topComponent/TopComponent";
import Calendar from "../../../components/calender/Calender";
import ModalContainer from "../modal/ModalContainer";
import Time from "../../../components/Time/Time";

const SetAppointment = () => {
  const [value, setValue] = useState(null);

  const [modal, setModal] = useState(false);
  const [meeting, setMeeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!meeting) {
      alert("Choose a meeting type..!!");
      return false;
    }
    console.log("Meeting_Type: ", meeting);
    console.log("Date:", value.format("DD-MMM-YYYY"));
    setModal(true);
  };
  return (
    <div>
      <TopComponent header="Set Appointment" />

      <ModalContainer modal={modal} />
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
                <Calendar
                  id="calender"
                  onChange={(newValue) => setValue(newValue)}
                  value={value}
                />
              </div>

              <label htmlFor="time" className="span">
                Select Time
              </label>
              <div className="SetAppointment-time">
                <Time />
              </div>

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
