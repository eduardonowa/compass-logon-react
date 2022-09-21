import React from "react";
import "./Clock.scss";

import PropTypes from "prop-types";

const Clock = (props) => {
  return (
    <div className="clock-container" style={{ color: props.color }}>
      <div data-testid="clock-date">
        <p id="hour">
          {props.hours > 9 ? props.hours : `0${props.hours}`}:
          {props.minutes > 9 ? props.minutes : `0${props.minutes}`}
        </p>
        <p id="date">
          {props.daysOfWeek}, {props.dayMonth} de {props.monthsOfYear} de{" "}
          {props.year}
        </p>
      </div>
    </div>
  );
};

export default Clock;

Clock.propTypes = {
  color: PropTypes.string,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  daysOfWeek: PropTypes.string,
  dayMonth: PropTypes.number,
  monthsOfYear: PropTypes.string,
  year: PropTypes.number,
};

Clock.defaultProps = {
  color: null,
  hours: 12,
  minutes: 0,
  daysOfWeek: "segunda-feira",
  dayMonth: 10,
  monthsOfYear: "Julho",
  year: 2022,
};
