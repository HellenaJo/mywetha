import axios from "axios";
import React, {useState} from"react";
import './App.css';


export default function Weather(props) {
  let [weatherInfo, setWeatherInfo] = useState({ ready: false });
  function bringResponse(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                autocomplete="off"
                autofocus="on"
                placeholder="Name city"
                id="search-city"
              />
            </div>
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary w-100" />
          </div>
        </form>
        
        <div>
          <h1> {weatherInfo.city}</h1>
          <ul>
            <li>
              {weatherInfo.description}
            </li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={weatherInfo.imageUrl}
                  alt={weatherInfo.description}
                  className="float-left" />
                <div className="float-left">
                  <span className="temperature">
                    {Math.round(weatherInfo.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "70eb5822db0e7a548a59c84b59fa1550";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(bringResponse);

    return " Still loading...";
  } 
}

