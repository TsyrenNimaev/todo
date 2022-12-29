import React from 'react';

import TodoList from '../TodoList';
import FooterApp from '../Footer';

import './style.css';

const SectionApp = ({
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
}) => {
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
  // }
};
export default SectionApp;
