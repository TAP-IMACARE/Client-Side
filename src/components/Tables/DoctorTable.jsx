import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import img1 from "../../assets/dashboard assets/Ubong.svg";
import img2 from "../../assets/dashboard assets/Chinedu.svg";

function createData(name, item1, item2, item3, item4) {
  return { name, item1, item2, item3, item4 };
}

const rows = [
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={img1} alt="avatar" width={35} height={35} />
      <span>Dr. Ubong Etuk</span>
    </div>,
    "Pathologist",
    "July 19, 2023",
    "10:00 am"
  ),
  createData(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        whiteSpace: "nowrap",
      }}
    >
      <img src={img2} alt="avatar" width={35} height={35} />
      <span>Dr. Chinedu Okeke</span>
    </div>,
    "Surgeon",
    "July 20, 2023",
    "12:00 pm"
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={img1} alt="avatar" width={35} height={35} />
      <span>Dr. Ubong Etuk</span>
    </div>,
    "Pathologist",
    "July 21, 2023",
    "10:30 am"
  ),

  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={img1} alt="avatar" width={35} height={35} />
      <span>Dr. Ubong Etuk</span>
    </div>,
    "Pathologist",
    "July 19, 2023",
    "10:00 am"
  ),
];

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
  return (
    <>
      <TableContainer>
        <Table sx={{ width: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Profile</TableCell>
              <TableCell>Service </TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow
                key={i}
                sx={{
                  whiteSpace: "nowrap",
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.item1}</TableCell>
                <TableCell>{row.item2}</TableCell>
                <TableCell>{row.item3}</TableCell>
                <TableCell>{row.item4}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DoctorTable;
