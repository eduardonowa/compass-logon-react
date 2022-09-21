import React from "react";
import "./Titles.scss";
import PropTypes from "prop-types";

const Titles = (props) => {
  return (
    <p
      id={props.id}
      style={{ fontSize: props.fontSize + "em", color: props.color }}
      className="title-component"
      data-testid="title-component"
    >
      {props.text}
    </p>
  );
};

export default Titles;

Titles.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

Titles.defaultProps = {
  text: "Title component",
  text: null,
  fontSize: 1,
};
