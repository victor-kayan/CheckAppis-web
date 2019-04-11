import axios from "axios";

const Api = axios.create({
  baseURL: 'http://api.postmon.com.br/v1/cep/',
});

export default Api;

