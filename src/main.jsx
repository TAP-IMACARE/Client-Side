import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScheduleAppointment from "./pages/ScheduleAppointment/ScheduleAppointment.jsx";
import Home from "./dashboards/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
// import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx";
import Overview from "./dashboards/Overview/Overview.jsx";
import Appointment from "./dashboards/appointment/Appointment.jsx";
import Prescription from "./dashboards/prescription/Prescription.jsx";
import Payments from "./dashboards/payments/Payments.jsx";
import Settings from "./dashboards/settings/Settings.jsx";
import Completed from "./dashboards/appointment/Completed.jsx";
import Upcoming from "./dashboards/appointment/Upcoming.jsx";
import Canceled from "./dashboards/appointment/Canceled.jsx";

import BookAppointment from "./dashboards/Overview/bookAppointment/BookAppointment.jsx";
import SetAppointment from "./dashboards/Overview/setAppointment/SetAppointment.jsx";

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
        // children: [
        //   {
        //     path: "book-appointment",
        //     element: <BookAppointment />,
        //   },
        // ],
      },
      {
        path: "/dashboard/appointment",
        element: <Appointment />,
        children: [
          {
            path: "upcoming",
            element: <Upcoming />,
          },
          {
            path: "completed",
            element: <Completed />,
          },
          {
            path: "canceled",
            element: <Canceled />,
          },
        ],
      },
      {
        path: "/dashboard/book-appointment",
        element: <BookAppointment />,
      },
      {
        path: "/dashboard/set-appointment",
        element: <SetAppointment />,
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
