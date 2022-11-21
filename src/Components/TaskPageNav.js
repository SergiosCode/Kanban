import React, { useState } from "react";
import "./TaskPageNav.css";
import NewTaskForm from "./NewTaskForm";

const TaskPageNav = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleTaskPageNavClick = (e) => {
    setIsFormOpen(true);
  };

  return (
    <div className="taskPageNavWrapper">
      {isFormOpen && <NewTaskForm />}

      <h1>Platform Launch</h1>
      <button onClick={handleTaskPageNavClick}>+ Add New Task</button>
    </div>
  );
};

export default TaskPageNav;
