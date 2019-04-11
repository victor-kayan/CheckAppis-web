import axios from "axios";

const Api = axios.create({
  baseURL: 'http://api.postmon.com.br/v1/cep/5981000',
});

export default Api;

