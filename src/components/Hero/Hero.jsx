import BookAppointment from "../BookAppointment/BookAppointment";
import "./Hero.css";
// import image from "../../assets/med-doc.jpeg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>
            Quality Healthcare
            <br />
            Solution for Everyone
          </h1>
          <p>
            We are committed to providing exceptional <br />
            healthcare services for you
          </p>
        </div>
      </div>
      <BookAppointment />
    </>
  );
};

export default Hero;
