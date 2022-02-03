import { format } from 'date-fns';
import { useEffect } from 'react';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';

import { User } from '@miya-app/shared-types';

import { Typography } from '@mui/material';
import { CirclePhoto, DetailsModal, LineData, MenuButton } from '../common';
import { EditUserModal } from '..';

import styles from './ProfileModal.module.scss';
import { ProfileTypes, userProfile } from './ProfileData';
import { useIsTransparentActionsContext } from '../../context/IsTransparent';
import {
  useUserActionsContext,
  useUserContext,
} from '../../context/UserContext';
import { noImageShe, noImageHe } from '../../../assets/images';

const UserProfile: React.FC = () => {
  const { user } = useUserContext();
  const { getUser } = useUserActionsContext();
  const { setIsTransparent } = useIsTransparentActionsContext();

  useEffect(() => {
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

  useEffect(() => {
    getUser(user?.username ?? 'Wera');
  }, [getUser, user?.username]);

  const [showModal, hideModal] = useModal(() => {
    const actionsModal = () => {
      hideModal && hideModal();
      setIsTransparent(false);
    };
    return (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsModal
          closeModal={actionsModal}
          header="Twoje konto"
          icon="user"
        >
          <div className={styles.profileDialog}>
            {/* {user?.userImage ? (
              <CirclePhoto image={user.userImage} />
            ) : (
              <h1></h1>>
            )}
 */}



            <div className={styles.profileContent}>
              {userProfile.map((userSimpleData: ProfileTypes) => (
                <LineData value="userDescription" data={userSimpleData.value}>
                  <Typography variant="body2" pr={1}>
                    {userSimpleData.name}
                  </Typography>
                  <Typography variant="body1">
                    {userSimpleData.value === 'dateOfBirth'
                      ? format(new Date(), 'dd-MM-yyyy')
                      : user?.[userSimpleData.value as keyof User]}
                  </Typography>
                </LineData>
              ))}
            </div>
          </div>
          <EditUserModal />
        </DetailsModal>
      </ReactModal>
    );
  }, [user]);

  const handleClick = (): void => {
    showModal();
    setIsTransparent(true);
  };

  return (
    <MenuButton
      handleClickButton={handleClick}
      buttonText="Twoje konto"
      buttonIcon="cog"
    />
  );
};

export default UserProfile;
