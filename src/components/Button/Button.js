import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <div className="button-container" data-testid="button-component">
      <button data-testid="button" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "Continuar",
};
