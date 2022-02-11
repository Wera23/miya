import {
  Retriever,
  User,
  UserLogin,
  EditRetriever,
  EditUser,
} from '@miya-app/shared-types';
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
    return apiService
      .get('users/current')
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  getSpecificUser(name: string): AxiosPromise {
    return apiService
      .get(`users/${name}`)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  editUser(user: EditUser): AxiosPromise {
    return apiService
      .patch(`users/current`, user)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  getSpecificRetriever(id: number): AxiosPromise {
    return apiService
      .get(`/retrievers/${id}`)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  editSpecificRetriever(id: number, retriever: EditRetriever): AxiosPromise {
    return apiService
      .patch(`/retrievers/${id}`, retriever)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  deleteSpecificRetriever(id: number): AxiosPromise {
    return apiService
      .delete(`/retrievers/${id}`)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  getRetrievers(): AxiosPromise {
    return apiService
      .get('retrievers')
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  getUsers(): AxiosPromise {
    return apiService
      .get('users')
      .catch((error: AxiosResponse) => Promise.reject(error));
  }
}

export const dataService = new DataService();
