import { FC } from 'react';

import { Typography } from '@mui/material';
import { AddRetrieverModal, UserProfileModal } from '..';

import { retrieverMapPointPng } from '../../../assets/images';
import styles from './Header.module.scss';
import SingleRetrieverProfile from '../Profiles/RetreiverProfile';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.retrieverAction}>
        <AddRetrieverModal />
        <UserProfileModal />
        <SingleRetrieverProfile />
      </div>
      <div className={styles.logo}>
        <img src={retrieverMapPointPng} alt="" />
        <Typography variant="h1">Retrievers</Typography>
      </div>
    </div>
  );
};

export default Header;
