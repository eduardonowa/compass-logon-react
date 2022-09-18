import React from "react";
import "./Timer.scss";

const Timer = (props) => {
  return (
    <div className="timer-container" data-testid="timer-component">
      <p className="time" data-testid="timer-text">{props.timer}</p>
      <p className="seconds" data-testid="seconds-text">seconds</p>
    </div>
  );
};

export default Timer;
