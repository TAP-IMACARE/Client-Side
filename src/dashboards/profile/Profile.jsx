// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Profile.css";
import TopComponent from "../topComponent/TopComponent";

import userIcon from "../../assets/dashboard assets/Tosin Wale.svg";

const Profile = () => {
  return (
    <>
      <TopComponent header={"Profile Information"} />

      <div className="profile-container">
        <div className="profile-top">
          <div className="profile-avatar">
            <img src={userIcon} alt="profile" />

            <div className="profile-name">
              <h4>Tosin Wale</h4>
              <p>25 years</p>
            </div>
          </div>

          <div className="date">
            <p>Date Registered</p>
            <h5>Mon, November 2023 </h5>
          </div>
        </div>

        <div className="profile-cards">
          <div className="profile-leftCard">
            <h3>Personal Information</h3>

            <div className="info1">
              <div>
                <p>Gender</p>
                <h6>Female</h6>
              </div>
              <div>
                <p>Date of Birth</p>
                <h6>Feb 14, 1998</h6>
              </div>
            </div>

            <div className="info2">
              <div>
                <p>Marital Status</p>
                <h6>Single</h6>
              </div>
              <div>
                <p>Blood Type</p>
                <h6>O+</h6>
              </div>
            </div>

            <h3 style={{ marginTop: "30px" }}>Contact Information</h3>

            <div className="info1">
              <div>
                <p>Phone number</p>
                <h6>+234 813 267 8764</h6>
              </div>
              <div>
                <p>Email address</p>
                <h6>tosin.wale@gmail.com</h6>
              </div>
            </div>

            <div className="info1">
              <div>
                <p>Address</p>
                <h6>18. Park Villa, Asokoro, F.C.T, Nigeria</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
