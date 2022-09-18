import React from "react";
import "./Loader.scss";

const Loader = (props) => {
  return (
    <div className="pageLoader" id={props.id} data-testid="loader-component">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>
  );
};

export default Loader;
