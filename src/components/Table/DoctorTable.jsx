import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import img1 from "../../assets/dashboard assets/Ubong.svg";
import img2 from "../../assets/dashboard assets/Chinedu.svg";

const DoctorTable = () => {
  const tableData = [
    {
      profile: "Dr Ubong Etuk",
      avatar: img1,
      service: "Pathologist",
      date: "July 19, 2023",
      time: "10:00am",
    },
    {
      profile: "Dr Chinedu Okeke",
      avatar: img2,
      service: "Surgeon",
      date: "July 20, 2023",
      time: "12:00pm",
    },
    {
      profile: "Dr Ubong Etuk",
      avatar: img1,
      date: "July 21, 2023",
      time: "10:00am",
    },
    {
      profile: "Dr Chinedu Okeke",
      avatar: img2,
      service: "Surgeon",
      date: "July 22, 2023",
      time: "01:00pm",
    },
  ];
  return (
    // <TableContainer component={Paper}>
    //   <Table arial-label="table" border></Table>
    //   <TableHead>
    //     <TableRow>
    //       <TableCell>Profile</TableCell>
    //       <TableCell>Service</TableCell>
    //       <TableCell>Date</TableCell>
    //       <TableCell>Time</TableCell>
    //     </TableRow>
    //   </TableHead>
    //   <TableBody>
    //     {tableData.map((row, id) => (
    //       <TableRow
    //         key={id}
    //         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //       >
    //         <TableCell
    //           sx={{
    //             justifyContent: "center",
    //             alignItems: "center",
    //             width: "200px",
    //           }}
    //         >
    //           <img src={row.avatar} alt="picture" />
    //           {row.profile}
    //         </TableCell>
    //         <TableCell>{row.service}</TableCell>
    //         <TableCell>{row.date}</TableCell>
    //         <TableCell>{row.time}</TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    // </TableContainer>
    <table>
      <thead>
        <tr>
          <th>Profile</th>
          <th>Service</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default DoctorTable;
