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
    //убираем пробелы в начале строки
    if (event.target.value.charAt(0) !== ' ') {
      this.setState({
        label: event.target.value,
      });
    } else {
      this.setState({
        label: '',
      });
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    //проверяем длину поля ввода, если длина не равна 0, то добавляем новую задачу
    if (this.state.label.length !== 0) {
      this.props.onItemAdded(this.state.label);
    }
    //очишаем поле ввода после добавления новой задачи
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="new-task-form" onSubmit={this.onSubmit}>
        <label>
          <input
            type="text"
            className="input new-task-input"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={this.state.label}
            autoFocus
          />
        </label>
      </form>
    );
  }
}
