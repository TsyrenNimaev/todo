import React from 'react';

import NewTaskForm from '../new-task-form';

import './style.css';

const HeaderApp = () => {
  return (
    <header className="header">
      <h1 className="header-todo">todos</h1>
      <NewTaskForm />
    </header>
  );
};

export default HeaderApp;
