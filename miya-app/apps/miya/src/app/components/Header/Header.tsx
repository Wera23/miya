import { FC } from 'react';

import { AddRetrieverModal, UserProfile, RetrieverProfile } from '..';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.retrieverAction}>
        <AddRetrieverModal />
        <UserProfile />
        <RetrieverProfile />
      </div>
    </div>
  );
};

export default Header;
