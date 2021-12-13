import { FC } from 'react';
import { Retriever } from '@miya-app/shared-types';

import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';

import styles from './SingleRetriever.module.scss';
import { Button } from '@mui/material';
import DetailsSingleRetriever from './DetailsSingleRetriever/DetailsSingleRetriever';

interface SingleRetrieverTypes {
  handleModalReservation?: () => void;
  singleRetriever: Retriever;
}

const ModalReservation: React.FC<SingleRetrieverTypes> = ({
  handleModalReservation,
  singleRetriever,
}) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen>
        <DetailsSingleRetriever
          closeModal={hideModal}
          singleRetriever={singleRetriever}
        />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    handleModalReservation && handleModalReservation();
  };

  return (
    <div>
      <Button onClick={handleClick}>{singleRetriever.name}</Button>
    </div>
  );
};

export default ModalReservation;
