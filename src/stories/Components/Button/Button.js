import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div className="button-container" data-testid="button-component">
      <button
        style={{ color: props.color, background: props.backgroundColor }}
        data-testid="button"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  background: null,
  color: null,
  onClick: undefined,
  text: "Continuar",
};
