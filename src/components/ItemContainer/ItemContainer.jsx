import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer';
import Stopwatch from '../Stopwatch';

import './style.css';

const ItemContainer = ({ label, done, date, editing, onDeleted, onToggleDone, onEditing, addEditing, min, sec }) => {
  const [edit, setEdit] = useState('');

  const onLabelEditing = (el) => {
    setEdit(el.target.value);
  };

  const onSubmitEdit = (el) => {
    el.preventDefault();
    addEditing(edit);
    setEdit('');
  };

  const classEditing = editing ? 'editing' : done ? 'completed' : 'active';

  const editInput = (
    <form className="form-change" onSubmit={onSubmitEdit}>
      <label>
        <input type="text" className="edit-input" defaultValue={label} onChange={onLabelEditing} autoFocus />
      </label>
    </form>
  );

  return (
    <li className={classEditing}>
      <div className="list-item view">
        <label>
          <input type="checkbox" className="item-input" onChange={onToggleDone} checked={done} />
        </label>
        <label className="item-label">
          <span className="description-task" onClick={onToggleDone}>
            {label}
          </span>
          <Stopwatch min={min} sec={sec} />
          <Timer date={date} />
        </label>
        <button className="btn icon-btn icon-edit" onClick={onEditing} aria-label="edit button" title="edit"></button>
        <button
          className="btn icon-btn icon-destroy"
          onClick={onDeleted}
          aria-label="delete button"
          title="delete"
        ></button>
      </div>
      {editing && editInput}
    </li>
  );
};

ItemContainer.propTypes = {
  date: PropTypes.instanceOf(Date),
};
export default ItemContainer;
