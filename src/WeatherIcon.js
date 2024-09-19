import "./Weather.css";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": { state: "sunny" },
    "01n": { state: "clear-night" },
    "02d": { state: "partlycloudy" },
    "02n": { state: "partlycloudy" },
    "03d": { state: "partlycloudy" },
    "03n": { state: "partlycloudy" },
    "04d": { state: "cloudy" },
    "04n": { state: "cloudy" },
    "09d": { state: "pouring" },
    "09n": { state: "pouring" },
    "10d": { state: "rainy" },
    "10n": { state: "rainy" },
    "11d": { state: "lightning-rainy" },
    "11n'": { state: "lightning-rainy" },
    "13d": { state: "snowy" },
    "13n": { state: "snowy" },
    "50d": { state: "fog" },
    "50n": { state: "fog" },
  };
  return <WeatherSvg state={codeMapping[props.code].state}/>;
}
