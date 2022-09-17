import React from "react";
import "./Titles.scss";
import PropTypes from "prop-types";

const Titles = (props) => {
  return (
    <p
      id={props.id}
      style={{ fontSize: props.fontSize + "em" }}
      className="title-component"
    >
      {props.text}
    </p>
  );
};

export default Titles;

Titles.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};

Titles.defaultProps = {
  text: "Title component",
  fontSize: 1,
};
