import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { BasicButton } from '../../common';
import EditRetrieverForm from './EditRetrieverForm/EditRetrieverForm';

interface EditRetrieverTypes {
  customClassName: string;
}

const EditRetrieverModal: React.FC<EditRetrieverTypes> = ({
  customClassName,
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
  };

  return (
    <BasicButton
      onClick={handleClick}
      buttonText="Edytuj psa"
      buttonIcon="paw"
      customClassName={customClassName}
    />
  );
};

export default EditRetrieverModal;
