import { AxiosResponse } from 'axios';
import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { dataService } from '../services/data.service';

interface LoggedInTypes {
  loggedIn: boolean | undefined;
}

interface LoggedActionsContextProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoggedInContext = createContext<LoggedInTypes>({} as LoggedInTypes);
const LoggedInActionsContext = createContext<LoggedActionsContextProps>(
  {} as LoggedActionsContextProps
);

export const useLoggedInContext = () => useContext(LoggedInContext);
export const useLoggedInActionsContext = () =>
  useContext(LoggedInActionsContext);

export const LoggedContextProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const getCurrentUser = useCallback(() => {
    if (loggedIn) {
      dataService
        .getCurrentUser()
        .then((response: AxiosResponse) => console.log(response));
    }
  }, [loggedIn]);

  useEffect(() => getCurrentUser(), [getCurrentUser]);

  return (
    <LoggedInContext.Provider value={{ loggedIn }}>
      <LoggedInActionsContext.Provider value={{ setLoggedIn }}>
        {children}
      </LoggedInActionsContext.Provider>
    </LoggedInContext.Provider>
  );
};
