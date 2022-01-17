import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';
import classnames from 'classnames';
import useNestUser from '../../services/dataHooks/useNestUser';
import { useLoggedInContext } from '../../context/IsLoggedIn';

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
        <div>
          <i className="icon-cancel" onClick={hideModal} />
          {user?.username}
          {user?.dateOfBirth}
          {user?.userDescription}
        </div>
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
