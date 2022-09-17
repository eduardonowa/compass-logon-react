import React from "react";
import "./Inputs.scss";

const Inputs = (props) => {
  return (
    <div className="input-container">
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.className}
        id={props.id}
      />
    </div>
  );
};

export default Inputs;
