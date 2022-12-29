import React from 'react';

import NewTaskForm from '../NewTaskForm';

import './style.css';

const HeaderApp = ({ onItemAdded }) => {
  return (
    <header className="header">
      <h1 className="header-todo">todos</h1>
      <NewTaskForm onItemAdded={onItemAdded} />
    </header>
  );
};

export default HeaderApp;
