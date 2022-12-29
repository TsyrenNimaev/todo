import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const FilterTask = ({ filter, onFilterSwich }) => {
  const button = [
    { name: 'all', label: 'All', id: 1, ariaLabel: 'Показать всё' },
    {
      name: 'active',
      label: 'Active',
      id: 2,
      ariaLabel: 'Показать активные задачи',
    },
    {
      name: 'complited',
      label: 'Completed',
      id: 3,
      ariaLabel: 'Показать завершённые задачи',
    },
  ];

  const buttons = button.map((button) => {
    const activeButton = button.name === filter;
    const classisActive = activeButton ? 'active' : 'complited';

    return (
      <li key={button.id}>
        <button
          className={classisActive}
          type="button"
          aria-label={button.ariaLabel}
          onClick={() => {
            onFilterSwich(button.name);
          }}
        >
          {button.label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
};

FilterTask.defaultProps = {
  filter: 'all',
  onFilterSwich: () => {},
};
FilterTask.propTypes = {
  filter: PropTypes.string,
  onFilterSwich: PropTypes.func,
};

export default FilterTask;
