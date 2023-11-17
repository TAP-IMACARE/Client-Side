// eslint-disable-next-line no-unused-vars
import React from "react";
import lockIcon from "../../assets/dashboard assets/lockIcon.png";
import LoginVisImg from "../../assets/visibility_off.png";
import on from "../../assets/visibility_on.png";
import "./ChangePassword.css";
import Button from "../../components/Button/Button";

const ChangePassword = () => {
  return (
    <div className="changePassword-container">
      <h6>Please enter your new password</h6>
      <form action="#" id="changePassword-form">
        <label htmlFor="oldPass">Old Password</label>

        <div className="password-control">
          <img src={lockIcon} alt="" id="icon1" />
          <input
            type="password"
            name="password"
            id="oldPass"
            placeholder="Enter old password"
          />
          <img src={LoginVisImg} alt="" id="Vicon" />
        </div>

        <label htmlFor="newPass">New Password</label>

        <div className="password-control">
          <img src={lockIcon} alt="icon" id="icon1" />
          <input
            type="password"
            name="password"
            id="newPass"
            placeholder="Enter new password"
          />
          <img src={LoginVisImg} alt="icon" id="Vicon" />
        </div>

        <label htmlFor="confirmPass">Confirm Password</label>

        <div className="password-control">
          <img src={lockIcon} alt="icon" id="icon1" />
          <input
            type="password"
            name="password"
            id="confirmPass"
            placeholder="Confirm password"
          />
          <img src={LoginVisImg} alt="icon" id="Vicon" />
        </div>

        <Button name="Save Changes" />
      </form>
    </div>
  );
};

export default ChangePassword;
