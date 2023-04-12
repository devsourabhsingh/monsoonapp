import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Style.css";
import one from "../svg/wave2.jpg";
const Tempapp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {}, [city]);
  console.log("weatherData", weatherData);
  console.log("city", city);
  const press = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72c7be15fc17a189ed67d5aab6dbaa99
`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="card">
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              className="inputField"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <button onClick={press}>search</button>
          </div>

          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view"></i>
              {city}
            </h2>
            <h3 className="city">city-{weatherData?.name}</h3>
            <h3 className="temp">Temp-{weatherData?.main?.temp}</h3>
            <h3 className="tempin_max">
              {" "}
              Min temp-{weatherData?.main?.temp_min} | Max temp-
              {weatherData?.main?.temp_max}
            </h3>
            <h3 className="smell">Humidity-{weatherData?.main?.humidity}</h3>
            <h3>Wind-Speed-{weatherData?.wind?.speed}</h3>
          </div>
          <div className="waveResize">
            <div className="wave">
            
            </div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tempapp;
