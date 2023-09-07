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
import Home from "./pages/Dashboards/Home/Home.jsx";
// import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx";
import Overview from "./dashboards/Overview/Overview.jsx";
import Appointment from "./dashboards/appointment/Appointment.jsx";
import Prescription from "./dashboards/prescription/Prescription.jsx";
import Payments from "./dashboards/payments/Payments.jsx";
import Settings from "./dashboards/settings/Settings.jsx";

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
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Overview />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "prescription",
        element: <Prescription />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
