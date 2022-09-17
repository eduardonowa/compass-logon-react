import React from "react";
import "./HeaderHome.scss";

import Logo from "../../../images/compassuol-logo-black.png";
import Clock from "../../../components/Clock/Clock";
import Weather from "../../../components/Weather/Weather";

const HeaderHome = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={Logo} alt="logo compass black" id="compass-black" />
      </div>
      <Clock />
      <Weather />
    </header>
  );
};

export default HeaderHome;
