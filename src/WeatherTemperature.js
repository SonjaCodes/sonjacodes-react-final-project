import "./Weather.css";

export default function WeatherTemperature(props) {
  const celsius = props.celsius;
  const fahrenheit = (celsius * 9) / 5 + 32;

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemperature">{Math.round(celsius)}</span>
        <span className="units">°C</span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemperature">{Math.round(fahrenheit)}</span>
        <span className="units">°F</span>
      </div>
    );
  }
}
