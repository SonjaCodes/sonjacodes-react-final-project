import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function maxTemperature(unit) {
    let temperature = Math.round(props.data.temp.max);
    if (unit === "fahrenheit") {
      temperature = Math.round(temperature * (9 / 5) + 32);
    }
    return `${temperature}°`;
  }

  function minTemperature(unit) {
    let temperature = Math.round(props.data.temp.min);
    if (unit === "fahrenheit") {
      temperature = Math.round(temperature * (9 / 5) + 32);
    }
    return `${temperature}°`;
  }

  return (
    <div className="ForecastDayContainer">
      <div className="day">{day()}</div>
      <div className="forecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={38} />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-max">{maxTemperature(props.unit)}</span>
        <span className="forecast-min">{minTemperature(props.unit)}</span>
      </div>
    </div>
  );
}
