import React from "react";
import "./Texts.scss";
import PropTypes from "prop-types";

const Texts = (props) => {
  return <p className="text-component">{props.text}</p>;
};

export default Texts;

Texts.propTypes = {
  text: PropTypes.string,
};

Texts.defaultProps = {
  text: "Text component",
};
