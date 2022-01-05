import { Retriever } from '@miya-app/shared-types';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useNestRetrievers = () => {
  const [retrievers, setRetreivers] = useState<Retriever[]>([]);

  const getRetrievers = useCallback(async () => {
    const resp = await axios.get<Retriever[]>(
      'http://localhost:7000/retrievers'
    );

    setRetreivers(resp.data);
  }, []);

  useEffect(() => {
    getRetrievers();
  }, [getRetrievers]);

  return { retrievers };
};

export default useNestRetrievers;
