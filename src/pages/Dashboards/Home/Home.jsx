import { Outlet } from "react-router-dom";
import Navbar from "../../../components/DashboardNav/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Overview from "../../../dashboards/Overview/Overview";
import "./Home.css";

// import addIcon from "../../../assets/dashboard assets/add.svg";
// import requestIcon from "../../../assets/dashboard assets/RequestHome-icon.svg";
// import rightArrow from "../../../assets/dashboard assets/rightArrow-icon.svg";
// import leftArrow from "../../../assets/dashboard assets/leftArrow-icon.svg";
// import avatar1 from "../../../assets/dashboard assets/Alice.svg";
// import avatar2 from "../../../assets/dashboard assets/Bisola.svg";
// import avatar3 from "../../../assets/dashboard assets/Ubong.svg";
// import pdf from "../../../assets/dashboard assets/pdf-icon.svg";
// import download from "../../../assets/dashboard assets/download-icon.svg";
// import whiteArrow from "../../../assets/dashboard assets/whiteArrow-icon.svg";
// import Calendar from "../../../components/calender/Calender";
// import DoctorTable from "../../../components/Table/DoctorTable";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-dashboard">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
