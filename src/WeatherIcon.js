import "./Weather.css";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": { state: "sunny" },
    "clear-sky-night": { state: "clear-night" },
    "few-clouds-day": { state: "partlycloudy" },
    "few-clouds-night": { state: "partlycloudy" },
    "scattered-clouds-day": { state: "partlycloudy" },
    "scattered-clouds-night": { state: "partlycloudy" },
    "broken-clouds-day": { state: "cloudy" },
    "broken-clouds-night": { state: "cloudy" },
    "shower-rain-day": { state: "pouring" },
    "shower-rain-night": { state: "pouring" },
    "rain-day": { state: "rainy" },
    "rain-night": { state: "rainy" },
    "thunderstorm-day": { state: "lightning-rainy" },
    "thunderstorm-night'": { state: "lightning-rainy" },
    "snow-day": { state: "snowy" },
    "snow-night": { state: "snowy" },
    "mist-day": { state: "fog" },
    "mist-night": { state: "fog" },
  };
  return <WeatherSvg state={codeMapping[props.code].state} />;
}
