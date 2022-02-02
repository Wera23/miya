import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { useHistory } from 'react-router-dom';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:7000/',
});

export const apiService = axiosInstance;

const getToken = () => localStorage.getItem('token');
// let history = useHistory();

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const token: string | null = getToken();
    if (token && config.headers)
      config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    if (error.response.status) {
      // console.log("Muisz się zalogować")
      // store.dispatch(Login());
      localStorage.removeItem("Authorization");
      localStorage.clear();
      // window.location.href = 'http://localhost:4200/login';
      // history.push("/login");
    }
  }
);

// export const setupInterceptors = history => {
//   http.interceptors.response.use(res => {
//     // success
//     return res
//   }, err => {
//     const { status } = err.response

//     if (status === 401) {
//       // here we have access of the useHistory() from current Router
//       history.push('/login')
//     }

//     return Promise.reject(err)
//   })
// }

// export default http
