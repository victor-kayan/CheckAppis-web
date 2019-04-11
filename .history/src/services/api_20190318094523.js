import axios from "axios";

const Api = axios.create({
  baseURL: 'http://192.168.200.253/api/auth/login',
});

export default Api;

