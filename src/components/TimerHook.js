import { useState } from "react";

const TimerHook = () => {
  const [timer, setTimer] = useState(600);
  return { timer, setTimer };
};

export default TimerHook;
