import { useEffect, useState } from 'react';
import { Retriever } from '@miya-app/shared-types';
import { getSpecyficSingleRetriever } from '../retrieverService';

interface RetriverTypes {
  retriever: Retriever | undefined;
}

export default function useNestSingleRetriever(id: string): RetriverTypes {
  const [retriever, setRetreiver] = useState<Retriever>();

  useEffect(() => {
    const loadRetriever = async (): Promise<void> => {
      const retriever = await getSpecyficSingleRetriever(id);
      setRetreiver(retriever);
    };

    loadRetriever();
  }, [id]);

  return { retriever };
}
