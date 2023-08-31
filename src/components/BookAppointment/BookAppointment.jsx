import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookAppointment.css";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";

const BookAppointment = () => {
  const [treatment, setTreatment] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (treatment === "" && location === "" && date === "") {
      alert("Fields cannot be empty");
      return false;
    }
    console.log(
      "treatment: ",
      treatment,
      "location :",
      location,
      "date:",
      date
    );

    setTreatment("");
    setLocation("");
    setDate("");

    navigate("schedule-appointment");
  };

  return (
    <div className="appointment">
      <h2>Book an Appointment</h2>

      <form action="#" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Treatment or Specialist"
            value={treatment}
            onChange={(event) => setTreatment(event.target.value)}
          />
          <img src={searchIcon} alt="" />
        </div>

        <div className="form-control">
          <input
            type="address"
            placeholder="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <img src={locationIcon} alt="" />
        </div>

        <div className="form-control">
          <input
            type="date"
            placeholder=""
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <button type="submit" id="BookAppointmentButton">Book Now</button>
      </form>
    </div>
  );
};

export default BookAppointment;
