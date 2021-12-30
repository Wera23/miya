import { Retriever } from '@miya-app/shared-types';
import { AxiosPromise, AxiosResponse } from 'axios';
import { apiService } from './api.service';

class DataService {
  postNewRetriever(newRetriever: Retriever): AxiosPromise {
    return apiService
      .post(`retrievers`, newRetriever)
      .catch((error: AxiosResponse) => Promise.reject(error));
  }
}

export const dataService = new DataService();
