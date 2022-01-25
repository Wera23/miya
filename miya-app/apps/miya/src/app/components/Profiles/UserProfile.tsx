import ReactModal from 'react-modal';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';

import { Button, Typography } from '@mui/material';
import { DetailsModal } from '../common';
import { EditUserModal, RetrieverProfile } from '..';

import styles from './ProfileModal.module.scss';
import useNestUser from '../../services/dataHooks/useNestUser';
import { ProfileTypes, userProfile } from './ProfileData';
import { User } from '@miya-app/shared-types';

interface UserProfileTypes {
  handleUserProfile?: () => void;
}

const UserProfile: React.FC<UserProfileTypes> = ({ handleUserProfile }) => {
  const { user } = useNestUser();

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsModal closeModal={hideModal} header="Twoje konto" icon="cog">
          <div className={styles.profileContent}>
            {userProfile.map((userSimpleData: ProfileTypes) => (
              <div
                className={classnames(
                  styles.detailsProfileLine,
                  styles.userProfileLine
                )}
              >
                <Typography variant="body2" pr={1}>
                  {userSimpleData.name}
                </Typography>
                <Typography variant="body1">
                  {user?.[userSimpleData.value as keyof User]}
                </Typography>
              </div>
            ))}
          </div>
          <RetrieverProfile />
          <EditUserModal />
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

export default UserProfile;
