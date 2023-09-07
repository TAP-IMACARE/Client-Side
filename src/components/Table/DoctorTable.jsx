// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
// } from "@mui/material";
import img1 from "../../assets/dashboard assets/Ubong.svg";
import img2 from "../../assets/dashboard assets/Chinedu.svg";
import DataTable from "react-data-table-component";

const DoctorTable = () => {
  const columns = [
    {
      name: "Profile",
      selector: (row) => row.profile,
    },
    {
      name: "Service",
      selector: (row) => row.service,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
  ];

  const data = [
    {
      id: 1,
      profile: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img1} alt="avatar" width={35} height={35} />
          <span>Dr. Ubong Etuk</span>
        </div>
      ),
      service: "Pathologist",
      date: "July 19, 2023",
      time: "10:00 am",
    },
    {
      id: 2,
      profile: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img2} alt="avatar" width={35} height={35} />
          <span>Dr. Chinedu Okeke</span>
        </div>
      ),
      service: "Surgeon",
      date: "July 20, 2023",
      time: "12:00 pm",
    },
    {
      id: 3,
      profile: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img1} alt="avatar" width={35} height={35} />
          <span>Dr. Ubong Etuk</span>
        </div>
      ),
      service: "Pathologist",
      date: "July 21, 2023",
      time: "10:30 am",
    },

    {
      id: 4,
      profile: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img2} alt="avatar" width={35} height={35} />
          <span>Dr. Chinedu Okeke</span>
        </div>
      ),
      service: "Surgeon",
      date: "July 31, 2023",
      time: "10:00 am",
    },
  ];

  const customStyles = {
    rows: {
      style: {
        // marginLeft: "-20px",
      },
    },
  };
  return (
    <>
      <DataTable columns={columns} data={data} customStyles={customStyles} />
    </>
  );
};

export default DoctorTable;
