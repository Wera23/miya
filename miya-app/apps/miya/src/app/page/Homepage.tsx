import classnames from 'classnames';

import { Header, MapWithAllRetrievers, UserList } from '../components';

import styles from './pages.module.scss';
import { noImageRetriever, retrieverMapPointPng } from '../../assets/images';
import { useIsTransparentContext } from '../context/IsTransparent';
import { useUserActionsContext, useUserContext } from '../context/UserContext';
import { useEffect } from 'react';

const Homepage = () => {
  const { isTransparent } = useIsTransparentContext();

  return (
    <div className={styles.homepage}>
      
      <div
        className={classnames(
          styles.homepageMenu,
          isTransparent && styles.homepageMenuActive
        )}
      >
        <Header />
      </div>
      <div className={styles.homepageMap}>
        <MapWithAllRetrievers />
      </div>

      <div className={styles.usersList}>
        <UserList />
      </div>
    </div>
  );
};

export default Homepage;
