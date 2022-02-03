import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';

import { BasicButton } from '../../common';

import { RETRIEVER_ID } from '../../../constans';
import {
  useIsDeleteRetrieverActionsContext,
  useRetrieverActionsContext,
  useRetrieverContext,
} from '../../../context';
import { deleteSpecificRetriever } from '../../../services/retrieverService';
import styles from './DeleteRetrieverModal.module.scss';
import { Typography } from '@mui/material';
import classnames from 'classnames';

interface DeleteRetrieverTypes {
  customClassName: string;
}

const DeleteRetrieverModal: React.FC<DeleteRetrieverTypes> = ({
  customClassName,
}) => {
  const { retriever } = useRetrieverContext();
  const { cleanRetrieverData } = useRetrieverActionsContext();
  const { setDeleteRetriever } = useIsDeleteRetrieverActionsContext();

  const [showModal, hideModal] = useModal(() => {
    const handleDeleteRetriever = () => {
      deleteSpecificRetriever(retriever?.id ?? 0);
      setDeleteRetriever(true);
      cleanRetrieverData();
      setTimeout(() => {
        hideModal();
      }, 700);
    };

    return (
      <ReactModal isOpen ariaHideApp={false}>
        <div className={styles.deleteRetrieverConfirm}>
          <Typography variant="body2" mb={4}>
            Potwierdź usunięcie swojego psa z bazy
          </Typography>
          <div>
            <i
              className={classnames('icon-check', styles.deleteModalIcon)}
              onClick={handleDeleteRetriever}
            />
            <i
              className={classnames('icon-cancel', styles.deleteModalIcon)}
              onClick={hideModal}
            />
          </div>
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
      customClassName={customClassName}
    />
  );
};

export default DeleteRetrieverModal;
