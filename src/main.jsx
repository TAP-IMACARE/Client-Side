import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScheduleAppointment from "./pages/ScheduleAppointment/ScheduleAppointment.jsx";
import Login from "./pages/Login/Login.jsx"
import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";
import AdminSignup from "./pages/AdminSignup/AdminSignup.jsx";
// import Signup from "./pages/Signup/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "schedule-appointment",
    element: <ScheduleAppointment />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin-login",
    element: <AdminLogin />,
  },
  {
    path: "admin-signup",
    element: <AdminSignup />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
