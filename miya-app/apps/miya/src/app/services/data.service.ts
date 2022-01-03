import { Retriever, User } from '@miya-app/shared-types';
import { AxiosPromise, AxiosResponse } from 'axios';
import { apiService } from './api.service';

class DataService {
  postNewRetriever(newRetriever: Retriever): AxiosPromise {
    return apiService
      .post(``, newRetriever)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }
  postNewUser(newUser: User): AxiosPromise {
    return apiService
      .post(``, newUser)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }
}

export const dataService = new DataService();
