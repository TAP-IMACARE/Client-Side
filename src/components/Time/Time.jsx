// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "./Time.css";

const Time = () => {
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          selected={true}
        />
      </LocalizationProvider>

      <div>{value.format("hh:mm a")}</div>
    </>
  );
};

export default Time;
