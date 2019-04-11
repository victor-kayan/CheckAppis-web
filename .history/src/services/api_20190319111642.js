import axios from "axios";
import uris from '../assets/uris'

const Api = axios.create({
  baseURL: uris.BASE_URL,
});

export default Api;
