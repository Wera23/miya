import { User } from '@miya-app/shared-types';
import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLoggedInContext } from '../../context/IsLoggedIn';
import { dataService } from '../data.service';

const useNestUser = () => {
  const [user, setUser] = useState<User>();
  const { loggedIn } = useLoggedInContext();

  const token = localStorage.getItem('token');

  const getCurrentUser = useCallback(() => {
    if (loggedIn) {
      dataService
        .getCurrentUser()
        .then((response: AxiosResponse) => setUser(response.data));
    }
  }, [loggedIn]);

  //TODO: token
  useEffect(() => {
    !!token && getCurrentUser();
  }, [getCurrentUser, token]);

  return { user };
};

export default useNestUser;
