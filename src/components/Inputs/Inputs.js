import React from "react";
import "./Inputs.scss";

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
      />
    </div>
  );
};

export default Inputs;
