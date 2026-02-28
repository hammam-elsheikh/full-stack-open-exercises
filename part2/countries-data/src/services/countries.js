import axios from "axios";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";

function getAll() {
  // return all countries common name
  return axios.get(baseURL).then((res) => res.data);
}

export default { getAll };
