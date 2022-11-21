import React from "react";
import "./NewTaskForm.css";
import { ReactComponent as Cross } from "../assets/icon-cross.svg";

const NewTaskForm = () => {
  return (
    <div className="new-task-form-wrapper">
      <form className="task-form">
        <h3> Add New Task</h3>
        <label htmlFor="task-title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="task-title"
          className="form-text-input"
          placeholder="e.g. Take coffee break"
        />
        <label htmlFor="task-title" className="form-label">
          Description
        </label>
        <textarea
          name="task-title"
          className="form-text-input form-text"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
        />
        <label htmlFor="task-subtasks" className="form-label">
          Subtasks
        </label>

        <div className="task-subtasks">
          <input
            type="text"
            name="task-subtasks"
            className="form-subtasks-input"
            placeholder="e.g. Make coffee"
          />
          <Cross className="cross" />
        </div>
        <div className="task-subtasks">
          <input
            type="text"
            name="task-subtasks"
            className="form-subtasks-input"
            placeholder="e.g. Make coffee"
          />
          <Cross className="cross" />
        </div>
        <button className="add-subtask-btn">+Add New Subtask</button>
        <label htmlFor="task-title" className="form-label">
          Status
        </label>
        <select
          name="task-title"
          className="form-text-input"
          placeholder="e.g. Take coffee break"
        >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
        </select>
        <button className="create-task-btn">Create Task</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
