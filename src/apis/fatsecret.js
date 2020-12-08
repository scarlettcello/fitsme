import axios from 'axios';
import requestToken from './requestToken';

let token = localStorage.getItem('token');

export const apiInstance = axios.create(
  {
    baseURL: 'https://platform.fatsecret.com/rest',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    } 
  }
);

apiInstance.interceptors.response.use((response) => {
  console.log(response);
  console.log(token);
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 403) {
    token = await requestToken();
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return apiInstance(originalRequest);
  }
  return Promise.reject(error);
});

export default apiInstance;

// let token = localStorage.getItem('token');

// export default axios.create({
//   baseURL: 'https://platform.fatsecret.com/rest',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}` 
//   },
//   params: {
//     'method': 'foods.search',
//     'format': 'json'
//   }    
// });