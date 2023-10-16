import { Link } from "react-router-dom";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container" id="pricing">
      <h3>Select The Perfect Plan For You</h3>

      <div className="plans">
        <div className="plan unselected_plan">
          <div className="package">
            <h5>FREE</h5>
            <div className="price">
              <h4>
                <sup>&#8358;</sup>0
              </h4>
              <p>Monthly</p>
            </div>
          </div>
          <ul className="plan-list">
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>2 Doctor Users
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>4 Patients Entry
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Security
              Management
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Standard Support
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Access Key
              Features
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Limited Template
              Design
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Limited Features
            </li>
          </ul>

          <Link to={"#"} className="plan-btn">
            Choose Plan
          </Link>
        </div>

        {/* BASIC PLAN */}
        <div className="plan" id="selected_plan">
          <div className="package">
            <h5>BASIC</h5>
            <div className="price">
              <h4>
                <sup>&#8358;</sup>80,000
              </h4>
              <p>Monthly</p>
            </div>
          </div>
          <ul className="plan-list">
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>8 Doctor Users
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>16 Patients
              Entry
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Security
              Management
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Standard Support
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Access Key
              Features
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Multiple
              Template Design
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Limited Features
            </li>
          </ul>

          <Link to={"#"} className="plan-btn">
            Choose Plan
          </Link>
        </div>

        {/* PREMIUM PLAN */}
        <div className="plan unselected_plan">
          <div className="package">
            <h5>PREMIUM</h5>
            <div className="price">
              <h4>
                <sup>&#8358;</sup>200,000
              </h4>
              <p>Monthly</p>
            </div>
          </div>
          <ul className="plan-list">
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Unlimited Doctor
              Users
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Unlimited
              Patients Entry
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Security
              Management
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Standard Support
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Access Key
              Features
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Multiple
              Template Design
            </li>
            <li>
              <span style={{ color: "#005E5D" }}>&#10003;</span>Advanced
              Features
            </li>
          </ul>

          <Link to={"#"} className="plan-btn">
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plans;
