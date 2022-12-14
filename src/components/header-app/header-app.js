import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';

import './style.css';

export default class HeaderApp extends Component {
  render() {
    const { onItemAdded } = this.props;

    return (
      <header className="header">
        <h1 className="header-todo">todos</h1>
        <NewTaskForm onItemAdded={onItemAdded} />
      </header>
    );
  }
}
