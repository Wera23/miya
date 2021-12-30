import { FC } from 'react';
import { Retriever } from '@miya-app/shared-types';
import classnames from 'classnames';

import styles from './DetailsSingleRetriever.module.scss';
import './ReactModal.scss';
import { Typography } from '@mui/material';

interface SingleRetrieverTypes {
  singleRetriever: Retriever;
  closeModal: () => void;
}

const DetailsSingleRetriever: FC<SingleRetrieverTypes> = ({
  singleRetriever,
  closeModal,
}) => {
  return (
    <div onClick={closeModal} className={styles.detailsRetriever}>
      <i
        className={classnames('icon-cancel', styles.detailsClose)}
        onClick={closeModal}
      />

      <div className={styles.detailsRetrieverContent}>
        <Typography variant="h2" mb={3}>
          {singleRetriever.name}
          <i className={classnames('icon-paw', styles.detailsNameIcon)} />
        </Typography>

        {singleRetriever?.gender && (
          <div className={styles.detailsRetrieverLine}>
            <Typography
              variant="body1"
              className={styles.singleRetrieverProperty}
            >
              Płeć:
            </Typography>
            <Typography variant="body1">{singleRetriever.gender}</Typography>
          </div>
        )}

        {singleRetriever?.city && singleRetriever?.voivodeship && (
          <div className={styles.detailsRetrieverLine}>
            <Typography variant="body2" pr={1}>
              Skąd:
            </Typography>
            <Typography variant="body1">{singleRetriever.city},</Typography>
            <Typography variant="body1">
              {singleRetriever.voivodeship}
            </Typography>
          </div>
        )}

        {singleRetriever?.age && (
          <div className={styles.detailsRetrieverLine}>
            <Typography variant="body2" pr={1}>
              Wiek:
            </Typography>
            <Typography variant="body1">{singleRetriever.age}</Typography>
          </div>
        )}
        {singleRetriever?.description && (
          <div className={styles.detailsRetrieverLine}>
            <Typography variant="body2" pr={1}>
              Charakter:
            </Typography>
            <Typography variant="body1">
              {singleRetriever.description}
            </Typography>
          </div>
        )}
        {singleRetriever?.owner && (
          <div className={styles.detailsRetrieverLine}>
            <Typography variant="body2" pr={1}>
              Właściciel:
            </Typography>
            <Typography variant="body1">{singleRetriever.owner}</Typography>
          </div>
        )}

        <div className={styles.detailsSocialMedia}>
          {singleRetriever?.facebook && (
            <a href={singleRetriever.facebook} target="_blank" rel="noreferrer">
              <i
                className={classnames(
                  'icon-facebook-circled',
                  styles.detailsNameIcon
                )}
              />
            </a>
          )}
          {singleRetriever?.instagram && (
            <a
              href={`https://www.instagram.com/${singleRetriever.instagram}`}
              target="_blank"
              rel="noreferrer"
            >
              <i
                className={classnames('icon-instagram', styles.detailsNameIcon)}
              />
              @{singleRetriever.instagram}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsSingleRetriever;
