import { FC } from 'react';

import { Typography } from '@mui/material';
import { AddRetrieverModal, UserProfile, RetrieverProfile } from '..';

import { retrieverMapPointPng } from '../../../assets/images';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.retrieverAction}>
        <AddRetrieverModal />
        <UserProfile />
        <RetrieverProfile />
      </div>
      {/* <div className={styles.logo}>
        <img src={retrieverMapPointPng} alt="" />
        <Typography variant="h1">Retrievers</Typography>
      </div> */}
    </div>
  );
};

export default Header;
