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
    min: '',
    sec: '',
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

  secondCount = (event) => {
    if (event.target.value.includes('+')) {
      this.setState({ sec: '' });
    } else {
      this.setState({ sec: event.target.value });
    }
  };

  minuteCount = (event) => {
    this.setState({ min: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { label, min, sec } = this.state;
    //проверяем длину поля ввода, если длина не равна 0, то добавляем новую задачу
    if (label.length !== 0) {
      this.props.onItemAdded(label, min, sec);
    }
    //очишаем поле ввода после добавления новой задачи
    this.setState({
      label: '',
      min: '',
      sec: '',
    });
  };

  render() {
    const { label, min, sec } = this.state;

    return (
      <form className="new-task-form" onSubmit={this.onSubmit}>
        <label>
          <input
            type="text"
            className="new-task-input input"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={label}
            autoFocus
          />
        </label>
        <label>
          <input
            type="number"
            className="input-min new-task-input input"
            placeholder="min"
            min="0"
            onChange={this.minuteCount}
            value={min}
          />
        </label>
        <label>
          <input
            type="number"
            className="input-sec new-task-input input"
            placeholder="sec"
            min="0"
            onChange={this.secondCount}
            value={sec}
          />
        </label>
        <input type="submit" style={{ display: 'none' }} />
      </form>
    );
  }
}
