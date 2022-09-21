import React from "react";
import "./Weather.scss";

import PropTypes from "prop-types";

const Weather = (props) => {
  return (
    <div
      className="weather-container"
      data-testid="clock-component"
      style={{ color: props.color }}
    >
      <div>
        <p className="city-state" data-testid="city-region">
          {props.city} - {props.region}
        </p>
        <div className="condition">
          <div className="image">
            <img src={props.image} alt="" data-testid="weather-img" />
          </div>
          <p className="temperature" data-testid="temperature">
            {props.temp}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;

Weather.propTypes = {
  city: PropTypes.string,
  region: PropTypes.string,
  temp: PropTypes.number,
  image: PropTypes.string,
};

Weather.defaultProps = {
  city: "São Paulo",
  region: "SP",
  temp: 20,
  image: null,
};
