import "./Signup.css";
import SignupImaImg from "../../assets/Imacare-5.png";
import SignupGoogleImg from "../../assets/google-1.png";
import SignupLockImg from "../../assets/lock copy.png";
import SignupMailImage from "../../assets/mail.png";
/*import SignupErrorImg from "../../assets/error.png";*/
import SignupLoginVisImg from "../../assets/visibility_off.png";
import SignupGroup from "../../assets/Group.png";
import React, { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signup-container">
      {/* Div of the form */}
      <div className="signup-form">
        <h1>Sign Up</h1>
        <p id="signup-text">Create an account</p>
        <form className="loginForm">
          <div className="signup-form-group">
            <div id="signup-first-lastname">
              <div className="signup-name">
                <label>First Name</label>
                <div className="signup-input-with-icon">
                  <img src={SignupGroup} alt="Icon" className="signup-icon" />
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
              </div>
              <div className="signup-name">
                <label>Last Name</label>
                <div className="signup-input-with-icon">
                  <img src={SignupGroup} alt="Icon" className="signup-icon" />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="signup-form-group">
            <label>Email Address</label>
            <div className="signup-input-with-icon">
              <img
                src={SignupMailImage}
                alt="Icon"
                className="signup-icon2"
                value={email}
                onChange={handleEmailChange}
              />
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className="signup-form-group">
            <label>Password</label>
            <div className="signup-input-with-icon">
              <span className="signup-icon2">
                <img src={SignupLockImg} alt="Icon" />
              </span>
              <input
                type="text"
                placeholder="Enter your password"
                id="signup-unique-form"
                value={password}
                onChange={handlePasswordChange}
              />
              <span className="login-visibility-icon">
                <img src={SignupLoginVisImg} alt="Visibility Off" />
              </span>
            </div>
          </div>
          <div className="signup-button-teal">
            <button>Sign Up</button>
          </div>
          <p id="signup-terms">
            By signing you agree to our <span>Terms of use</span> and{" "}
            <span>Privacy Policy</span>
          </p>
          <div className="horizontal-lines">
            <hr className="horizontal-line"></hr>
            <p>Or</p>
            <hr className="horizontal-line"></hr>
          </div>

          <div id="signup-google">
            <img src={SignupGoogleImg} />
            Sign up with google
          </div>
          <div className="signup-account-p">
            <p>
              Already have an account? <span>Log In</span>
            </p>
          </div>
        </form>
      </div>
      <div className="signup-medic-img">
        <img src={SignupImaImg} alt="ImaCare" />
        <div className="login-copyright">
          <h1>
            Access quality medical care, therapy & support for you and your
            family
          </h1>
          <span>ⓒ IMACARE 2023. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};
export default Signup;
