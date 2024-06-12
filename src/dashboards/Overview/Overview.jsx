import addIcon from "../../assets/dashboard assets/add.svg";
import requestIcon from "../../assets/dashboard assets/RequestHome-icon.svg";
import rightArrow from "../../assets/dashboard assets/rightArrow-icon.svg";
import leftArrow from "../../assets/dashboard assets/leftArrow-icon.svg";
import avatar1 from "../../assets/dashboard assets/Alice.svg";
import avatar2 from "../../assets/dashboard assets/Bisola.svg";
import avatar3 from "../../assets/dashboard assets/Ubong.svg";
import pdf from "../../assets/dashboard assets/pdf-icon.svg";
import download from "../../assets/dashboard assets/download-icon.svg";
import whiteArrow from "../../assets/dashboard assets/whiteArrow-icon.svg";
import Calendar from "../../components/calender/Calender";

import TopComponent from "../topComponent/TopComponent";
import DoctorTable from "../../components/Tables/DoctorTable";
import "./Overview.css";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard/book-appointment");
  };
  return (
    <div>
      <TopComponent header={"Hi Tosin, Welcome!"} />
      <main className="home-dashboard-main">
        {/* LEFT COMPONENTS */}
        <div className="home-dasboard-left">
          <div className="schedule-container">
            <div className="schedule-app" onClick={() => handleNavigate()}>
              <div className="schedule-app-icon">
                <img src={addIcon} alt="icon" />
              </div>
              <p>Schedule an appointment</p>
            </div>
            <div className="schedule-app">
              <div className="schedule-app-icon">
                <img src={requestIcon} alt="icon" />
              </div>
              <p>Request a home visit</p>
            </div>
          </div>

          <div className="upcomming-app">
            <h4>Upcoming Appointment</h4>
            <DoctorTable />
          </div>

          <div className="available-docs">
            <div className="available-docs-header">
              <h4>Available Doctors</h4>
              <div className="available-docs-icon">
                <div className="leftIcon">
                  <img src={leftArrow} alt="arrow" />
                </div>
                <div className="rightIcon">
                  <img src={rightArrow} alt="arrow" />
                </div>
              </div>
            </div>

            <div className="available-docs-wrapper">
              <div className="available-doc">
                <img src={avatar1} alt="avatar" />

                <div className="available-doc-details">
                  <h5>Dr. Alice Eze</h5>
                  <p>Paramedic</p>
                </div>
              </div>
              <div className="available-doc">
                <img src={avatar3} alt="avatar" />

                <div className="available-doc-details">
                  <h5>Dr. Ubong Etuk</h5>
                  <p>Pathologist</p>
                </div>
              </div>
              <div className="available-doc">
                <img src={avatar2} alt="avatar" />

                <div className="available-doc-details">
                  <h5>Dr. Bisola Adeniyi</h5>
                  <p>Psychiatrist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT COMPONENTS */}
        <div className="home-dashboard-right">
          <div className="calender-wrapper">
            <Calendar />

            <div className="picked-dates-container">
              <div className="picked-date">
                <div className="picked-day">
                  <p>Wed</p>
                  <h5>19</h5>
                </div>

                <div className="picked-doctor" id="picked-doc">
                  <div className="picked-doctor-header">
                    <h4>Dr. Ubong Etuk</h4>
                    <img src={whiteArrow} alt="arrow" />
                  </div>
                  <p>Pathologist</p>
                  <p>10:00am</p>
                </div>
              </div>
              <div className="picked-date">
                <div className="picked-day" style={{ background: "#bfe6f6" }}>
                  <p>Thu</p>
                  <h5>20</h5>
                </div>

                <div className="picked-doctor">
                  <div className="picked-doctor-header">
                    <h4>Dr. Chinedu Okeke</h4>
                    <img src={rightArrow} alt="arrow" />
                  </div>
                  <p>Surgeon</p>
                  <p>12:00pm</p>
                </div>
              </div>
              <div className="picked-date">
                <div className="picked-day" style={{ background: "#ffd6d6" }}>
                  <p>Wed</p>
                  <h5>19</h5>
                </div>

                <div className="picked-doctor">
                  <div className="picked-doctor-header">
                    <h4>Dr. Ubong Etuk</h4>
                    <img src={rightArrow} alt="arrow" />
                  </div>
                  <p>Pathologist</p>
                  <p>10:30am</p>
                </div>
              </div>
            </div>
          </div>

          <div className="patient-files-wrapper">
            <h5>Patient Files</h5>

            <div className="patient-files">
              <div className="patient-file">
                <img src={pdf} alt="pdf" />
                <div className="file">
                  <p>Prescription</p>
                  <img src={download} alt="file" />
                </div>
              </div>

              <div className="patient-file">
                <img src={pdf} alt="pdf" />
                <div className="file">
                  <p>X-ray</p>
                  <img src={download} alt="file" />
                </div>
              </div>

              <div className="patient-file">
                <img src={pdf} alt="pdf" />
                <div className="file">
                  <p>EEG</p>
                  <img src={download} alt="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Overview;
