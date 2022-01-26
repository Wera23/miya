import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { BasicButton } from '../../common';
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
        <EditRetrieverForm closeModal={hideModal} />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    handleEditRetriever && handleEditRetriever();
  };

  return (
    <BasicButton
      onClick={handleClick}
      buttonText="Edytuj psa"
      buttonIcon="paw"
    />
  );
};

export default EditRetrieverModal;
