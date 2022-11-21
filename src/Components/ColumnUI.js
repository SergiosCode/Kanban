import React from "react";
import "./ColumnUI.css";
import TaskUI from "./TaskUI";

const ColumnUI = () => {
  return (
    <div className="column-wrapper">
      <div className="column-header">
        <div className="task-color"></div>
        <h4>TODO (6)</h4>
      </div>
      <TaskUI />
      <TaskUI />
      <TaskUI />
      <TaskUI />
    </div>
  );
};

export default ColumnUI;
