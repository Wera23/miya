import { FC } from 'react';

import { Typography } from '@mui/material';
import { AddRetrieverModal } from '..';

import { retrieverMapPointPng } from '../../../assets/images';
import styles from './Header.module.scss';
import SingleUser from './UserPanel';
import useNestUser from '../../services/dataHooks/useNestUser';

const Header: FC = () => {
  const { user } = useNestUser();

  return (
    <div className={styles.header}>
      <div className={styles.addRetrieverAction}>
        <AddRetrieverModal />
        <div>
          <SingleUser singleUser={user} />
        </div>
      </div>
      <div className={styles.logo}>
        <img src={retrieverMapPointPng} alt="" />
        <Typography variant="h1">Retrievers</Typography>
      </div>
    </div>
  );
};

export default Header;
