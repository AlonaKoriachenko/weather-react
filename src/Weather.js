import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Vancouver",
    date: "Thursday 23:20",
    description: "Broken clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
    humidity: 64,
    wind: 3,
    temperature: 18,
  };

  return (
    <div className="row">
      <div className="col-6">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
          <li>
            Humidity: {weatherData.humidity}%, Wind: {weatherData.wind}km/h
          </li>
        </ul>
      </div>
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            id="icon"
          />
          <div>
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="./index.js" id="celsius-link" className="active">
                °C
              </a>
              |
              <a href="./index.js" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
