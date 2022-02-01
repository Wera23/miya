import React, {
    useState,
    createContext,
    useContext,
  } from 'react';
  
  interface IsDeleteRetrieverTypes {
    isDeleteRetriever: boolean | undefined;
  }
  
  interface DeleteRetrieverActionsContextProps {
    setDeleteRetriever: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  }
  
  const IsDeleteRetrieverContext = createContext<IsDeleteRetrieverTypes>(
    {} as IsDeleteRetrieverTypes
  );
  const IsDeleteRetrieverActionsContext = createContext<DeleteRetrieverActionsContextProps>(
    {} as DeleteRetrieverActionsContextProps
  );
  
  export const useIsDeleteRetrieverContext = () => useContext(IsDeleteRetrieverContext);
  export const useIsDeleteRetrieverActionsContext = () =>
    useContext(IsDeleteRetrieverActionsContext);
  
  export const DeleteRetrieverContextProvider: React.FC = ({ children }) => {
    const [isDeleteRetriever, setDeleteRetriever] = useState<boolean>();
  
    return (
      <IsDeleteRetrieverContext.Provider value={{ isDeleteRetriever }}>
        <IsDeleteRetrieverActionsContext.Provider value={{ setDeleteRetriever }}>
          {children}
        </IsDeleteRetrieverActionsContext.Provider>
      </IsDeleteRetrieverContext.Provider>
    );
  };
  