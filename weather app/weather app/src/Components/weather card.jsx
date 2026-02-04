import React from "react";

function  WeatherCard({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{data.name}</h3>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
