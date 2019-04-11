import axios from "axios";
import uris from '../assets/uris';

const Api = axios.create({
  baseURL: uris.BASE_URL,
});

// Api.interceptors.response.use(function (response) {
//   return response;
// }, function (error) { 
//   return Promise.reject(error);
// });



export default function execute() {
  Api.interceptors.request.use(function(config) {
      const token = localStorage.getItem('token');
      if(token) {
          config.headers.Authorization = 'Bearer ${token}';
          console.log(config);
          return config;
      } else {
          console.log('There is not token yet...');
          return config;
      }
  }, function(err) {
      return Promise.reject(err);
  });
};

