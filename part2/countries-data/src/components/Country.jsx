import countriesServices from "../services/countries";
import { useState } from "react";
import styles from "./Country.module.css";

export default function Country({ name, capital, flag, languages, area }) {
  const [temp, setTemp] = useState(undefined);
  const [wind, setWind] = useState(undefined);
  const [iconCode, setIconCode] = useState(undefined);
  countriesServices
    .getWeather(capital)
    .then((data) => {
      // console.log(data);
      setTemp(data.main.temp);
      setWind(data.wind.speed);
      setIconCode(data.weather[0].icon);
    })
    .catch((error) => {
      console.log("couldn't find weather data");
      console.log(error);
    });

  return (
    <div>
      <h1>{name}</h1>
      <div>Capital {capital}</div>
      <div>Area {area}</div>
      <h2>Languages</h2>
      <ul className={styles.languages}>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div className={styles.flag}>
        <img src={flag} alt="country flag" />
      </div>
      {temp && wind ? (
        <>
          <h2>Weather in {capital}</h2>
          <p>Temperature {temp} Celesius</p>
          <i>
            {" "}
            <img
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt="weather icon"
            />{" "}
          </i>
          <p>Wind {wind} m/s</p>
        </>
      ) : (
        "loading weather data..."
      )}
    </div>
  );
}
