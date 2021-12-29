import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';

import styles from './SingleRetriever.module.scss';
import { DetailsSingleRetriever } from '..';

import { Retriever } from '@miya-app/shared-types';

interface SingleRetrieverTypes {
  handleModalSeeDetails?: () => void;
  singleRetriever: Retriever;
}

const SingleRetrieverModal: React.FC<SingleRetrieverTypes> = ({
  handleModalSeeDetails,
  singleRetriever,
}) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsSingleRetriever
          closeModal={hideModal}
          singleRetriever={singleRetriever}
        />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    handleModalSeeDetails && handleModalSeeDetails();
  };

  return (
    <div className={styles.labelSingleRetriever}>
      <Typography variant="h2" mb={0}>
        {singleRetriever.name}
      </Typography>
      <Typography variant="body1" mb={3} mt={0}>
        {singleRetriever.city}
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
