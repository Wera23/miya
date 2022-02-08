import { User } from '@miya-app/shared-types';
import React, { useState, createContext, useContext } from 'react';
import { useCallback } from 'react';
import { getSpecyficUser } from '../services/loginService';

interface UserContextProps {
  user: User | undefined;
}

interface UserActionsContextProps {
  getUser: TGetUser;
}

type TGetUser = (name: string) => void;

const UserContext = createContext<UserContextProps>({} as UserContextProps);
const UserActionsContext = createContext<UserActionsContextProps>(
  {} as UserActionsContextProps
);

export const useUserContext = () => useContext(UserContext);
export const useUserActionsContext = () => useContext(UserActionsContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  const getUser: TGetUser = useCallback(async (name) => {
    const user = await getSpecyficUser(name);
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      <UserActionsContext.Provider value={{ getUser }}>
        {children}
      </UserActionsContext.Provider>
    </UserContext.Provider>
  );
};
