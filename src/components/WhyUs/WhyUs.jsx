import img1 from "../../assets/LandingPage assets/portrait-1.svg";
import img2 from "../../assets/LandingPage assets/portrait-2.svg";
import img3 from "../../assets/LandingPage assets/portrait-3.svg";
import arrowUp from "../../assets/LandingPage assets/arrowUp-icon.svg";
import arrowDown from "../../assets/LandingPage assets/arrowDown-icon.svg";
import { useState } from "react";
import "./WhyUs.css";

const WhyUs = () => {
  const whyUsData = [
    {
      heading: "Scalability and Growth",
      body: "Easily scale your hospital's operations as it grows, adapting the software management tool to accommodate increased patient volume and expanded services.",
      portrait: img1,
    },
    {
      heading: "Online Medical Care",
      body: "Facilitate quick response by enabling remote consultations, expanding your reach and allowing patients to receive care from the comfort of their homes.",
      portrait: img2,
    },
    {
      heading: "Enhanced Data Entry",
      body: "Digitize patient records, minimize the need for physical paperwork and documentation, leading to a more environmentally friendly and organized system.",
      portrait: img3,
    },
  ];
  const [selected, setSelected] = useState(0);

  const handleSelected = (index) => {
    setSelected(index);
  };
  return (
    <div className="whyUs-container" id="whyIMACARE">
      <div className="whyUs-top">
        <h3>
          Revolutionizing Healthcare Delivery, Efficiency, and Patient
          Experience
        </h3>
        <p>
          IMACARE is dedicated to transforming the way healthcare is delivered,
          managed, and experienced by both patients and healthcare
          professionals.
        </p>
      </div>

      <div className="whyUs-bottom">
        <div className="whyUs-left">
          {whyUsData.map((item, index) => (
            <div key={index}>
              <div
                className={selected === index ? "whyUs-left-activeContent" : ""}
              >
                <div
                  className={
                    selected === index
                      ? "whyUs-left-content_header"
                      : "whyUs-left-inactive"
                  }
                  onClick={() => handleSelected(index)}
                >
                  <h4>{item.heading}</h4>
                  <img
                    src={selected === index ? arrowUp : arrowDown}
                    alt="icon"
                  />
                </div>
                <p className={selected === index ? "" : "inactive"}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="whyUs-right">
          <img src={whyUsData[selected].portrait} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
