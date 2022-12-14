import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onLabelChange: () => {},
    onSubmit: () => {},
  };

  static propTypes = {
    onLabelChange: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    //очишаем поле ввода после добавления новой задачи
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="new-task-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="input new-task-input"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}
          autoFocus
        />
      </form>
    );
  }
}
