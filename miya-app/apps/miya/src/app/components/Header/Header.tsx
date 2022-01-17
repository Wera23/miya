import { FC } from 'react';

import { Typography } from '@mui/material';
import { AddRetrieverModal, UserProfileModal } from '..';

import { retrieverMapPointPng } from '../../../assets/images';
import styles from './Header.module.scss';
import useNestUser from '../../services/dataHooks/useNestUser';

const Header: FC = () => {
  const { user } = useNestUser();

  return (
    <div className={styles.header}>
      <div className={styles.retrieverAction}>
        <AddRetrieverModal />
        <UserProfileModal />
      </div>
      <div className={styles.logo}>
        <img src={retrieverMapPointPng} alt="" />
        <Typography variant="h1">Retrievers</Typography>
      </div>
    </div>
  );
};

export default Header;
