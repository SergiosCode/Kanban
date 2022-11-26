import React, { useState } from "react";
import "./NewTaskForm.css";
import SubTask from "./SubTask";

const NewTaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  const [subTasks, setSubTasks] = useState(["", ""]);

  const handleSubmitTask = (e) => {
    e.preventDefault();

    setStatus("");
    const newTask = {
      title,
      description,
      status,
    };
    console.log(newTask);
  };

  const handleSubTask = () => {
    setSubTasks([...subTasks, ""]);
  };

  const handleCross = () => {
    setSubTasks(subTasks.slice(0, -1));
  };

  return (
    <div className="new-task-form-wrapper">
      <form className="task-form" onSubmit={handleSubmitTask}>
        <h3> Add New Task</h3>
        <label htmlFor="task-title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="task-title"
          className="form-text-input"
          placeholder="e.g. Take coffee break"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="task-title" className="form-label">
          Description
        </label>
        <textarea
          name="task-title"
          className="form-text-input form-text"
          placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="task-subtasks" className="form-label">
          Subtasks
        </label>

        <div className="tasks">
          {subTasks.map((subTask) => (
            <SubTask handleCrossClick={handleCross} />
          ))}
        </div>
        <button onClick={handleSubTask} className="add-subtask-btn">
          +Add New Subtask
        </button>
        <label htmlFor="task-title" className="form-label">
          Status
        </label>
        <select
          name="task-title"
          onChange={(e) => setStatus(e.target.value)}
          className="form-text-input"
          placeholder="e.g. Take coffee break">
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button className="create-task-btn" onSubmit={handleSubmitTask}>
          Create Task
        </button>
      </form>
    </div>
  );
};

export default NewTaskForm;
