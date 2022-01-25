import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';
import classnames from 'classnames';
import EditRetrieverForm from './EditRetrieverForm/EditRetrieverForm';

interface EditRetrieverTypes {
  handleEditRetriever?: () => void;
}

const EditRetrieverModal: React.FC<EditRetrieverTypes> = ({
  handleEditRetriever,
}) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen ariaHideApp={false}>
        <EditRetrieverForm
          closeModal={hideModal}
        />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    handleEditRetriever && handleEditRetriever();
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <i className={classnames('icon-paw')} />
        <Typography> Edytuj psa</Typography>
      </Button>
    </div>
  );
};

export default EditRetrieverModal;
