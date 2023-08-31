import "./AdminSignup.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ImaImg from "../../assets/Imacare-5.png";
import LockImg from "../../assets/lock copy.png";
import MailImage from "../../assets/mail.png";
import LoginVisImg from "../../assets/visibility_off.png";
import AdsLocation from "../../assets/location_on.png";
import AdsGroup from "../../assets/Group.png";
const AdminSignup = () => {
    const [companyName, setCompanyName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [addRess, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (companyName === "" || emailAddress === "" || addRess === "" || password === "") {
            alert("Fields cannot be empty");
            return;
            if (password === "correctPassword") { 
                setIncorrectPassword(false); 
                
                navigate("#");
            } else {
                setIncorrectPassword(true); 
            }
        }
        /*console.log(
            "companyName: ",
            companyName,
            "emailAddress: ",
            emailAddress,
            "addRess: ",
            addRess,
            "password :",
            password,
        );*/

        setCompanyName("");
        setEmailAddress("")
        setAddress("")
        setPassword("");

        navigate("#");
    };
    return (
        <div className="Admin_Signup_Page">
            <div className="Admin_Signup_Form">
                    <h1>Sign Up</h1>
                    <p id="Admin-Signup-create-account">Create an account</p>
                <form action="#" onSubmit={handleSubmit} id="admin-signup-form-body">
                    <div className="Admin_Signup_Form_Group">
                        <label>Company Name</label>
                        <div className="Admin_Signup_input_with_icon">
                            <img src={AdsGroup} alt="Icon" className="Admin_signup_icon" />
                            <input type="text" placeholder="Enter your company name" value={companyName}
                onChange={(event) => setCompanyName(event.target.value)} />
                        </div>
                    </div>

                    <div className="Admin_Signup_Form_Group">
                        <label>Email Address</label>
                        <div className="Admin_Signup_input_with_icon">
                            <img src={MailImage} alt="Icon" className="Admin_signup_icon" />
                            <input type="text" placeholder="Enter your email" value={emailAddress}
                onChange={(event) =>  setEmailAddress(event.target.value)}/>
                        </div>
                    </div>

                    <div className="Admin_Signup_Form_Group">
                        <label>Address</label>
                        <div className="Admin_Signup_input_with_icon">
                            <img src={AdsLocation} alt="Icon" className="Admin_signup_icon" />
                            <input type="text" placeholder="Enter your address"  value={addRess}
                onChange={(event) =>  setAddress(event.target.value)}/>
                        </div>
                    </div>

                    <div className="Admin_Signup_Form_Group">
                        <label>Password</label>
                        <div className={`Admin_Signup_input_with_icon ${incorrectPassword ? "incorrect" : ""}`}>
                            <img src={LockImg} alt="Icon" className="Admin_signup_icon" />
                            <input type="password" placeholder="Enter your password"  value={password}
                onChange={(event) =>  setPassword(event.target.value)}/>
                        </div>
                    </div>
                    <button id="Admin-Signup-Button">Register</button>
                    <p>By signing you agree to our <span>Terms of use</span> and <span>Privacy Policy</span></p>
                </form>
                <p id="Admin-Signup-outsideform">Already have an account?<span>Log In</span></p>

            </div>
            <div className="Admin_Signup_Image">
                <img src={ImaImg} alt="ImaCare" />

                <div className="Admin-signup-copyright">
                    <h1>Enhance patient care and streamline administrative task</h1>
                    <span>ⓒ IMACARE 2023. All Rights Reserved</span>
                </div>
            </div>
        </div>
    );

};

export default AdminSignup;
