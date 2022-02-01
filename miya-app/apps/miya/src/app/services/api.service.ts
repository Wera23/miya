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
