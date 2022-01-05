import { Retriever, User, UserLogin } from '@miya-app/shared-types';
import { AxiosPromise, AxiosResponse } from 'axios';
import { apiService } from './api.service';

class DataService {
  postNewRetriever(newRetriever: Retriever): AxiosPromise {
    return apiService
      .post(`retrievers`, newRetriever)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }
  postNewUser(newUser: User): AxiosPromise {
    return apiService
      .post(`auth/register`, newUser)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  postLoginUser(userLogin: UserLogin): AxiosPromise {
    return apiService
      .post(`auth/login`, userLogin)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  getCurrentUser(): AxiosPromise {
    const token = localStorage.getItem('token');

    return apiService
      .get('profile', { headers: { Authorization: `Bearer ${token!}` } })
      .catch((error: AxiosResponse) => Promise.reject(error));
  }
}

export const dataService = new DataService();
