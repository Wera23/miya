import { useState } from 'react';
import classnames from 'classnames';

import { Header, MapWithAllRetrievers } from '../components';

import styles from './pages.module.scss';
import { retrieverMapPointPng } from '../../assets/images';
import { useIsTransparentContext } from '../context/IsTransparent';

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

      <div className={styles.homepageLogo}>
        <img src={retrieverMapPointPng} alt="" />
      </div>
    </div>
  );
};

export default Homepage;
