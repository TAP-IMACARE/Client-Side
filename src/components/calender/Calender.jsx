/* eslint-disable react/prop-types */
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "./Calender.css";

export default function Calendar({ onChange, value }) {
  // console.log(date);
  return (
    <div className="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          disablePast
          sx={{
            maxHeight: 300,
            // maxWidth: 400,
            // paddingBottom: "80px",
            // borderBottom: "0.5px solid #D1D1D1",
          }}
          value={value}
          onChange={onChange}
          slotProps={{
            toolbar: {
              toolbarFormat: "DD MM YYYY",
              toolbarPlaceholder: "??",
            },
          }}
          selected={true}
        />
      </LocalizationProvider>
    </div>
  );
}
