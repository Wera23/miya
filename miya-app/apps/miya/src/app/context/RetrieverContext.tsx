import { Retriever } from '@miya-app/shared-types';
import React, { useState, createContext, useContext } from 'react';
import { useCallback } from 'react';
import { getSpecyficSingleRetriever } from '../services/retrieverService';

interface RetrieverContextProps {
  retriever: Retriever | undefined;
}

interface RetrieverActionsContextProps {
  getRetriever: TGetRetriever;
  cleanRetrieverData: () => void;
}

type TGetRetriever = (id: number) => void;

const RetrieverContext = createContext<RetrieverContextProps>(
  {} as RetrieverContextProps
);
const RetrieverActionsContext = createContext<RetrieverActionsContextProps>(
  {} as RetrieverActionsContextProps
);

export const useRetrieverContext = () => useContext(RetrieverContext);
export const useRetrieverActionsContext = () =>
  useContext(RetrieverActionsContext);

export const RetrieverContextProvider: React.FC = ({ children }) => {
  const [retriever, setRetreiver] = useState<Retriever>();

  const getRetriever: TGetRetriever = useCallback((id) => {
    const loadRetriever = async (): Promise<void> => {
      const retriever = await getSpecyficSingleRetriever(id);
      setRetreiver(retriever);
    };

    loadRetriever();
  }, []);

  const cleanRetrieverData = () => {
    setRetreiver(undefined);
  };

  return (
    <RetrieverContext.Provider value={{ retriever }}>
      <RetrieverActionsContext.Provider
        value={{ getRetriever, cleanRetrieverData }}
      >
        {children}
      </RetrieverActionsContext.Provider>
    </RetrieverContext.Provider>
  );
};
