import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';
import { editValues } from './EditRetrieverForm/FormEditValues';
import classnames from 'classnames';
import EditRetrieverForm from './EditRetrieverForm/EditRetrieverForm';

interface EditRetrieverTypes {
  handleAddRetriever?: () => void;
}



const EditRetrieverModal: React.FC<EditRetrieverTypes> = ({
  handleAddRetriever,
}) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen ariaHideApp={false}>
        <EditRetrieverForm
          onSubmit={() => alert('onSubmit')}
          closeModal={hideModal}
          editValues={editValues}
        />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    handleAddRetriever && handleAddRetriever();
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
