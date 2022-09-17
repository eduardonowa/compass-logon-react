import React, { useEffect } from "react";
import "./Error404.scss";
import Error404Gif from "../../images/error404.gif";

const Error404 = () => {
  useEffect(() => {
    document.title = "Compass.UOL | Error404"
  },[])
  return (
    <div className="error-404">
      <img src={Error404Gif} alt="Erro 404 Gif" className="error-gif" />
      <h2 id="not-found">Página não encontrada</h2>
    </div>
  );
};
export default Error404;
