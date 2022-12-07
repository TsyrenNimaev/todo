import React from 'react';

import './style.css';

const NewTaskForm = () => {
  return (
    <label className="new-task-label">
      <input
        className="input new-task-input"
        placeholder="What needs to be done?"
        autoFocus
      />
    </label>
  );
};

export default NewTaskForm;
