import { format } from "date-fns";
import "./TopComponent.css";

/* eslint-disable react/prop-types */
const TopComponent = ({ header }) => {
  const day = format(new Date(), "dd");
  const month = format(new Date(), "MMMM");
  const year = format(new Date(), "yyyy");
  const time = format(new Date(), "h:mm aaa");

  return (
    <div className="home-dashbord-top">
      <h3>{header}</h3>

      <div className="dashboard-date-container">
        <span>{`${day} ${month}, ${year}`}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default TopComponent;
