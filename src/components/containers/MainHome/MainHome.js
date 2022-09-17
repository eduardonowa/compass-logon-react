import React from "react";
import "./MainHome.scss";

import Titles from "../../../components/Titles/Titles";
import Texts from "../../../components/Text/Texts";
import Ball from "../../../images/compass.png";
import SlashBall from "../../../images/uol-ball-slash.png";

const MainHome = () => {
  return (
    <main>
      <div className="left-main">
        <img src={Ball} alt="compass ball" id="ball" />
        <img src={SlashBall} alt="compass slashed ball" id="slashed-ball" />
      </div>
      <div className="right-main">
        <Titles text="Our mission is" fontSize={2} id="title-small" />
        <Texts text="Nossa missão é" />
        <Titles text="to transform the world" fontSize={3} id="title-big" />
        <Texts text="transformar o mundo" />
        <Titles
          text="building digital experiences"
          fontSize={3}
          id="title-big"
        />
        <Texts text="construindo experiências digitais" />
        <Titles
          text="that enable our client’s growth"
          fontSize={3}
          id="title-big"
        />
        <Texts text="que permitam o crescimento dos nossos clientes" />
      </div>
    </main>
  );
};

export default MainHome;
