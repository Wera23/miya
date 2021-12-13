import { Typography } from '@mui/material';
import { retrieverMapPointPng } from '../../../assets/images';
import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img src={retrieverMapPointPng} alt="" />
      <Typography>
        <h1>Retrievers</h1>
      </Typography>
    </div>
  );
};

export default Header;
