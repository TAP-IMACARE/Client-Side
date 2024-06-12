/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "./Time.css";

const Time = ({ selectedTime, onChange }) => {
  // const [value, setValue] = useState(dayjs("000"));
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker value={selectedTime} onChange={onChange} selected={true} />
      </LocalizationProvider>

      {/* <div>{selectedTime.format("hh:mm a")}</div> */}
    </>
  );
};

export default Time;
