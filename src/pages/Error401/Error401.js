import React, { useState, useEffect } from "react";
import "./Error401.scss";
import ErrorGif from "../../images/Error401.gif";
import { useNavigate } from "react-router-dom";

const Error401 = () => {
  const [timer, setTimer] = useState(6);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
      if (timer === 0) {
        navigate("/");
      }
      clearInterval(interval);
    }, 1000);
    document.title = "Compass.UOL | Error401";
    // eslint-disable-next-line
  }, [timer]);

  return (
    <div className="error-401">
      <img src={ErrorGif} alt="gif erro 401" className="error-gif" />
      <h3>Você será redirecionado em {timer} s...</h3>
    </div>
  );
};

export default Error401;
