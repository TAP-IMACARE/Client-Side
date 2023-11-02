import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

function createData(name, item1, item2, item3, item4, item5) {
  return { name, item1, item2, item3, item4, item5 };
}

const rows = [
  createData("01.", "Debit", "₦10,000", "Jul 14, 2023", "From Card"),
  createData("02.", "Debit", "₦30,000", "May 26, 2023", "From Card"),
  createData("03.", "Credit", "₦15,000", "May 19, 2023", "From Bank"),
  createData("04.", "Debit", "₦20,000", "Mar 29, 2023", "From Card"),
  createData("05.", "Credit", "₦15,000", "Mar 08, 2023", "From Bank"),
  createData("06.", "Credit", "₦15,000", "May 19, 2023", "From Bank"),
  createData("07.", "Debit", "₦20,000", "Mar 29, 2023", "From Card"),
  createData("08.", "Debit", "₦20,000", "Mar 29, 2023", "From Card"),
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
const PaymentsTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial No</TableCell>
              <TableCell>Transaction </TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
    </div>
  );
};

export default PaymentsTable;
