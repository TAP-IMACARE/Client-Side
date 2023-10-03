import img1 from "../../assets/dashboard assets/Ubong.svg";
import img2 from "../../assets/dashboard assets/Chinedu.svg";
import Alice from "../../assets/dashboard assets/Alice.svg";
import DataTable from "react-data-table-component";

const PrescriptionTable = () => {
  const columns = [
    {
      name: "Doctor",
      selector: (row) => row.doctor,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Medicine",
      selector: (row) => row.medicine,
    },
    {
      name: "Strength",
      selector: (row) => row.strength,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Time",
      selector: (row) => row.time,
    },
    {
      name: "Check",
      selector: (row) => row.check,
    },
  ];

  const data = [
    {
      id: 1,
      doctor: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img1} alt="avatar" width={28} height={30} />
          <span>Dr. Ubong Etuk</span>
        </div>
      ),
      date: "Jul 14, 2023",
      medicine: "Propofol",
      strength: "50 mg",
      amount: "1 tab",
      time: "Once-a-day (1 week)",
      check: <input type="checkbox" />,
    },
    {
      id: 2,
      doctor: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img1} alt="avatar" width={28} height={30} />
          <span>Dr. Ubong Etuk</span>
        </div>
      ),
      date: "May 26, 2023",
      medicine: "Sevoflurane",
      strength: "25 mg",
      amount: "1 tab",
      time: "Before dinner (3 months)",
      check: <input type="checkbox" />,
    },
    {
      id: 3,
      doctor: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img2} alt="avatar" width={28} height={30} />
          <span>Dr. Chinedu</span>
        </div>
      ),
      date: "May 19, 2023",
      medicine: "Sevoflurane",
      strength: "25 mg",
      amount: "1 tab",
      time: "After lunch (1week)",
      check: <input type="checkbox" />,
    },
    {
      id: 4,
      doctor: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={img2} alt="avatar" width={28} height={30} />
          <span>Dr. Chinedu</span>
        </div>
      ),
      date: "May 19, 2023",
      medicine: "Fentanyl",
      strength: "25 mg",
      amount: "1 tab",
      time: "2 times-a-day",
      check: <input type="checkbox" />,
    },
    {
      id: 5,
      doctor: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={Alice} alt="avatar" width={28} height={30} />
          <span>Dr. Alice E</span>
        </div>
      ),
      date: "May 19, 2023",
      medicine: "Aspirin",
      strength: "100 mg",
      amount: "1 tab",
      time: "Once-a-day (3 weeks)",
      check: <input type="checkbox" />,
    },
    {
      id: 6,
      doctor: (
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img src={Alice} alt="avatar" width={28} height={30} />
          <span>Dr. Alice E</span>
        </div>
      ),
      date: "May 19, 2023",
      medicine: "Aspirin",
      strength: "100 mg",
      amount: "1 tab",
      time: "Once-a-day (3 weeks)",
      check: <input type="checkbox" />,
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default PrescriptionTable;
