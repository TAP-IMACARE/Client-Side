import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "./Calender.css";

export default function Calendar() {
  return (
    <div className="calender">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            maxHeight: "280px",
            // paddingBottom: "80px",
            // borderBottom: "0.5px solid #D1D1D1",
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
