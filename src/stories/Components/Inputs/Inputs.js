import React from "react";
import "./Inputs.scss";

import PropTypes from "prop-types";

const Inputs = (props) => {
  return (
    <div className="input-container" data-testid="input-component">
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.className}
        id={props.id}
        data-testid="input"
        style={{
          borderColor: props.border,
          color: props.textColor,
          borderRadius: props.radius,
        }}
      />
    </div>
  );
};

export default Inputs;

Inputs.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  border: PropTypes.string,
  textColor: PropTypes.string,
  onChange: PropTypes.func,
  radius: PropTypes.number,
};

Inputs.defaultProps = {
  type: "text",
  placeholder: "placeholder",
  border: null,
  textColor: null,
  onChange: undefined,
  radius: 50,
};
