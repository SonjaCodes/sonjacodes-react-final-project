import "./Weather.css";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import axios from "axios";
import { useState } from "react";
import { DateTime } from "luxon";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherOutput, setWeatherOutput] = useState({ ready: false });

  function displayWeatherOutput(response) {
    setWeatherOutput({
      city: response.data.name,
      coordinates: response.data.coord,
      date: DateTime.utc()
        .plus({ hours: response.data.timezone / 3600 })
        .toFormat("cccc, dd LLL yyyy 'at' HH:mm"),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6782253072f7d90462731a624097fc54";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherOutput);
  }

  if (weatherOutput.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            class="search-form-input"
            autoFocus="on"
            onChange={updateCity}
          />
          <input className="search-button" type="submit" value="Search" />
        </form>
        <WeatherDetails data={weatherOutput} />
        <hr />
        <Forecast coordinates={weatherOutput.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
