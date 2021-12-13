import { FC, useEffect, useState } from 'react';
// import useNestRetrievers from '../../hooks/useNestRetrievers';
import { Retriever } from '@miya-app/shared-types';
import { SingleRetriever } from '..';

import styles from './AllRetrievers.module.scss';
import DetailsSingleRetriever from '../SingleRetriever/DetailsSingleRetriever/DetailsSingleRetriever';
import useNestRetrievers from '../../hooks/useNestRetrievers';
import MapWithAllRetrievers from './MapWithAllRetrievers';

const AllRetriever: FC = () => {
  const { retrievers } = useNestRetrievers();

  const listOfRetievers = Object.keys(retrievers).map(function (key: any) {
    return retrievers[key];
  });

  // const [retrievers, setRetrievers] = useState<Retriever[]>([]);

  // useEffect(() => {
  //   getAllTempRetrievers().then(
  //     (retrievers) => {
  //       setRetrievers(retrievers);
  //     },
  //     (error: any) => console.log(error)
  //   );
  // }, []);

  return (
    <div className={styles.listRetievers}>
      {/* {listOfRetievers?.map((retriever: Retriever, key: number) => {
        return <SingleRetriever key={key} singleRetriever={retriever} />;
      })} */}

      <MapWithAllRetrievers />
    </div>
  );
};

export default AllRetriever;
