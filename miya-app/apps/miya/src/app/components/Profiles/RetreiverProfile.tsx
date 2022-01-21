import ReactModal from 'react-modal';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';

import { Button, Typography } from '@mui/material';

import styles from './UserProfileModal.module.scss';
import useNestSingleRetriever from '../../services/dataHooks/useNestSingleRetriever';
import { DetailsModal } from '../common';
import EditRetrieverModal from '../EditRetriever/EditRetrieverModal';
import { useRetrieverActionsContext, useRetrieverContext } from '../../context/RetrieverContext';
import { useEffect } from 'react';

interface UserProfileTypes {
  handleRetrieverProfile?: () => void;
}

const RetrieverProfile: React.FC<UserProfileTypes> = ({
  handleRetrieverProfile,
}) => {
  // const { retriever } = useNestSingleRetriever('1640698241110');

  const { retriever } = useRetrieverContext();
  const { getRetriever } = useRetrieverActionsContext();

  useEffect(() => {
    getRetriever("1640698241110")
  }, [])

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsModal closeModal={hideModal} header="Twój Retriever" icon="cog">
          <div className={styles.userProfileContent}>
            <div
              className={classnames(
                styles.detailsUserLine,
                styles.userDescriptionLine
              )}
            >
              <Typography variant="body2" pr={1}>
                O psie:
              </Typography>
              <Typography variant="body1">{retriever?.name} {retriever?.description}</Typography>
            </div>

            <div className={styles.detailsUserLine}>
              <Typography variant="body2" pr={1}>
                Wiek:
              </Typography>
              <Typography variant="body1">{retriever?.age}</Typography>
            </div>
            <div className={styles.detailsUserLine}>
              <Typography variant="body2" pr={1}>
                Miasto:
              </Typography>
              <Typography variant="body1">{retriever?.city}</Typography>
            </div>
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
