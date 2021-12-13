import { FC } from 'react';
import { Retriever } from '@miya-app/shared-types';

import styles from './DetailsSingleRetriever.module.scss';
import './ReactModal.scss';

interface SingleRetrieverTypes {
  singleRetriever: Retriever;
  closeModal: () => void;
}

const DetailsSingleRetriever: FC<SingleRetrieverTypes> = ({
  singleRetriever,
  closeModal,
}) => {
  return (
    <div className={styles.detailsRetriever}>
      <span onClick={closeModal}>x</span>
      <h2>{singleRetriever.name}</h2>

      {singleRetriever?.gender && (
        <p>
          <span className={styles.singleRetrieverProperty}>Płeć:</span>
          <span>{singleRetriever.gender}</span>
        </p>
      )}

      {singleRetriever?.city && singleRetriever?.voivodeship && (
        <p>
          <span className={styles.singleRetrieverProperty}>Skąd:</span>
          <span>{singleRetriever.voivodeship}, </span> 
          <span>{singleRetriever.city}</span>
        </p>
      )}

      {singleRetriever?.age && (
        <p>
          <span className={styles.singleRetrieverProperty}>Wiek: </span>
          <span>{singleRetriever.age}</span>
        </p>
      )}
      {singleRetriever?.description && (
        <p>
          <span className={styles.singleRetrieverProperty}>Charakter:</span>
          <span>{singleRetriever.description}</span>
        </p>
      )}
      {singleRetriever?.owner && (
        <p>
          <span className={styles.singleRetrieverProperty}>Właściciel:</span>
          <span>{singleRetriever.owner}</span>
        </p>
      )}
    </div>
  );
};

export default DetailsSingleRetriever;
