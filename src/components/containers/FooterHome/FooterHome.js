import React, { useEffect } from "react";
import "./FooterHome.scss";

import { useNavigate } from "react-router-dom";

import Timer from "../../Timer/Timer";
import TimerHook from "../../TimerHook";

const FooterHome = () => {
  const navigate = useNavigate();
  const { timer, setTimer } = TimerHook();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      localStorage.setItem("isLogged", "");
      navigate("/");
    }
    return () => clearInterval(countdown);
    // eslint-disable-next-line
  }, [timer]);

  function handleLogout() {
    localStorage.setItem("isLogged", "");
    navigate("/");
  }

  function handleNavClick() {
    setTimer(600);
  }

  return (
    <footer>
      <div className="info-text" data-testid="footerHome-component">
        <p data-testid="info-text">
          Essa janela do navegador é usada para manter sua sessão de
          autenticação ativa. <br /> Deixe-a aberta em segundo plano e abra uma
          nova janela para continuar a navegar.
        </p>
      </div>
      <div className="refresh-text">
        <p data-testid="refresh-text">
          Application <br />
          refresh in
        </p>
      </div>
      <Timer timer={timer} />
      <button className="keep-nav" onClick={handleNavClick} data-testid="keep-nav-button">
        Continuar Navegando
      </button>
      <button className="logout" onClick={handleLogout} data-testid="logout-button">
        Logout
      </button>
    </footer>
  );
};

export default FooterHome;
