import classnames from 'classnames';

import { Header, MapWithAllRetrievers } from '../components';

import styles from './pages.module.scss';
import { retrieverMapPointPng } from '../../assets/images';
import { useIsTransparentContext } from '../context/IsTransparent';
import { useUserActionsContext, useUserContext } from '../context/UserContext';
import { useEffect } from 'react';

const Homepage = () => {
  const { isTransparent } = useIsTransparentContext();
  const { user } = useUserContext();
  const { getUser } = useUserActionsContext();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className={styles.homepage}>
      <h1>AAAA{user?.userAddress} {user?.userId}</h1>
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

      <div className={styles.homepageLogo}>
        <img src={retrieverMapPointPng} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
