import scheduleIcon from "../../assets/dashboard assets/schedule-icon.svg";
import Ubong from "../../assets/dashboard assets/Ubong.svg";
import Chinedu from "../../assets/dashboard assets/Chinedu.svg";
import call from "../../assets/dashboard assets/call.svg";
import duo from "../../assets/dashboard assets/duo.svg";
import chat from "../../assets/dashboard assets/chat.svg";
import { Link } from "react-router-dom";
import "./Appointment.css";

const Upcoming = () => {
  return (
    <div>
      <div className="appointment-cardWrapper">
        <div className="appointment-card">
          <h5>Dr. Ubong Etuk</h5>
          <p>Pathologist</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>Starts Now</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Ubong} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Ubong Etuk</h6>
              <p className="phone">(234) 705 435 7755</p>
            </div>

            <div className="contact-doc">
              <img src={call} alt="icon" />
              <img src={duo} alt="icon" />
              <img src={chat} alt="icon" />
            </div>
          </div>

          <Link to="#">
            <button className="appointment-btn"> Join Meeting</button>
          </Link>
        </div>

        {/* CARD 2 */}

        <div className="appointment-card">
          <h5>Dr. Ubong Etuk</h5>
          <p>Pathologist</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>Starts Now</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Ubong} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Ubong Etuk</h6>
              <p className="phone">(234) 705 435 7755</p>
            </div>

            <div className="contact-doc">
              <img src={call} alt="icon" />
              <img src={duo} alt="icon" />
              <img src={chat} alt="icon" />
            </div>
          </div>

          <Link to="#">
            <button
              className="appointment-btn"
              style={{ background: "#A15E00" }}
            >
              Virtual
            </button>
          </Link>
        </div>

        {/* CARD 3 */}
        <div className="appointment-card">
          <h5>Dr. Chinedu Okeke</h5>
          <p>Surgeon</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>Starts in 4w</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Chinedu} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Chinedu Okeke</h6>
              <p className="phone">(234) 705 565 7385</p>
            </div>

            <div className="contact-doc">
              <img src={call} alt="icon" />
              <img src={duo} alt="icon" />
              <img src={chat} alt="icon" />
            </div>
          </div>

          <Link to="#">
            <button className="appointment-btn" style={{ background: "#222" }}>
              Physical Meeting
            </button>
          </Link>
        </div>

        {/* CARD 4 */}

        <div className="appointment-card">
          <h5>Dr. Ubong Etuk</h5>
          <p>Pathologist</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>Starts in 5w</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Ubong} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Ubong Etuk</h6>
              <p className="phone">(234) 705 435 7755</p>
            </div>

            <div className="contact-doc">
              <img src={call} alt="icon" />
              <img src={duo} alt="icon" />
              <img src={chat} alt="icon" />
            </div>
          </div>

          <Link to="#">
            <button
              className="appointment-btn"
              style={{ background: "#A15E00" }}
            >
              Virtual
            </button>
          </Link>
        </div>

        {/* CARD 5 */}

        <div className="appointment-card">
          <h5>Dr. Chinedu Okeke</h5>
          <p>Surgeon</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>Starts in 4w</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Chinedu} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Chinedu Okeke</h6>
              <p className="phone">(234) 705 565 7385</p>
            </div>

            <div className="contact-doc">
              <img src={call} alt="icon" />
              <img src={duo} alt="icon" />
              <img src={chat} alt="icon" />
            </div>
          </div>

          <Link to="#">
            <button className="appointment-btn" style={{ background: "#222" }}>
              Physical Meeting
            </button>
          </Link>
        </div>

        {/* CARD 6 */}

        <div className="appointment-card">
          <h5>Dr. Ubong Etuk</h5>
          <p>Pathologist</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>Starts in 6w</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Ubong} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Ubong Etuk</h6>
              <p className="phone">(234) 705 435 7755</p>
            </div>

            <div className="contact-doc">
              <img src={call} alt="icon" />
              <img src={duo} alt="icon" />
              <img src={chat} alt="icon" />
            </div>
          </div>

          <Link to="#">
            <button
              className="appointment-btn"
              style={{ background: "#A15E00" }}
            >
              Virtual
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
