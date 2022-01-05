import { User } from '@miya-app/shared-types';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useNestUser = () => {
  const [user, setUser] = useState<User>();

  const getUser = useCallback(async (username: string) => {
    const resp = await axios.get<User>(
      `http://localhost:7000/profile`
    );

    setUser(resp.data);
  }, []);

  useEffect(() => {
    getUser("Ania");
  }, [getUser]);

  return { user };
};

export default useNestUser;
