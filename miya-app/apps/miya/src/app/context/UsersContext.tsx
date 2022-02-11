import React, { useState, createContext, useContext, useCallback } from 'react';
import { User } from '../models/models';
import { getAllUsers } from '../services/usersService';

interface UsersContextProps {
  users: User[] | undefined;
}

interface UsersActionsContextProps {
  getUsers: TGetUsers;
}

type TGetUsers = () => void;

const UsersContext = createContext<UsersContextProps>({} as UsersContextProps);
const UsersActionsContext = createContext<UsersActionsContextProps>(
  {} as UsersActionsContextProps
);

export const useUsersContext = () => useContext(UsersContext);
export const useUsersActionsContext = () => useContext(UsersActionsContext);

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>();

  const getUsers: TGetUsers = useCallback(async () => {
    const users = await getAllUsers();
    setUsers(users);
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>
      <UsersActionsContext.Provider value={{ getUsers }}>
        {children}
      </UsersActionsContext.Provider>
    </UsersContext.Provider>
  );
};
