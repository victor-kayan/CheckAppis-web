import axios from "axios";

const Api = axios.create({
  baseURL: 'http://bee-check.com.br/api/auth',
});

export default Api;

