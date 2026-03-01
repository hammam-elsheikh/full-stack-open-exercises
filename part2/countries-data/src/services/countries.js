import axios from "axios";
// import  VITE_SOME_KEY from

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";

const APIkey = import.meta.env.VITE_SOME_KEY;

async function getAll() {
  // return all countries common name
  return axios.get(baseURL).then((res) => res.data);
}

async function getWeather(cityName) {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`;

  return axios.get(weatherURL).then((res) => res.data);
}

export default { getAll, getWeather };
