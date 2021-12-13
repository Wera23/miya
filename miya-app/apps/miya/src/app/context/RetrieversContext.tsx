import { Retriever } from '@miya-app/shared-types';
import React, { useState, createContext, useContext } from 'react';

interface RetrieverContextProps {
  retriever: string | undefined;
}

interface RetrieverActionsContextProps {
  setRetriever: React.Dispatch<React.SetStateAction<string | undefined>>;
}

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
  const [retriever, setRetriever] = useState<string>();

  return (
    <RetrieverContext.Provider value={{ retriever }}>
      <RetrieverActionsContext.Provider value={{ setRetriever }}>
        {children}
      </RetrieverActionsContext.Provider>
    </RetrieverContext.Provider>
  );
};
