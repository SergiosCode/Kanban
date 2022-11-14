import React, { useState } from "react";
import "./Tasks.css";
import ColumnUI from "./ColumnUI";

const Tasks = () => {
  const [columns, setColumns] = useState([]);

  const handleColumn = () => {
    setColumns([...columns, <ColumnUI />]);
    console.log(columns);
  };
  return (
    <div className="tasksWrapper">
      {columns}
      {columns.length === 0 ? (
        <div className="tasksWrapper center">
          <h3>This board is empty. Create a new column to get started.</h3>

          <button onClick={handleColumn} className="tasksWrapperButton">
            + Add New Column
          </button>
        </div>
      ) : (
        <button onClick={handleColumn} className="ghost-button">
          + Add New Column
        </button>
      )}
    </div>
  );
};

export default Tasks;
