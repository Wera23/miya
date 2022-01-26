import { FC } from 'react';
import classnames from 'classnames';
import { Retriever } from '@miya-app/shared-types';

import { Typography } from '@mui/material';
import { DetailsModal, LineData } from '../../../common';

import styles from './DetailsSingleRetriever.module.scss';
import {
  DetailsRetrieverTypes,
  detailsSingleRetrieverData,
  socialMediaRetriever,
} from './DetailsSingleRetrieverData';
interface SingleRetrieverTypes {
  singleRetriever: Retriever;
  closeModal: () => void;
}

const DetailsSingleRetriever: FC<SingleRetrieverTypes> = ({
  singleRetriever,
  closeModal,
}) => {
  return (
    <DetailsModal
      closeModal={closeModal}
      header={singleRetriever.name}
      icon="paw"
    >
      <div className={styles.detailsContent}>
        {detailsSingleRetrieverData.map(
          (retrieverSimpleData: DetailsRetrieverTypes) => (
            <LineData value="description" data={retrieverSimpleData.value}>
              <Typography variant="body2" pr={1}>
                {retrieverSimpleData.name}
              </Typography>

              <Typography variant="body1">
                {
                  singleRetriever?.[
                    retrieverSimpleData.value as keyof Retriever
                  ]
                }
              </Typography>
            </LineData>
          )
        )}

        {socialMediaRetriever.map(
          (singleSocialMedia: DetailsRetrieverTypes) => (
            <a href={singleSocialMedia?.value} target="_blank" rel="noreferrer">
              <i
                className={classnames(
                  `icon-${singleSocialMedia.icon}`,
                  styles.detailsNameIcon
                )}
              />
            </a>
          )
        )}
      </div>

      {/* <div className={styles.detailsSocialMedia}>
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
      </div> */}
    </DetailsModal>
  );
};

export default DetailsSingleRetriever;
