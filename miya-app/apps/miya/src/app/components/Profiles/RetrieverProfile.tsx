import { useEffect } from 'react';
import { useModal } from 'react-modal-hook';
import ReactModal from 'react-modal';
import classnames from 'classnames';

import { Button, Typography } from '@mui/material';
import { EditRetrieverModal } from '..';
import { BasicButton, DetailsModal, MenuButton } from '../common';

import styles from './ProfileModal.module.scss';
import {
  useRetrieverActionsContext,
  useRetrieverContext,
} from '../../context/RetrieverContext';
import { retrieverProfile, ProfileTypes } from './ProfileData';
import { Retriever } from '@miya-app/shared-types';
import {
  useIsTransparentActionsContext,
} from '../../context/IsTransparent';

const RetrieverProfile: React.FC = () => {
  const { retriever } = useRetrieverContext();
  const { getRetriever } = useRetrieverActionsContext();
  const { setIsTransparent } = useIsTransparentActionsContext();

  useEffect(() => {
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

  useEffect(() => {
    getRetriever('1640698241110');
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
            <div
              className={styles.profileImage}
              style={{
                backgroundImage: `url(https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/248946323_3111159129164218_6658650979357560016_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Mxq5PWfil7wAX-HcPmF&tn=GYuTEocvppeCHzo3&_nc_ht=scontent.fpoz4-1.fna&oh=00_AT_MpMQVOX5MnA7b8BoGrILSThA_IeW6B9q-PrcpmJHX7w&oe=61F61A44)`,
              }}
            />

            <div className={styles.profileContent}>
            {retrieverProfile.map((retrieverSimpleData: ProfileTypes) => (
              <div className={styles.detailsProfileLine}>
                <Typography variant="body2" pr={1}>
                  {retrieverSimpleData.name}
                </Typography>
                <Typography variant="body1">
                  {retriever?.[retrieverSimpleData.value as keyof Retriever]}
                </Typography>
              </div>
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
