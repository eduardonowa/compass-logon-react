import React from "react";
import "./Texts.scss";
import PropTypes from "prop-types";

const Texts = (props) => {
  return (
    <p
      style={{ color: props.color }}
      className="text-component"
      data-testid="text-component"
    >
      {props.text}
    </p>
  );
};

export default Texts;

Texts.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Texts.defaultProps = {
  text: "Text component",
  text: null,
};
