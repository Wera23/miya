import { Retriever } from '@miya-app/shared-types';
import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLoggedInContext } from '../../context/IsLoggedIn';
import { dataService } from '../data.service';

const useNestSingleRetriever = () => {
  const [singleRetriever, setSingleRetriever] = useState<Retriever>();
  const { loggedIn } = useLoggedInContext();

  const token = localStorage.getItem('token');

  const getSpecificRetriever = useCallback(() => {
    if (loggedIn) {
      dataService
        .getSpecificRetriever()
        .then((response: AxiosResponse) => setSingleRetriever(response.data));
    }
  }, [loggedIn]);

  //TODO: token
  useEffect(() => {
    !!token && getSpecificRetriever();
  }, [getSpecificRetriever, token]);

  return { singleRetriever };
};

export default useNestSingleRetriever;
