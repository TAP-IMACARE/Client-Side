import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import pdfIcon from "../../assets/dashboard assets/pdf-icon.svg";
import uploadIcon from "../../assets/dashboard assets/upload.svg";
import deleteIcon from "../../assets/dashboard assets/delete.svg";

function createData(name, item1, item2, item3, item4, item5) {
  return { name, item1, item2, item3, item4, item5 };
}

const rows = [
  createData(
    <img src={pdfIcon} alt="icon" />,
    "Prescriptions",
    <img src={uploadIcon} alt="icon" />,
    <img src={deleteIcon} alt="icon" />
  ),
  createData(
    <img src={pdfIcon} alt="icon" />,
    "X-ray",
    <img src={uploadIcon} alt="icon" />,
    <img src={deleteIcon} alt="icon" />
  ),
  createData(
    <img src={pdfIcon} alt="icon" />,
    "EEG",
    <img src={uploadIcon} alt="icon" />,
    <img src={deleteIcon} alt="icon" />
  ),
  createData(
    <img src={pdfIcon} alt="icon" />,
    "MRI",
    <img src={uploadIcon} alt="icon" />,
    <img src={deleteIcon} alt="icon" />
  ),
  createData(
    <img src={pdfIcon} alt="icon" />,
    "Credit",
    <img src={uploadIcon} alt="icon" />,
    <img src={deleteIcon} alt="icon" />
  ),
  createData(
    <img src={pdfIcon} alt="icon" />,
    "CT Scan",
    <img src={uploadIcon} alt="icon" />,
    <img src={deleteIcon} alt="icon" />
  ),
  createData(
    <img src={pdfIcon} alt="icon" />,
    "Lab Test",
    <img src={uploadIcon} alt="icon" />,
    <img src={deleteIcon} alt="icon" />
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

const FileTable = () => {
  return (
    <>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Files</TableCell>
              <TableCell>Name </TableCell>
              <TableCell>Upload</TableCell>
              <TableCell>Delete</TableCell>
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default FileTable;
