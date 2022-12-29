import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import '../ItemContainer/style.css';
import './style.css';

export default class Stopwatch extends Component {
  static defaultProps = {
    startTimer: () => {},
    stopTimer: () => {},
    update: () => {},
  };

  static propTypes = {
    startTimer: PropTypes.func,
    stopTimer: PropTypes.func,
    update: PropTypes.func,
    min: PropTypes.number,
    sec: PropTypes.number,
    active: PropTypes.bool,
  };

  state = {
    min: this.props.min,
    sec: this.props.sec,
    active: false,
  };

  update = () => {
    const { min, sec } = this.state;
    this.setState({ min, sec: sec - 1 });
    sec === 0 && this.setState({ min: min - 1, sec: 59 });
    if (min === 0 && sec === 0) {
      this.setState({ min: 0, sec: 0 });
      clearInterval(this.interval);
    }
  };

  startTimer = () => {
    this.setState({ active: true });
    this.interval = setInterval(() => this.update(), 1000);
  };

  stopTimer = () => {
    this.setState({ active: false });
    clearInterval(this.interval);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { min, sec } = this.state;
    return (
      <span className="stopwatch">
        <button
          type="button"
          aria-label="start timer"
          title="Start timer"
          className="stopwatch-icon icon-start"
          onClick={this.startTimer}
          disabled={this.state.active}
        ></button>
        <button
          type="button"
          aria-label="stop timer"
          title="Start timer"
          className="stopwatch-icon icon-pause"
          onClick={this.stopTimer}
        ></button>
        {min} : {sec}
      </span>
    );
  }
}
