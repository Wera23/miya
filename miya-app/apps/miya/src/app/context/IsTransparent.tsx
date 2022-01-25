import React, {
  useState,
  createContext,
  useContext,
} from 'react';

interface IsTransparentTypes {
  isTransparent: boolean | undefined;
}

interface TransparentActionsContextProps {
  setIsTransparent: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const IsTransparentContext = createContext<IsTransparentTypes>(
  {} as IsTransparentTypes
);
const IsTransparentActionsContext = createContext<TransparentActionsContextProps>(
  {} as TransparentActionsContextProps
);

export const useIsTransparentContext = () => useContext(IsTransparentContext);
export const useIsTransparentActionsContext = () =>
  useContext(IsTransparentActionsContext);

export const TransparentContextProvider: React.FC = ({ children }) => {
  const [isTransparent, setIsTransparent] = useState<boolean>();

  return (
    <IsTransparentContext.Provider value={{ isTransparent }}>
      <IsTransparentActionsContext.Provider value={{ setIsTransparent }}>
        {children}
      </IsTransparentActionsContext.Provider>
    </IsTransparentContext.Provider>
  );
};
