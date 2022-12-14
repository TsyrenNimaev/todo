import React, { Component } from 'react';

import './style.css';

export default class FilterTask extends Component {
  static defaultProps = {
    filter: 'all',
    filterSwich: () => {},
  };

  buttons = [
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

  render() {
    const { filter, onFilterSwich } = this.props;
    const buttons = this.buttons.map((button) => {
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
  }
}
