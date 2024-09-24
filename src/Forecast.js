import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastOutput">
        <div className="row">
          {forecast.map(function (day, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <ForecastDay
                    data={day}
                    unit={props.unit}
                    handleToggle={props.handleToggle}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "6782253072f7d90462731a624097fc54";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
