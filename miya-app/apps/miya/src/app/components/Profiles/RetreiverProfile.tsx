import ReactModal from 'react-modal';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';

import { Button, Typography } from '@mui/material';
import { DetailsModal } from '../common';
import useNestSingleRetriever from '../../services/dataHooks/useNestSingleRetriever';
import { useParams } from 'react-router-dom';

interface SingleRetrieverProfileTypes {
  handleSingleRetrieverProfile?: () => void;
}

const SingleRetrieverProfile: React.FC<SingleRetrieverProfileTypes> = ({
  handleSingleRetrieverProfile,
}) => {
  const { retrieverId } = useParams<string>();

  const { retriever } = useNestSingleRetriever('1640691930661');

  // const [showModal, hideModal] = useModal(
  //   () => (
  //     <ReactModal isOpen ariaHideApp={false}>
  //       <DetailsModal
  //         closeModal={hideModal}
  //         header={singleRetriever?.name}
  //         icon="paw"
  //       >
  //         {singleRetriever?.name}
  //         {singleRetriever?.city}
  //       </DetailsModal>
  //     </ReactModal>
  //   ),
  //   [singleRetriever]
  // );

  // const handleClick = (): void => {
  //   showModal();
  //   handleSingleRetrieverProfile && handleSingleRetrieverProfile();
  // };

  return (
    <div>
      {retriever?.name}
      <Button>
        <i className={classnames('icon-cog')} />
        <Typography>Twoje pies {retriever?.name}</Typography>
      </Button>
    </div>
  );
};

export default SingleRetrieverProfile;
