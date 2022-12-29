import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './style.css';

const Timer = ({ date }) => {
  const [dateTimer, setDate] = useState(formatDistanceToNow(date, { includeSeconds: true, addSuffix: true }));

  //обновление с интервалом 1с
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    setDate(formatDistanceToNow(date, { includeSeconds: true, addSuffix: true }));
  };

  return <span className="create-task">{dateTimer}</span>;
};

Timer.propTypes = {
  date: PropTypes.instanceOf(Date),
};
export default Timer;
