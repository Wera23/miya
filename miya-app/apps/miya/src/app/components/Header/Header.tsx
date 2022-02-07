import { FC } from 'react';

import { AddRetrieverModal, UserProfile, RetrieverProfile } from '..';
import { useLoggedInActionsContext } from '../../context';
import { MenuButton } from '../common';
import styles from './Header.module.scss';

const Header: FC = () => {
  const { setLoggedIn } = useLoggedInActionsContext();

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.retrieverAction}>
        <AddRetrieverModal />
        <UserProfile />
        <RetrieverProfile />
        <MenuButton
          handleClickButton={handleLogout}
          buttonText="Wyloguj się"
          buttonIcon="cog"
        />
      </div>
    </div>
  );
};

export default Header;
