import { Outlet } from "react-router-dom";
import Navbar from "../../../components/DashboardNav/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./Home.css";

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
