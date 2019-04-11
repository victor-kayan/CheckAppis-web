import axios from "axios";
import uris from '../assets/uris';

const Api = axios.create({
  baseURL: uris.BASE_URL,
});

Api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}` 

// Api.interceptors.response.use(function (response) {
//   return response;
// }, function (error) { 
//   return Promise.reject(error);
// });


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
  

export default Api;

// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   if (401 === error.response.status) {
//     console.log("Session Expired")
//     //window.location = '/login'
//   } else {
//     return Promise.reject(error);
//   }
// });

