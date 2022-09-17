import React from "react";
import "./Loader.scss";

const Loader = (props) => {
  return (
    <div className="pageLoader" id={props.id}>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>
  );
};

export default Loader;
