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
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (day, index) {
            if (index < 5) {
              return (
                <div className="col">
                  <ForecastDay data={day} />
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
    let apiKey = "a5t17f04278fdb4bf8e3eb7e4o1ab606";
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
