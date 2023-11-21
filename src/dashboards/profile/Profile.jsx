// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Profile.css";
import TopComponent from "../topComponent/TopComponent";

import userIcon from "../../assets/dashboard assets/Tosin Wale.svg";
import rightArrow from "../../assets/dashboard assets/rightArrow-icon.svg";
import leftArrow from "../../assets/dashboard assets/leftArrow-icon.svg";
import bloodPressureICon from "../../assets/dashboard assets/bloodPressure-icon.svg";
import heartIcon from "../../assets/dashboard assets/heart-icon.svg";
import stomachICon from "../../assets/dashboard assets/stomach-icon.svg";

const Profile = () => {
  const diagnosisData = [
    {
      icon: bloodPressureICon,
      diagnosis: "Blood Pressure",
      date: "14 July, 2023",
    },
    {
      icon: heartIcon,
      diagnosis: "Stomach Ache",
      date: "1 August, 2023",
    },
    {
      icon: stomachICon,
      diagnosis: "Pneumonia",
      date: "20 September, 2023",
    },
  ];

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

          <div className="profile-rightCard-container">
            <div className="diagnoses">
              <div className="diagnoses-header">
                <h3>Diagnoses</h3>

                <div className="diagnoses-icon">
                  <div className="diagnosesLeftIcon">
                    <img src={leftArrow} alt="icon" />
                  </div>
                  <div className="diagnosesReftIcon">
                    <img src={rightArrow} alt="icon" />
                  </div>
                </div>
              </div>

              <div className="diagnoses-list">
                {diagnosisData.map((data, index) => (
                  <div key={index}>
                    <div id="diagnoses">
                      <div className="diagnoses-icon">
                        <img src={data.icon} alt="icon" />
                      </div>

                      <div className="diagnoses-details">
                        <h6>{data.diagnosis}</h6>
                        <p>{data.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
