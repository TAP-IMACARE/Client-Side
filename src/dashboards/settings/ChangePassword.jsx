// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import lockIcon from "../../assets/dashboard assets/lockIcon.png";
import LoginVisImg from "../../assets/visibility_off.png";
import on from "../../assets/visibility_on.png";
import "./ChangePassword.css";
import Button from "../../components/Button/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      toast.warning("All fields must be filled");
      return false;
    } else if (newPassword !== confirmPassword) {
      toast.warning("New password must match Confirm password..!!");
      return false;
    } else {
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

      toast.success("Changes saved");
    }
  };

  return (
    <div className="changePassword-container">
      <ToastContainer position="top-center" autoClose={2000} />
      <h6>Please enter your new password</h6>
      <form action="#" id="changePassword-form" onSubmit={handleSubmit}>
        <label htmlFor="oldPass">Old Password</label>

        <div className="password-control">
          <img src={lockIcon} alt="" id="icon1" />
          <input
            type={!showOldPassword ? "password" : "text"}
            name="password"
            id="oldPass"
            placeholder="Enter old password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <img
            src={showOldPassword ? on : LoginVisImg}
            alt="icon"
            id="Vicon"
            onClick={() => {
              setShowOldPassword(!showOldPassword);
            }}
          />
        </div>

        <label htmlFor="newPass">New Password</label>

        <div className="password-control">
          <img src={lockIcon} alt="icon" id="icon1" />
          <input
            type={!showNewPassword ? "password" : "text"}
            name="password"
            id="newPass"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <img
            src={showNewPassword ? on : LoginVisImg}
            alt="icon"
            id="Vicon"
            onClick={() => {
              setShowNewPassword(!showNewPassword);
            }}
          />
        </div>

        <label htmlFor="confirmPass">Confirm Password</label>

        <div className="password-control">
          <img src={lockIcon} alt="icon" id="icon1" />
          <input
            type={!showConfirmPassword ? "password" : "text"}
            name="password"
            id="confirmPass"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <img
            src={showConfirmPassword ? on : LoginVisImg}
            alt="icon"
            id="Vicon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>

        <Button name="Save Changes" />
      </form>
    </div>
  );
};

export default ChangePassword;
