import { User } from '@miya-app/shared-types';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useNestUser = () => {
  const [user, setUser] = useState<User>();

  const token = localStorage.getItem('token');
  const getUser = useCallback(async () => {
    const resp = await axios.get<User>(`http://localhost:7000/profile`);

    setUser(resp.data);
  }, []);

  useEffect(() => {
    !token && getUser();
  }, [getUser, token]);

  return { user };
};

export default useNestUser;
