import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import img1 from "../../assets/dashboard assets/Ubong.svg";
import img2 from "../../assets/dashboard assets/Chinedu.svg";
import Alice from "../../assets/dashboard assets/Alice.svg";
import DataTable from "react-data-table-component";

function createData(name, item1, item2, item3, item4, item5, item6) {
  return { name, item1, item2, item3, item4, item5, item6 };
}

const rows = [
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src={img1} width={28} height={30} />
      <span>Dr. Ubong Etuk</span>
    </div>,
    "Jul 14, 2023",
    "Propofol",
    "50 mg",
    "1 tab",
    "Once-a-day (1 week)",
    <input type="checkbox" />
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src={img1} alt="avatar" width={28} height={30} />
      <span>Dr. Ubong Etuk</span>
    </div>,
    "May 26, 2023",
    "Sevoflurane",
    "25 mg",
    "1 tab",
    "Before dinner (3 months)",
    <input type="checkbox" />
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={img2} alt="avatar" width={28} height={30} />
      <span>Dr. Chinedu</span>
    </div>,
    "May 19, 2023",
    "Sevoflurane",
    "25 mg",
    "1 tab",
    "After lunch (1week)",
    <input type="checkbox" />
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={img2} alt="avatar" width={28} height={30} />
      <span>Dr. Chinedu</span>
    </div>,
    "May 19, 2023",
    "Fentanyl",
    "25 mg",
    "1 tab",
    "2 times-a-day",
    <input type="checkbox" />
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={Alice} alt="avatar" width={28} height={30} />
      <span>Dr. Alice E</span>
    </div>,
    "May 19, 2023",
    "Aspirin",
    "100 mg",
    "1 tab",
    "Once-a-day (3 weeks)",
    <input type="checkbox" />
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <img src={Alice} alt="avatar" width={28} height={30} />
      <span>Dr. Alice E</span>
    </div>,
    "May 19, 2023",
    "Aspirin",
    "100 mg",
    "1 tab",
    "Once-a-day (3 weeks)",
    <input type="checkbox" />
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src={img1} width={28} height={30} />
      <span>Dr. Ubong Etuk</span>
    </div>,
    "Jul 14, 2023",
    "Propofol",
    "50 mg",
    "1 tab",
    "Once-a-day (1 week)",
    <input type="checkbox" />
  ),
  createData(
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src={img1} width={28} height={30} />
      <span>Dr. Ubong Etuk</span>
    </div>,
    "Jul 14, 2023",
    "Propofol",
    "50 mg",
    "1 tab",
    "Once-a-day (1 week)",
    <input type="checkbox" />
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

const PrescriptionTable = () => {
  return (
    <>
      {/* <DataTable columns={columns} data={data} /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>Date </TableCell>
              <TableCell>Medicine</TableCell>
              <TableCell>Strength</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Check</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.item1}</TableCell>
                <TableCell>{row.item2}</TableCell>
                <TableCell>{row.item3}</TableCell>
                <TableCell>{row.item4}</TableCell>
                <TableCell>{row.item5}</TableCell>
                <TableCell>{row.item6}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PrescriptionTable;
