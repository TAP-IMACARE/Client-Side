import React from "react";
import "./Plans.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Free from "./Free";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PlansMobile = () => {
  return (
    <div className="plans-container-mobile">
      <h3>Select The Perfect Plan For You</h3>
      <Carousel
        responsive={responsive}
        ssr={true}
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <Free />
        </div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      ;
    </div>
  );
};

export default PlansMobile;
