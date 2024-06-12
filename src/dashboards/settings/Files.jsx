// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Files.css";
import FileTable from "../../components/Tables/FileTable";
import Button from "../../components/Button/Button";

const Files = () => {
  return (
    <div className="files-container">
      <FileTable />

      <Button name={"Add File"} />
    </div>
  );
};

export default Files;
