import React from "react";
import "./Timer.scss";

const Timer = (props) => {
  return (
    <div className="timer-container">
      <p className="time">{props.timer}</p>
      <p className="seconds">seconds</p>
    </div>
  );
};

export default Timer;
