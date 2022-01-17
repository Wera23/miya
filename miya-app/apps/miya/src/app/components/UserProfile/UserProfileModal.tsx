import ReactModal from 'react-modal';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';

import { Button, Typography } from '@mui/material';
import { DetailsModal } from '../common';

import useNestUser from '../../services/dataHooks/useNestUser';

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
        <DetailsModal closeModal={hideModal} header={user?.username} icon="paw">
          {user?.username}
          {user?.userDescription}
        </DetailsModal>
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
