import React from "react";
import "./TaskPage.css";
import TaskPageNav from "./TaskPageNav";
import Tasks from "./Tasks";

const TaskPage = () => {
  return (
    <div>
      <TaskPageNav />
      <Tasks />
    </div>
  );
};

export default TaskPage;
