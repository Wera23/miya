import ReactModal from 'react-modal';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';

import { Button, Typography } from '@mui/material';
import { DetailsModal } from '../common';

import styles from './UserProfileModal.module.scss';
import useNestUser from '../../services/dataHooks/useNestUser';
import EditRetrieverModal from '../EditRetriever/EditRetrieverModal';

interface UserProfileTypes {
  handleUserProfile?: () => void;
}

const UserProfileModal: React.FC<UserProfileTypes> = ({
  handleUserProfile,
}) => {
  const { user } = useNestUser();

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsModal closeModal={hideModal} header="Twoje konto" icon="cog">
          {user?.userDescription && (
            <div className={styles.detailsUserLine}>
              <Typography variant="body2" pr={1}>
                O mnie:
              </Typography>
              <Typography variant="body1">{user.userDescription}</Typography>
            </div>
          )}
          <div className={styles.detailsUserLine}>
            <Typography variant="body2" pr={1}>
              Mój pies:
            </Typography>
            <Typography variant="body1">Miya</Typography>
          </div>
          {user?.dateOfBirth && (
            <div className={styles.detailsUserLine}>
              <Typography variant="body2" pr={1}>
                Data moich urodzin:
              </Typography>
              <Typography variant="body1">{user.dateOfBirth}</Typography>
            </div>
          )}

          {user?.userAddress && (
            <div className={styles.detailsUserLine}>
              <Typography variant="body2" pr={1}>
                Moje miasto:
              </Typography>
              <Typography variant="body1">{user.userAddress}</Typography>
            </div>
          )}
        </DetailsModal>
        <EditRetrieverModal />
      </ReactModal>
    ),
    [user]
  );

  const handleClick = (): void => {
    showModal();
    handleUserProfile && handleUserProfile();
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <i className={classnames('icon-cog')} />
        <Typography>Twoje konto</Typography>
      </Button>
    </div>
  );
};

export default UserProfileModal;
