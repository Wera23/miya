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
import RetrieverProfileContent from './RetrieverProfileContent';

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
        <RetrieverProfileContent closeModal={actionsModal} />
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
