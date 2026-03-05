import axios from "axios";
const baseURL = "http://localhost:3001/persons";

function getAll() {
  return axios.get(baseURL).then((res) => res.data);
}
function create(newObj) {
  return axios.post(baseURL, newObj).then((res) => res.data);
}

function remove(id) {
  return axios.delete(`${baseURL}/${id}`).then((res) => res.data);
}

function update(newObj, id) {
  return axios.put(`${baseURL}/${id}`, newObj).then((res) => res.data);
}

export default { getAll, create, remove, update };
