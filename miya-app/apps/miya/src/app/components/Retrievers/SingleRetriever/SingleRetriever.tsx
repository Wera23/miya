import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { useEffect } from 'react';

import { Retriever } from '@miya-app/shared-types';

import { Button, Typography } from '@mui/material';
import { DetailsSingleRetriever } from '../..';

import styles from './SingleRetriever.module.scss';
import { useIsTransparentActionsContext } from '../../../context/IsTransparent';

interface SingleRetrieverTypes {
  singleRetriever: Retriever;
}

const SingleRetrieverModal: React.FC<SingleRetrieverTypes> = ({
  singleRetriever,
}) => {
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
        <DetailsSingleRetriever
          closeModal={actionsModal}
          singleRetriever={singleRetriever}
        />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    setIsTransparent(true);
  };

  return (
    <div className={styles.labelSingleRetriever}>
      <Typography variant="h2" mb={0}>
        {singleRetriever.name}
      </Typography>
      <Typography variant="body1" mb={3} mt={0}>
        {singleRetriever.city}
      </Typography>
      <Typography variant="body1" mb={3} mt={0}>
        ID: {singleRetriever.id}
      </Typography>
      <Button
        size="small"
        className={styles.buttonSingleRetriever}
        onClick={handleClick}
        color="success"
      >
        <Typography variant="button">
          Poznaj psa <i className="icon-paw" />
        </Typography>
      </Button>
    </div>
  );
};

export default SingleRetrieverModal;
