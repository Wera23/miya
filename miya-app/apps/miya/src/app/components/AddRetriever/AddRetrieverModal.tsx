import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';
import { AddRetrieverForm } from '..';
import { initialValues } from './AddRetrieverForm/FormInitialValues';
import classnames from 'classnames';

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
          closeModal={hideModal}
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
        <i className={classnames('icon-paw')} />
        <Typography> Dodaj psa</Typography>
      </Button>
    </div>
  );
};

export default AddRetrieverModal;
