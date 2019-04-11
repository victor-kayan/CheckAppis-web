import axios from "axios";
import uris from '../assets/uris'

const Api = axios.create({
  baseURL: uris.BASE_URL,
});

Api.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  return "Aquiiii";
  
  return Promise.reject(error);
});

export default Api;
