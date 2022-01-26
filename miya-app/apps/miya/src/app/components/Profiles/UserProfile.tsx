import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { useModal } from 'react-modal-hook';

import { User } from '@miya-app/shared-types';

import { Typography } from '@mui/material';
import { DetailsModal, LineData, MenuButton } from '../common';
import { EditUserModal } from '..';

import styles from './ProfileModal.module.scss';
import { ProfileTypes, userProfile } from './ProfileData';
import useNestUser from '../../services/dataHooks/useNestUser';
import { useIsTransparentActionsContext } from '../../context/IsTransparent';

const UserProfile: React.FC = () => {
  const { user } = useNestUser();
  const { setIsTransparent } = useIsTransparentActionsContext();

  useEffect(() => {
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

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
            <div
              className={styles.profileImage}
              style={{
                backgroundImage: `url(https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/248946323_3111159129164218_6658650979357560016_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=Mxq5PWfil7wAX-HcPmF&tn=GYuTEocvppeCHzo3&_nc_ht=scontent.fpoz4-1.fna&oh=00_AT_MpMQVOX5MnA7b8BoGrILSThA_IeW6B9q-PrcpmJHX7w&oe=61F61A44)`,
              }}
            />

            <div className={styles.profileContent}>
              {userProfile.map((userSimpleData: ProfileTypes) => (
                <LineData value="userDescription" data={userSimpleData.value}>
                  <Typography variant="body2" pr={1}>
                    {userSimpleData.name}
                  </Typography>
                  <Typography variant="body1">
                    {user?.[userSimpleData.value as keyof User]}
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
