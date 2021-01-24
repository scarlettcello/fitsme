// import axios from "axios";

// const apiURL = "http://localhost:8000";

// const token = axios.get(`/auth`).then((res) => res.data);

// export const apiInstance = axios.interceptors.request.use(
//   (config) => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [apiURL];
//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

//import requestToken from "./requestToken";

// let token = localStorage.getItem("token");

// export const apiInstance = axios.create({
//   baseURL: "https://platform.fatsecret.com/rest",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   },
// });

// apiInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 403) {
//       //token = await requestToken();
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       return apiInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

//export default apiInstance;

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
