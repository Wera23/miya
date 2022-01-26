import { useEffect } from 'react';
import { useModal } from 'react-modal-hook';
import ReactModal from 'react-modal';
import classnames from 'classnames';

import { Button, Typography } from '@mui/material';
import { EditRetrieverModal } from '..';
import { BasicButton, DetailsModal, LineData, MenuButton } from '../common';

import styles from './ProfileModal.module.scss';
import {
  useRetrieverActionsContext,
  useRetrieverContext,
} from '../../context/RetrieverContext';
import { retrieverProfile, ProfileTypes } from './ProfileData';
import { Retriever } from '@miya-app/shared-types';
import { useIsTransparentActionsContext } from '../../context/IsTransparent';

const RetrieverProfile: React.FC = () => {
  const { retriever } = useRetrieverContext();
  const { getRetriever } = useRetrieverActionsContext();
  const { setIsTransparent } = useIsTransparentActionsContext();

  useEffect(() => {
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

  const dog = '1643208284237';

  useEffect(() => {
    getRetriever(dog);
  }, [getRetriever]);

  const [showModal, hideModal] = useModal(() => {
    const actionsModal = () => {
      hideModal && hideModal();
      setIsTransparent(false);
    };
    return (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsModal
          closeModal={actionsModal}
          header="Twój Retriever"
          icon="cog"
        >
          <div className={styles.profileDialog}>
            {retriever?.image && (
              <div
                className={styles.profileImage}
                style={{
                  backgroundImage: `url(${retriever.image})`,
                }}
              />
            )}

            <div className={styles.profileContent}>
              {retrieverProfile.map((retrieverSimpleData: ProfileTypes) => (
                <LineData value="description" data={retrieverSimpleData.value}>
                  <Typography variant="body2" pr={1}>
                    {retrieverSimpleData.name}
                  </Typography>
                  <Typography variant="body1">
                    {retriever?.[retrieverSimpleData.value as keyof Retriever]}
                  </Typography>
                </LineData>
              ))}
            </div>
          </div>
          <EditRetrieverModal />
        </DetailsModal>
      </ReactModal>
    );
  }, [retriever]);

  const handleClick = (): void => {
    showModal();
    setIsTransparent(true);
  };

  return (
    <MenuButton
      handleClickButton={handleClick}
      buttonText="Twój retriever"
      buttonIcon="guidedog"
    />
  );
};

export default RetrieverProfile;
