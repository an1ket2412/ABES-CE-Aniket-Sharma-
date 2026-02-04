import React, { useState } from "react";
import WeatherCard from "./Components/weather card.jsx";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "91d57cf64a31415ea2d95254251311"; // ← replace with your OpenWeatherMap key

  const getWeather = async () => {
    if (!city) return alert("Please enter a city name!");
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=91d57cf64a31415ea2d95254251311&q=London&days=1&aqi=no&alerts=no`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather App using Props 🌦️</h2>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>

      {weather && weather.main && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
