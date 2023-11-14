import React from "react";
import "./Files.css";
import FileTable from "../../components/Tables/FileTable";

const Files = () => {
  return (
    <div className="files-container">
      <FileTable />

      <button>Add File</button>
    </div>
  );
};

export default Files;
