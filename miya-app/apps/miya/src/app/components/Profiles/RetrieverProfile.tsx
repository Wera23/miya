import { useEffect } from 'react';
import { useModal } from 'react-modal-hook';
import ReactModal from 'react-modal';
import classnames from 'classnames';

import { Button, Typography } from '@mui/material';
import { EditRetrieverModal } from '..';
import { DetailsModal } from '../common';

import styles from './ProfileModal.module.scss';
import {
  useRetrieverActionsContext,
  useRetrieverContext,
} from '../../context/RetrieverContext';
import { retrieverProfile, ProfileTypes } from './ProfileData';
import { Retriever } from '@miya-app/shared-types';

interface UserProfileTypes {
  handleRetrieverProfile?: () => void;
}

const RetrieverProfile: React.FC<UserProfileTypes> = ({
  handleRetrieverProfile,
}) => {
  const { retriever } = useRetrieverContext();
  const { getRetriever } = useRetrieverActionsContext();

  useEffect(() => {
    getRetriever('1640698241110');
  }, [getRetriever]);

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsModal closeModal={hideModal} header="Twój Retriever" icon="cog">
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
          <EditRetrieverModal />
        </DetailsModal>
      </ReactModal>
    ),
    [retriever]
  );

  const handleClick = (): void => {
    showModal();
    handleRetrieverProfile && handleRetrieverProfile();
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <i className={classnames('icon-cog')} />
        <Typography>Twój retriever</Typography>
      </Button>
    </div>
  );
};

export default RetrieverProfile;
