import { Retriever, User, UserLogin, EditRetriever } from '@miya-app/shared-types';
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

  getSpecificRetriever(id: string): AxiosPromise {
    return apiService
      .get(`/retrievers/${id}`)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  editSpecificRetriever(id: string, retriever: EditRetriever): AxiosPromise {
    return apiService
      .patch(`/retrievers/${id}`, retriever)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }

  getRetrievers(): AxiosPromise {
    return apiService
      .get('retrievers')
      .catch((error: AxiosResponse) => Promise.reject(error));
  }
}

export const dataService = new DataService();
