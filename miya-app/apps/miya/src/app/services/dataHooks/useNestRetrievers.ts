import { Retriever } from '@miya-app/shared-types';
import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { dataService } from '../data.service';

const useNestRetrievers = () => {
  const [retrievers, setRetreivers] = useState<Retriever[]>([]);

  const getRetrievers = useCallback(async () => {
    dataService
      .getRetrievers()
      .then((response: AxiosResponse<Retriever[]>) =>
        setRetreivers(response.data)
      );
  }, []);

  useEffect(() => {
    getRetrievers();
  }, [getRetrievers]);

  return { retrievers };
};

export default useNestRetrievers;
