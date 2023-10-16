import "./TopComponent.css";

/* eslint-disable react/prop-types */
const TopComponent = ({ header }) => {
  return (
    <div className="home-dashbord-top">
      <h3>{header}</h3>

      <div className="dashboard-date-container">
        <span>14 July, 2023</span>
        <span>9:12am</span>
      </div>
    </div>
  );
};

export default TopComponent;
