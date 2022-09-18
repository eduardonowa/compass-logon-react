import React, { useState, useEffect } from "react";
import "./Weather.scss";

import Loader from "../Loader/Loader";

import Cloud from "../../images/cloud.png";
import Cloudy from "../../images/cloudy.png";
import Raining from "../../images/raining.png";
import Storm from "../../images/storm.png";
import Sun from "../../images/sun.png";

const Weather = () => {
  const [city, setCity] = useState("São Paulo");
  const [region, setRegion] = useState("SP");
  const [temp, setTemp] = useState("25");
  const [imgSrc, setImgSrc] = useState(Sun);
  const [isLoading, setIsLoading] = useState(true);

  function getWeather() {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        setRegion(data.region_code);
        let lat = data.latitude;
        let lon = data.longitude;
        fetch(
          `https://api.weatherapi.com/v1/current.json?key=b3972d7c329b490c9c1175956222706&q=${lat},${lon}`
        )
          .then((response) => response.json())
          .then((data) => {
            let temp = data.current.temp_c.toFixed(0);
            setTemp(temp);
            getWeatherIcon(data.current.condition.text);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  function getWeatherIcon(condition) {
    if (condition.includes("thunder")) {
      setImgSrc(Storm);
    } else if (condition.includes("Sun") || condition.includes("Clear")) {
      setImgSrc(Sun);
    } else if (condition.includes("Fog") || condition.includes("Mist")) {
      setImgSrc(Cloud);
    } else if (
      condition.includes("Cloudy") ||
      condition.includes("Overcast") ||
      condition.includes("cloudy")
    ) {
      setImgSrc(Cloudy);
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      setImgSrc(Raining);
    }
  }

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {}, [imgSrc]);

  return (
    <div className="weather-container" data-testid="clock-component">
      {!isLoading && (
        <div>
          <p className="city-state" data-testid="city-region">
            {city} - {region}
          </p>
          <div className="condition">
            <div className="image">
              <img src={imgSrc} alt="" data-testid="weather-img" />
            </div>
            <p className="temperature" data-testid="temperature">
              {temp}°
            </p>
          </div>
        </div>
      )}
      {isLoading && <Loader id="loader-weather" />}
    </div>
  );
};

export default Weather;
