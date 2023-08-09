import Navbar from "../../../components/DashboardNav/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./Home.css";

import addIcon from "../../../assets/dashboard assets/add.svg";
import requestIcon from "../../../assets/dashboard assets/RequestHome-icon.svg";
import rightArrow from "../../../assets/dashboard assets/rightArrow-icon.svg";
import leftArrow from "../../../assets/dashboard assets/leftArrow-icon.svg";
import avatar1 from "../../../assets/dashboard assets/Alice.svg";
import avatar2 from "../../../assets/dashboard assets/Bisola.svg";
import avatar3 from "../../../assets/dashboard assets/Ubong.svg";
import pdf from "../../../assets/dashboard assets/pdf-icon.svg";
import download from "../../../assets/dashboard assets/download-icon.svg";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-dashboard">
        <Navbar />
        <div className="home-dashbord-top">
          <h3>Hi Tosin, Welcome!</h3>

          <div className="dashboard-date-container">
            <span>14 July, 2023</span>
            <span>9:12am</span>
          </div>
        </div>

        <main>
          {/* LEFT COMPONENTS */}
          <div className="home-dasboard-left">
            <div className="schedule-container">
              <div className="schedule-app">
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
            <div className="calender-wrapper"></div>

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
    </div>
  );
};

export default Home;