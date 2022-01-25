import { Header, MapWithAllRetrievers } from '../components';

import styles from './pages.module.scss';
import { retrieverMapPointPng } from '../../assets/images';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepageMenu}>
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
