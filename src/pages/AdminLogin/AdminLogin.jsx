import "./AdminLogin.css";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ImaImg from "../../assets/Imacare-5.png";
import ImaGroup from "../../assets/Group.png";
import ImaLock from "../../assets/lock copy.png";
import LoginVisImg from "../../assets/visibility_off.png";
import backgroundImg from "../../assets/admin-background.jpeg";
import closeImage from "../../assets/close.png";


const AdminLogin = () => {
        const [userID, setUserID] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (userID === "" && password === "") {
            alert("Fields cannot be empty");
            return false;
          }
          console.log(
            "userID: ",
            userID,
            "password :",
            password,
          );
      
          setUserID("");
          setPassword("");
      
          navigate("#");
        };
    return (
        <div className="admin-login-background">
          <div className="adminlogin-all">
            <img src={ImaImg} alt="ImaCare"  className="adminlogin-imacare"/>
    
          <form action="#" onSubmit={handleSubmit} id="admin-login-form">
          <span id="adminlogin-closeimg">
                              <img src={closeImage} alt="" />
                          </span>
            <div className="adminlogin-form">
             <label>User ID</label>
             <div className="adminlogin-input-icon">
             <img src={ImaGroup} alt="" />
              <input
                type="text"
                placeholder="Enter User ID"
                value={userID}
                onChange={(event) => setUserID(event.target.value)}
              />
              <span className="adminlogin-visibility-icon">
                              <img src={LoginVisImg} alt="Visibility Off" />
              </span>
             </div>
            </div>

            <div className="adminlogin-form">
             <label>Password</label>
             <div className="adminlogin-input-icon">
              <img src={ImaLock} alt="" />
               <input
                type="text"
                placeholder="Enter password"
                value={userID}
                onChange={(event) => setPassword(event.target.value)}
                />
                          <span className="adminlogin-visibility-icon">
                              <img src={LoginVisImg} alt="Visibility Off" />
                          </span>
             </div>
            </div>
            <p id="adminlogin-forgot">Forgot password?</p>
    
            <button type="submit" id="adminlogin-button">Log in</button>
          </form>
          <footer>Privacy policy | Terms</footer>
          </div>
        </div>
      );
}  
export default AdminLogin;
