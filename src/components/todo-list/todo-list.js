import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemContainer from '../item-container';

export default class TodoList extends Component {
  static defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
  };
  static propTypes = {
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
  };

  render() {
    const {
      todos,
      onDeleted,
      onToggleDone,
      onEditing,
      addEditing,
      onItemAdded,
    } = this.props;

    const listItems = todos.map((item) => {
      const { ...itemProps } = item;
      return (
        <ItemContainer
          {...itemProps}
          key={itemProps.id}
          onDeleted={() => onDeleted(itemProps.id)}
          onToggleDone={() => onToggleDone(itemProps.id)}
          onEditing={() => onEditing(itemProps.label)}
          addEditing={(text) => addEditing(text, itemProps.id)}
          onItemAdded={onItemAdded}
        />
      );
    });
    return <ul className="todo-list">{listItems}</ul>;
  }
}
