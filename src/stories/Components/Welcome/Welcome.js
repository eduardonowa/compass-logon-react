import React from "react";
import "./Welcome.scss";

import PropTypes from "prop-types";

const Welcome = (props) => {
  return (
    <div
      className="welcome"
      data-testid="welcome-component"
      style={{ color: props.color }}
    >
      <h1 data-testid="welcome-title">{props.title}</h1>
      <p data-testid="welcome-text">{props.text} </p>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Welcome.defaultProps = {
  title: "Olá,",
  text: "Para continuar navegando de forma segura, efetue o login na rede",
};
