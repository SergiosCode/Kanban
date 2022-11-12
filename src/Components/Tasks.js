import React from 'react';
import './Tasks.css';
import ColumnUI from './ColumnUI';


const Tasks = () => {
  return (
    <div className='tasksWrapper'>
      {/* <h3>This board is empty. Create a new column to get started.</h3>
      <button>+ Add New Column</button> */}
      <ColumnUI />
      <ColumnUI />
    </div>
  )
}

export default Tasks