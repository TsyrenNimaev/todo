import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './style.css';

export default class Timer extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
  };

  state = {
    date: formatDistanceToNow(this.props.date, {
      includeSeconds: true,
      addSuffix: true,
    }),
  };

  //обновление с интервалом 1с
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //сбрасываем таймер при удалении элемента
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: formatDistanceToNow(this.props.date, {
        includeSeconds: true,
        addSuffix: true,
      }),
    });
  }

  render() {
    return <span className="create-task">created {this.state.date}</span>;
  }
}
