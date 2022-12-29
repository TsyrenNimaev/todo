import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Stopwatch = ({ min, sec }) => {
  const [active, setActive] = useState(false);
  const [[minute, second], setTime] = useState([min, sec]);

  const update = () => {
    if (!active) return;
    if (minute === 0 && second === 0) {
      setActive(true);
    } else if (second === 0) {
      setTime([minute - 1, 59]);
    } else {
      setTime([minute, second - 1]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => update(), 1000);
    return () => clearInterval(interval);
  });

  return (
    <span className="stopwatch">
      <button
        type="button"
        aria-label="start timer"
        title="Start timer"
        className="stopwatch-icon icon-start"
        onClick={() => setActive(true)}
      ></button>
      <button
        type="button"
        aria-label="stop timer"
        title="Start timer"
        className="stopwatch-icon icon-pause"
        onClick={() => setActive(false)}
      ></button>
      {min} : {sec}
    </span>
  );
};

Stopwatch.defaultProps = {
  startTimer: () => {},
  stopTimer: () => {},
  update: () => {},
};

Stopwatch.propTypes = {
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
  update: PropTypes.func,
  min: PropTypes.number,
  sec: PropTypes.number,
  active: PropTypes.bool,
};
export default Stopwatch;
