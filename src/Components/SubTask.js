import React from "react";
import { ReactComponent as Cross } from "../assets/icon-cross.svg";
import "./SubTask.css";

const subTask = (props) => {
  return (
    <div>
      <input
        type="text"
        name="task-subtasks"
        className="form-subtasks-input"
        placeholder="e.g. Make coffee"
      />
      <Cross onClick={props.handleCrossClick} className="cross" />
    </div>
  );
};

export default subTask;
