// import axios, {
//   AxiosError,
//   AxiosInstance,
//   AxiosRequestConfig,
//   AxiosResponse,
// } from 'axios';
// import { toast } from 'react-toastify';
// // import { useHistory } from 'react-router-dom';

// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: 'http://localhost:7000/',
// });

// export const apiService = axiosInstance;

// const getToken = () => localStorage.getItem('token');
// // let history = useHistory();

// axiosInstance.interceptors.request.use(
//   function (config: AxiosRequestConfig) {
//     const token: string | null = getToken();
//     if (token && config.headers)
//       config.headers['Authorization'] = `Bearer ${token}`;
//     return config;
//   },
//   function (error) {
//     if (error.response.status) {
//       localStorage.removeItem('Authorization');
//       localStorage.clear();
//     }
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   (error: AxiosError) => {
//     if (error.response !== undefined) {
//       const {
//         response,
//         response: { status, data },
//       } = error;

//       const errorMessage = data.error.message;

//       switch (status) {
//         case 401:
//           console.log('HEHE');
//           toast.error('Błąd autoryzacji!');
//           localStorage.removeItem('token');
//           break;
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// // export const setupInterceptors = history => {
// //   http.interceptors.response.use(res => {
// //     // success
// //     return res
// //   }, err => {
// //     const { status } = err.response

// //     if (status === 401) {
// //       // here we have access of the useHistory() from current Router
// //       history.push('/login')
// //     }

// //     return Promise.reject(err)
// //   })
// // }

// // export default http

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:7000/',
});

export const apiService = axiosInstance;

const getToken = () => localStorage.getItem('token');

axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token: string | null = getToken();
  if (token && config.headers)
    config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});
