import React from 'react';
import PropTypes from 'prop-types';

import ItemContainer from '../ItemContainer';

const TodoList = ({ todos, onDeleted, onToggleDone, onEditing, addEditing, onItemAdded }) => {
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
};

TodoList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
};
TodoList.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
};
export default TodoList;
