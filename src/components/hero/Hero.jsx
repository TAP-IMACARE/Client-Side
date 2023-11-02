import { Link } from "react-router-dom";
import "./Hero.css";
// import image from "../../assets/med-doc.jpeg";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-content">
          <h1>
            Reach Patients,
            <br />
            Amplify Care
          </h1>
          <p>Your trusted hospital service provider</p>
          <Link to="#" id="hero-explore">
            <span>Explore Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
