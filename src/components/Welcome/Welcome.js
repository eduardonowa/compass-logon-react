import React from "react";
import "./Welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome" data-testid="welcome-component">
      <h1 data-testid="welcome-title">Olá,</h1>
      <p data-testid="welcome-text">
        Para continuar navegando de forma segura, efetue o login na rede
      </p>
    </div>
  );
};

export default Welcome;
