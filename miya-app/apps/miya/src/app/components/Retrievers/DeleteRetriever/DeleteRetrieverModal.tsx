import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { RETRIEVER_ID } from '../../../constans';
import {
  useIsDeleteRetrieverActionsContext,
  useIsDeleteRetrieverContext,
  useIsTransparentActionsContext,
} from '../../../context';
import { useRetrieverActionsContext } from '../../../context/RetrieverContext';
import { deleteSpecificRetriever } from '../../../services/retrieverService';
import { BasicButton } from '../../common';

const DeleteRetrieverModal: React.FC = () => {
  const { getRetriever } = useRetrieverActionsContext();
  const { setDeleteRetriever } = useIsDeleteRetrieverActionsContext();

  const [showModal, hideModal] = useModal(() => {
    const handleDeleteRetriever = () => {
      deleteSpecificRetriever(RETRIEVER_ID);
      getRetriever(RETRIEVER_ID);
      setDeleteRetriever(true);
    };

    return (
      <ReactModal isOpen ariaHideApp={false}>
        <h2>Potwierdź usunięcie swojego psa z bazy</h2>
        <div>
          <button onClick={handleDeleteRetriever}>OK</button>
          <button onClick={hideModal}>Anuluj</button>
        </div>
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
  };

  return (
    <BasicButton
      onClick={handleClick}
      buttonText="Usuń swojego psa"
      buttonIcon="paw"
    />
  );
};

export default DeleteRetrieverModal;
