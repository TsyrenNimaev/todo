import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Timer from '../Timer';

import './style.css';

export default class ItemContainer extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
  };

  state = {
    label: '',
  };

  onLabelEditing = (el) => {
    this.setState({
      label: el.target.value,
    });
  };

  onSubmitEdit = (el) => {
    el.preventDefault();
    this.props.addEditing(this.state.label);
  };

  render() {
    const { label, done, date, editing, onDeleted, onToggleDone, onEditing } = this.props;

    const classEditing = editing ? 'editing' : done ? 'completed' : 'active';

    const editInput = (
      <form className="form-change" onSubmit={this.onSubmitEdit}>
        <label>
          <input type="text" className="edit-input" defaultValue={label} onChange={this.onLabelEditing} autoFocus />
        </label>
      </form>
    );

    return (
      <li className={classEditing}>
        <div className="list-item view">
          <label className="item-label">
            <input type="checkbox" className="item-input" onChange={onToggleDone} checked={done} />
            <span className="description-task" onClick={onToggleDone}>
              {label}
            </span>
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
  }
}
