import { Typography } from '@mui/material';
import { retrieverMapPointPng } from '../../../assets/images';
import { FC } from 'react';
import styles from './Header.module.scss';
import AddRetrieverModal from '../AddRetriever/AddRetrieverModal';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.addRetrieverAction}>
        <AddRetrieverModal />
      </div>
      <div className={styles.logo}>
        <img src={retrieverMapPointPng} alt="" />
        <Typography variant="h1">Retrievers</Typography>
      </div>
    </div>
  );
};

export default Header;
