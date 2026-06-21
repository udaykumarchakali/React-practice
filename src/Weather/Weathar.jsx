import { useState, useEffect } from "react";
import "./Weathar.css";

function Weathar() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=2de202350003463c88652550261006&q=${city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <div className="weather-container">
      <h1>🌤 Weather App</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {weather && weather.location && (
        <div className="weather-info">
          <h2>{weather.location.name}</h2>
          <h3>{weather.current.temp_c}°C</h3>
          <p>{weather.current.condition.text}</p>
          <p>Humidity: {weather.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weathar;