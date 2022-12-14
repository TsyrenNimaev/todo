import React, { Component } from 'react';

import TodoList from '../todo-list';
import FooterApp from '../footer-app';

import './style.css';

export default class SectionApp extends Component {
  render() {
    const {
      todos,
      onDeleted,
      onToggleDone,
      onEditing,
      addEditing,
      onItemAdded,
      filterSelect,
      onFilterSwich,
      filter,
      clearCompleted,
    } = this.props;
    //количество активных задач
    const countActive = todos.filter((el) => !el.done).length;

    return (
      <section className="section-app">
        <TodoList
          todos={todos}
          onDeleted={onDeleted}
          onToggleDone={onToggleDone}
          onEditing={onEditing}
          addEditing={addEditing}
          onItemAdded={onItemAdded}
          filterSelect={filterSelect}
        />
        <FooterApp
          countActive={countActive}
          onToggleDone={onToggleDone}
          onFilterSwich={onFilterSwich}
          filter={filter}
          clearCompleted={clearCompleted}
        />
      </section>
    );
  }
}
