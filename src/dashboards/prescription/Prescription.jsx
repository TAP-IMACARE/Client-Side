import PrescriptionTable from "../../components/Tables/PrescriptionTable";
import TopComponent from "../topComponent/TopComponent";
import "./Prescription.css";

const Prescription = () => {
  return (
    <div>
      <TopComponent header={"Prescriptions"} />
      <div className="precscription-container">
        <div className="prescription-table">
          <PrescriptionTable />
        </div>
      </div>
    </div>
  );
};

export default Prescription;
