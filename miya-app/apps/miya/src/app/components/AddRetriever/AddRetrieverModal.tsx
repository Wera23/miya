import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';
import { AddRetrieverForm } from '..';
import { initialValues } from './AddRetrieverForm/FormInitialValues';


interface SingleRetrieverTypes {
  handleAddRetriever?: () => void;
}

const AddRetrieverModal: React.FC<SingleRetrieverTypes> = ({
  handleAddRetriever,
}) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen ariaHideApp={false}>
        <AddRetrieverForm
          onSubmit={() => alert('onSubmit')}
          initialValues={initialValues}
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
        <Typography>Dodaj psa</Typography>
      </Button>
    </div>
  );
};

export default AddRetrieverModal;
