import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import img1 from "../../assets/dashboard assets/Ubong.svg";
import img2 from "../../assets/dashboard assets/Chinedu.svg";
// import { useState } from "react";
import { Avatar, Grid } from "@mui/material";

// const rows = [
//   createData(
//     <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//       <img src={img1} alt="avatar" width={35} height={35} />
//       <span>Dr. Ubong Etuk</span>
//     </div>,
//     "Pathologist",
//     "July 19, 2023",
//     "10:00 am"
//   ),
//   createData(
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: "4px",
//         whiteSpace: "nowrap",
//       }}
//     >
//       <img src={img2} alt="avatar" width={35} height={35} />
//       <span>Dr. Chinedu Okeke</span>
//     </div>,
//     "Surgeon",
//     "July 20, 2023",
//     "12:00 pm"
//   ),
//   createData(
//     <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//       <img src={img1} alt="avatar" width={35} height={35} />
//       <span>Dr. Ubong Etuk</span>
//     </div>,
//     "Pathologist",
//     "July 21, 2023",
//     "10:30 am"
//   ),

//   createData(
//     <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//       <img src={img1} alt="avatar" width={35} height={35} />
//       <span>Dr. Ubong Etuk</span>
//     </div>,
//     "Pathologist",
//     "July 19, 2023",
//     "10:00 am"
//   ),
// ];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const DoctorTable = () => {
  const appointmentData = [
    {
      avatar: img1,
      name: "Dr. Ubong Etuk",
      portfolio: "Pathologist",
      date: "July 19, 2023",
      time: "10:00 am",
    },
    {
      avatar: img2,
      name: "Dr. Chinedu Okeke",
      portfolio: "Surgeon",
      date: "July 20, 2023",
      time: "12:00 pm",
    },
    {
      avatar: img1,
      name: "Dr. Ubong Etuk",
      portfolio: "Pathologist",
      date: "July 21, 2023",
      time: "10:30 am",
    },
    {
      avatar: img2,
      name: "Dr. Chinedu Okeke",
      portfolio: "Surgeon",
      date: "July 19, 2023",
      time: "10:00 am",
    },
  ];
  return (
    <>
      <TableContainer>
        <Table sx={{ maxxWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Service </TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointmentData.map((data, i) => (
              <StyledTableRow
                key={i}
                sx={{
                  whiteSpace: "nowrap",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Grid container alignItems={"center"} spacing={1}>
                    <Grid item>
                      <Avatar alt={data.name} src={data.avatar} />
                    </Grid>
                    <Grid item>{data.name}</Grid>
                  </Grid>
                </TableCell>
                <TableCell>{data.portfolio}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.time}</TableCell>
                {/* <TableCell>{row.item4}</TableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DoctorTable;
