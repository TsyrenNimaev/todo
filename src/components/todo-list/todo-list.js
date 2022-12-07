import React from 'react';

import ItemContainer from '../item-container';

import './style.css';

const TodoLIst = () => {
  return (
    <ul className="todo-list">
      <li className="list-item">
        <ItemContainer label="Completed task" completed />
        <ItemContainer label="Editing task" edit />
        <ItemContainer label="Active task" active />
      </li>
    </ul>
  );
};

export default TodoLIst;
