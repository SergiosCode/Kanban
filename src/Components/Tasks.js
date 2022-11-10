import React from 'react';
import './Tasks.css';

import TaskUI from './TaskUI';

const Tasks = () => {
  return (
    <div className='tasksWrapper'>
      {/* <h3>This board is empty. Create a new column to get started.</h3>
      <button>+ Add New Column</button> */}
      <TaskUI />
    </div>
  )
}

export default Tasks