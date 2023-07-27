import { useState } from "react";
import "./WhyChooseUs.css";
import arrowUpIcon from "../../assets/arrowUp-icon.svg";
import arrowDownIcon from "../../assets/arrowDown-icon.svg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const data = [
  {
    heading: "Commitment to Excellence",
    body: "Our dedicated team of skilled healthcare professionals, including renowned doctors, nurses, and support staff, are driven by a passion for excellence.",
    poster: image1,
  },
  {
    heading: "Comprehensive Medical Services",
    body: "Whether you require routine healthcare, specialized treatments, or complex surgical procedures, our expert team is equipped with the knowledge, experience, and advanced technology to meet your unique healthcare needs.",
    poster: image2,
  },
  {
    heading: "Skilled and Compassionate Healthcare Professionals",
    body: "Our healthcare professionals possess exceptional expertise in their respective fields, updated with the latest medical advancements and are known for their empathy, and dedication to patient care.",
    poster: image3,
  },
  {
    heading: "Patient-Centered Approach",
    body: "We actively involve our patients in their care plans, ensuring that they have a clear understanding of their condition, treatment options, and ongoing healthcare management.",
    poster: image4,
  },
];
const WhyChooseUs = () => {
  const [selected, setSelected] = useState(0);

  const handleToggle = (i) => {
    setSelected(i);
  };
  return (
    <div className="whyChooseUs-container">
      <div className="whyChooseUs">
        <h2>Why Choose Us</h2>
        <p>
          Here are several compelling reasons why we believe{" "}
          <span style={{ color: "#005E5D" }}>IMACARE</span> should be your top
          choice for exceptional healthcare
        </p>
      </div>

      <div className="bottom-content">
        <div className="left-content-wrapper">
          {data.map((item, i) => (
            <div key={i}>
              <div
                className={
                  selected === i ? "active-content" : "inactive-content"
                }
              >
                <div
                  className="content-header"
                  id="content-header1"
                  onClick={() => handleToggle(i)}
                >
                  <h3>{item.heading}</h3>
                  <img
                    src={selected === i ? arrowUpIcon : arrowDownIcon}
                    alt="icon"
                    id="arrowUp"
                  />
                </div>

                <div className={selected === i ? "content-body" : "inactive"}>
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
          {/* 
          <div className="inactive-content">
            <div className="content-header" id="content-header1">
              <h3>Comprehensive Medical Services</h3>
              <img src={arrowUpIcon} alt="icon" id="arrowUp" />
            </div>
            <div className="content-header" id="content-header1">
              <h3>Skilled and Compassionate Healthcare Professionals</h3>
              <img src={arrowUpIcon} alt="icon" id="arrowUp" />
            </div>
            <div className="content-header" id="content-header1">
              <h3>Patient-Centered Approach</h3>
              <img src={arrowUpIcon} alt="icon" id="arrowUp" />
            </div>
          </div> */}
        </div>

        <div className="right-content">
          <img src={data[selected].poster} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
