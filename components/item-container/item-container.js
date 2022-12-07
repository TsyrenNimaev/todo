import React from 'react';

import './style.css';

const ItemContainer = ({ label, completed, edit }) => {
  const styleCompleted = {
    color: completed ? '#cdcdcd' : 'black',
    textDecoration: completed ? 'line-through' : 'none',
  };
  const styleEdit = {
    opacity: edit ? '0' : '1',
    position: 'relative',
  };

  const styleEditInput = {
    opacity: edit ? '1' : '0',
    position: 'absolute',
    zIndex: edit ? '10' : '-1',
  };

  return (
    <div>
      <input
        type="text"
        value="Editing task"
        className="edit-input"
        style={styleEditInput}
      />
      <div className="item-container" style={styleEdit}>
        <input type="checkbox" className="item-input" />
        <label className="item-label">
          <span className="description-task" style={styleCompleted}>
            {label}
          </span>
          <span className="create-task">created 5 minutes ago</span>
        </label>
        <button className="btn icon-btn icon-edit"></button>
        <button className="btn icon-btn icon-destroy"></button>
      </div>
    </div>
  );
};

export default ItemContainer;
