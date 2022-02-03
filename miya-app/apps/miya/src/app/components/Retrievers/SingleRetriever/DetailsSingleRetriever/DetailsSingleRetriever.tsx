import { FC } from 'react';
import classnames from 'classnames';
import { Retriever } from '@miya-app/shared-types';

import { Typography } from '@mui/material';
import { DetailsModal, LineData, CirclePhoto } from '../../../common';

import styles from './DetailsSingleRetriever.module.scss';
import {
  DetailsRetrieverTypes,
  detailsSingleRetrieverData,
} from './DetailsSingleRetrieverData';
import { noImageRetriever } from '../../../../../assets/images';
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
      <div className={styles.detailsDialog}>
        {singleRetriever.image ? (
          <CirclePhoto image={singleRetriever.image} />
        ) : (
          <CirclePhoto image={noImageRetriever} />
        )}

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
          <div className={styles.detailsSocialMedia}>
            {singleRetriever?.facebook && (
              <a
                href={singleRetriever.facebook}
                target="_blank"
                rel="noreferrer"
              >
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
                  className={classnames(
                    'icon-instagram',
                    styles.detailsNameIcon
                  )}
                />
                @{singleRetriever.instagram}
              </a>
            )}
          </div>
        </div>
      </div>
    </DetailsModal>
  );
};

export default DetailsSingleRetriever;
