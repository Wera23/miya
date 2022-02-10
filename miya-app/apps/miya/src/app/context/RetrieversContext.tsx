import { Retriever } from '@miya-app/shared-types';
import React, { useState, createContext, useContext } from 'react';
import { useCallback } from 'react';
import {
  getAllRetrievers,
} from '../services/retrieverService';

interface RetrieversContextProps {
  retrievers: Retriever[] | undefined;
}

interface RetrieversActionsContextProps {
  getRetrievers: TGetRetrievers;
}

type TGetRetrievers = () => void;

const RetrieversContext = createContext<RetrieversContextProps>(
  {} as RetrieversContextProps
);
const RetrieversActionsContext = createContext<RetrieversActionsContextProps>(
  {} as RetrieversActionsContextProps
);

export const useRetrieversContext = () => useContext(RetrieversContext);
export const useRetrieversActionsContext = () =>
  useContext(RetrieversActionsContext);

export const RetrieversContextProvider: React.FC = ({ children }) => {
  const [retrievers, setRetrivers] = useState<Retriever[]>();

  const getRetrievers: TGetRetrievers = useCallback(async () => {
    const retrievers = await getAllRetrievers();
    setRetrivers(retrievers);
  }, []);

  return (
    <RetrieversContext.Provider value={{ retrievers }}>
      <RetrieversActionsContext.Provider value={{ getRetrievers }}>
        {children}
      </RetrieversActionsContext.Provider>
    </RetrieversContext.Provider>
  );
};
