import scheduleIcon from "../../assets/dashboard assets/schedule-icon.svg";
import Ubong from "../../assets/dashboard assets/Ubong.svg";
import Chinedu from "../../assets/dashboard assets/Chinedu.svg";
import call from "../../assets/dashboard assets/call.svg";
import duo from "../../assets/dashboard assets/duo.svg";
import chat from "../../assets/dashboard assets/chat.svg";
import Alice from "../../assets/dashboard assets/Alice.svg";
import "./Appointment.css";
import { Link } from "react-router-dom";

const Canceled = () => {
  return (
    <div>
      <div className="appointment-cardWrapper">
        {/* CARD 1 */}
        <div className="appointment-card">
          <h5>Dr. Alice Eze</h5>
          <p>Paramedic</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>5 days ago</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Alice} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Alice Eze</h6>
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
              style={{ background: "#943529" }}
            >
              Canceled
            </button>
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
              <span>5 wks ago</span>
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
              style={{ background: "#943529" }}
            >
              Canceled
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
              <span>6 wks ago</span>
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
            <button
              className="appointment-btn"
              style={{ background: "#943529" }}
            >
              Canceled
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
              <span>5 wks ago</span>
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
              style={{ background: "#943529" }}
            >
              Canceled
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
              <span>6 wks ago</span>
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
            <button
              className="appointment-btn"
              style={{ background: "#943529" }}
            >
              Canceled
            </button>
          </Link>
        </div>

        {/* CARD 6 */}
        <div className="appointment-card">
          <h5>Dr. Alice Eze</h5>
          <p>Paramedic</p>

          <div className="appointment-schedule">
            <p>10:00 am - 10:30 am</p>
            <div className="date">
              <img src={scheduleIcon} alt="icon" />
              <span>5 days ago</span>
            </div>
          </div>

          <div className="scheduled-doc-profile">
            <img src={Alice} className="doc-avatar" alt="avatar" />
            <div className="doc-contact">
              <h6>Dr. Alice Eze</h6>
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
              style={{ background: "#943529" }}
            >
              Canceled
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Canceled;
