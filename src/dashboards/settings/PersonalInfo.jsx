// eslint-disable-next-line no-unused-vars
import React from "react";
import userIcon from "../../assets/dashboard assets/Tosin Wale.svg";
import "./Settings.css";

import cameraIcon from "../../assets/dashboard assets/cameraD.svg";
import contactIcon from "../../assets/dashboard assets/contact.svg";
import callIcon from "../../assets/dashboard assets/call.svg";

const PersonalInfo = () => {
  return (
    <>
      <form action="#" id="personalInfo">
        <h3>Personal Information</h3>

        <div className="personal-pics">
          <img src={userIcon} alt="avatar" id="userAvatar" />
          {/* <img src={cameraIcon} alt="icon" id="cameraIcon" /> */}
        </div>

        <div className="name-control">
          <div className="firstName">
            <label htmlFor="firstName">First Name</label> <br />
            <input type="text" id="input" placeholder="Tosin" />
            <img src={contactIcon} alt="" id="icon" />
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label> <br />
            <input type="text" id="lastName" placeholder="Wale" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
        </div>

        <div className="phone-control">
          <label htmlFor="phone">Phone Number</label>
          <br />
          <input type="number" id="phone" placeholder="Phone number" />{" "}
          <img src={callIcon} alt="" id="icon" />
        </div>

        <div className="email-control">
          <label htmlFor="email">Email Address</label> <br />
          <input type="number" id="email" placeholder="Email" />
          <img src={contactIcon} alt="" id="icon" />
        </div>

        <h4>Location</h4>

        <div className="address-control">
          <label htmlFor="address">Address</label>
          <br />
          <input type="text" id="address" placeholder="Full address" />
          <img src={contactIcon} alt="" id="icon" />
        </div>

        <div className="city_state-control">
          <div className="city">
            <label htmlFor="city">City</label>
            <br />
            <input type="text" id="city" placeholder="City" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
          <div className="state">
            <label htmlFor="state">State</label>
            <br />
            <input type="text" id="state" placeholder="State" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
        </div>

        <div className="zip_country-control">
          <div className="zipcode">
            <label htmlFor="zipcode">Zip Code</label>
            <br />
            <input type="text" id="zipcode" placeholder="Zip code" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
          <div className="country">
            <label htmlFor="country">Country</label>
            <br />
            <input type="text" id="country" placeholder="Country" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
        </div>

        <h4>Bio</h4>

        <div className="gender_birth-control">
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <br />
            <input type="text" id="gender" placeholder="Gender" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
          <div className="dob">
            <label htmlFor="dob">Date of Birth</label>
            <br />
            <input type="text" id="dob" placeholder="dd/mm/yy" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
        </div>

        <div className="marital_blood-control">
          <div className="marital_stats">
            <label htmlFor="marital">Marital Status</label>
            <br />
            <input type="text" id="marital" placeholder="Marital Status" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
          <div className="blood">
            <label htmlFor="blood">Blood Type</label>
            <br />
            <input type="text" id="blood" placeholder="Blood type" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
        </div>

        <div className="weight_height-control">
          <div className="weight">
            <label htmlFor="weight">Weight (kg)</label>
            <br />
            <input type="text" id="weight" placeholder="Weight" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
          <div className="height">
            <label htmlFor="height">Height (m)</label>
            <br />
            <input type="text" id="height" placeholder="Height" />
            <img src={contactIcon} alt="" id="icon" />
          </div>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </>
  );
};

export default PersonalInfo;
