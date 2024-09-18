import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails" class="row d-flex align-items-center">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <ul className="list-unstyled">
          <li>
            {props.data.date}, <strong>{props.data.description}</strong>
          </li>

          <li>
            Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
            <strong>
              {props.data.wind}
              km/h
            </strong>
          </li>
        </ul>
      </div>

      <div className="col-6">
        <div className="temperature-container d-flex justify-content-end">
          <div className="temperatureIcon">
            <WeatherIcon code={props.data.icon} size={44} />
          </div>
            <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
