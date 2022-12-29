import React from 'react';
import PropTypes from 'prop-types';

import FilterTask from '../FilterTask';

import '../ItemContainer/style.css';
import './style.css';

const FooterApp = ({ countActive, onToggleDone, onFilterSwich, filter, clearCompleted }) => {
  return (
    <footer className="footer-app">
      <span className="todo-count">{countActive} items left</span>
      <FilterTask filter={filter} onFilterSwich={onFilterSwich} onToggleDone={() => onToggleDone(this.itemProps.id)} />
      <button className=" btn clear-completed" aria-label="Удалить выполненные" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

FooterApp.defaultProps = { filter: 'all', onFilterSwich: () => {}, clearCompleted: () => {}, countActive: () => {} };
FooterApp.propTypes = {
  filter: PropTypes.string,
  onToggleDone: PropTypes.func,
  clearCompleted: PropTypes.func,
  countActive: PropTypes.number,
};

export default FooterApp;
