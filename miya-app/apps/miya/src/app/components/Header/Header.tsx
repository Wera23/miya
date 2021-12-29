import { Typography } from '@mui/material';
import { retrieverMapPointPng } from '../../../assets/images';
import { FC } from 'react';
import styles from './Header.module.scss';
import AddRetrieverModal from '../AddRetriever/AddRetrieverModal';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img src={retrieverMapPointPng} alt="" />
      <Typography variant="h1">Retrievers</Typography>
      <AddRetrieverModal  />
    </div>
  );
};

export default Header;
