import { useEffect } from 'react';
import { useModal } from 'react-modal-hook';
import ReactModal from 'react-modal';

import { Typography } from '@mui/material';
import {
  AddRetrieverModal,
  DeleteRetrieverModal,
  EditRetrieverModal,
} from '..';
import { CirclePhoto, DetailsModal, LineData, MenuButton } from '../common';

import styles from './ProfileModal.module.scss';
import {
  useRetrieverActionsContext,
  useRetrieverContext,
} from '../../context/RetrieverContext';
import { retrieverProfile, ProfileTypes } from './ProfileData';
import { Retriever } from '@miya-app/shared-types';
import { useIsTransparentActionsContext } from '../../context/IsTransparent';
import { retrieverGraphic, noImageRetriever } from '../../../assets/images';

const RetrieverProfile: React.FC = () => {
  const { getRetriever } = useRetrieverActionsContext();
  const { retriever } = useRetrieverContext();
  const { setIsTransparent } = useIsTransparentActionsContext();

  useEffect(() => {
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

  useEffect(() => {
    getRetriever(retriever?.id ?? 0);
  }, [getRetriever, retriever?.id]);

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
          icon="paw"
        >
          {retriever?.id ? (
            <>
              <div className={styles.profileDialog}>
                {retriever?.image ? (
                  <CirclePhoto image={retriever.image} />
                ) : (
                  <CirclePhoto image={noImageRetriever} />
                )}

                <div className={styles.profileContent}>
                  {retrieverProfile.map((retrieverSimpleData: ProfileTypes) => (
                    <LineData
                      value="description"
                      data={retrieverSimpleData.value}
                    >
                      <Typography variant="body2" pr={1}>
                        {retrieverSimpleData.name}
                      </Typography>

                      <Typography variant="body1">
                        {
                          retriever?.[
                            retrieverSimpleData.value as keyof Retriever
                          ]
                        }
                      </Typography>
                    </LineData>
                  ))}
                </div>
              </div>
              <div className={styles.profileActions}>
                <EditRetrieverModal
                  customClassName={styles.profileActionButton}
                />
                <DeleteRetrieverModal
                  customClassName={styles.profileActionButton}
                />
              </div>
            </>
          ) : (
            <div className={styles.addNewRetriever}>
              <img src={retrieverGraphic} alt="" />
              <Typography variant="body2" mb={5}>
                Nie posiadasz aktualnie w bazie żadnego psa.
              </Typography>
              <AddRetrieverModal />
              <Typography
                onClick={hideModal}
                variant="body1"
                mt={3}
                color="green"
                className={styles.addNewRetrieverLink}
              >
                Lub wróc do przeglądania mapy z retieverami
              </Typography>
            </div>
          )}
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
