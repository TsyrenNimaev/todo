import React from 'react';

import '../item-container/style.css';
import './style.css';

const FooterApp = () => {
  return (
    <footer className="footer-app">
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        <li className="filters-item">
          <button className=" btn filters-btn selected">All</button>
        </li>
        <li className="filters-item">
          <button className=" btn filters-btn">Active</button>
        </li>
        <li className="filters-item">
          <button className=" btn filters-btn">Complited</button>
        </li>
      </ul>
      <button className=" btn clear-completed">Clear completed</button>
    </footer>
  );
};

export default FooterApp;
