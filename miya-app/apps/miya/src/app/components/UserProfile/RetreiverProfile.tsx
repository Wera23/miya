import ReactModal from 'react-modal';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';

import { Button, Typography } from '@mui/material';
import { DetailsModal } from '../common';

import useNestSingleRetriever from '../../services/dataHooks/useNestSingleRetriever';

interface SingleRetrieverProfileTypes {
  handleSingleRetrieverProfile?: () => void;
}

const SingleRetrieverProfileModal: React.FC<SingleRetrieverProfileTypes> = ({
  handleSingleRetrieverProfile,
}) => {
  const { singleRetriever } = useNestSingleRetriever();

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen ariaHideApp={false}>
        <DetailsModal
          closeModal={hideModal}
          header={singleRetriever?.name}
          icon="paw"
        >
          {singleRetriever?.name}
          {singleRetriever?.city}
        </DetailsModal>
      </ReactModal>
    ),
    [singleRetriever]
  );

  const handleClick = (): void => {
    showModal();
    handleSingleRetrieverProfile && handleSingleRetrieverProfile();
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <i className={classnames('icon-cog')} />
        <Typography>Twoje pies</Typography>
      </Button>
    </div>
  );
};

export default SingleRetrieverProfileModal;
