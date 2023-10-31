import "./Login.css";
import ImaImg from "../../assets/Imacare-5.png";
import GoogleImg from "../../assets/google-1.png";
import LockImg from "../../assets/lock.png";
import MailImage from "../../assets/mail.png";
import ErrorImg from "../../assets/error.png";
import LoginVisImg from "../../assets/visibility_off.png";

const Login = () => {
  return (
    <div className="login-container">
      {/* Div of the form */}
      <div className="login-leftContainer">
        {/* <h1>Hi, Welcome Back!</h1>
        <p id="login-text">Log in to your account</p> */}

        <form className="login-form">
          <h1>Hi, Welcome Back!</h1>
          <p id="login-text">Log in to your account</p>

          <div className="login-form-group">
            <label>Email Address</label>
            <div className="login-input-with-icon">
              <img src={MailImage} alt="Icon" className="login-icon" />
              <input type="text" placeholder="Enter your Email" />
            </div>
          </div>
          <div className="login-form-group">
            <label>Password</label>
            <div className="login-input-with-icon">
              <span className="login-icon">
                <img src={LockImg} alt="Icon" />
              </span>
              <input
                type="text"
                placeholder="Enter your password"
                id="login-unique-form"
              />
              <span className="login-visibility-icon">
                <img src={LoginVisImg} alt="Visibility Off" />
              </span>
            </div>
          </div>
          <p className="login-error">
            <img src={ErrorImg} id="login-error-icon" />
            wrong password
          </p>
          <div className="login-reminder">
            <div className="login-check-box">
              <input type="checkbox" id="login-remember" />
              <label htmlFor="remember" id="login-check-boxs">
                Remember Me
              </label>
            </div>
            <p>Forgot password?</p>
          </div>
          <button className="login-logging">Log in</button>
          <div className="login-horizontal-lines">
            <span className="login-lines">
              <hr></hr>
              <p className="login-or-text">Or</p>
              <hr></hr>
            </span>
          </div>
          <button id="login-google-signin">
            <img src={GoogleImg} />
            Sign in with google
          </button>

          <p className="login-account-p">
            Don't have an account? <span>Sign up</span>
          </p>
        </form>
      </div>

      {/* Div of the image */}
      <div className="login-medic-lady">
        <img src={ImaImg} alt="ImaCare" />
        <div className="login-copyright">
          <h1>Find the right healthcare provider</h1>
          <span>ⓒ IMACARE 2023. All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
