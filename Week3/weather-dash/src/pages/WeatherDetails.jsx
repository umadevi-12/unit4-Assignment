import React, { useState } from "react";
import axios from "axios";

export default function WeatherChecker() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${id}&lon={lon}&appid={API key}`,
        {
          params: {
            q: city,
            appid: apiKey,
            units: "metric",
          },
        }
      );
      setWeather(response.data);
    } catch (e) {
      setError("City not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Weather Checker</h2>
      <input
        type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} 
         style={{ width: "100%", padding: 8, fontSize: 16 }}/>
      <button
        onClick={fetchWeather}
        style={{ marginTop: 10, padding: "8px 12px", fontSize: 16 }}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: 20 }}>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity} %</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
