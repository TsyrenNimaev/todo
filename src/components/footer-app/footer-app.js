import React, { Component } from 'react';

import FilterTask from '../filter-task';

import '../item-container/style.css';
import './style.css';

export default class FooterApp extends Component {
  render() {
    const { countActive, onToggleDone, onFilterSwich, filter, clearCompleted } = this.props;
    return (
      <footer className="footer-app">
        <span className="todo-count">{countActive} items left</span>
        <FilterTask
          filter={filter}
          onFilterSwich={onFilterSwich}
          onToggleDone={() => onToggleDone(this.itemProps.id)}
        />
        <button className=" btn clear-completed" aria-label="Удалить выполненные" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
