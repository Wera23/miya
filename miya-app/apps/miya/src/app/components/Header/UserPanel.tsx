import { FC } from 'react';
import { User } from '@miya-app/shared-types';

interface SingleUserTypes {
  singleUser: User | undefined;
}

const SingleUser: FC<SingleUserTypes> = ({ singleUser }) => {
  return <div>{singleUser?.username}</div>;
};

export default SingleUser;
