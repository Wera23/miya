import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';

import { BasicButton } from '../../common';

import { RETRIEVER_ID } from '../../../constans';
import {
  useIsDeleteRetrieverActionsContext,
  useRetrieverActionsContext,
} from '../../../context';
import { deleteSpecificRetriever } from '../../../services/retrieverService';
import styles from './DeleteRetrieverModal.module.scss';
import { Typography } from '@mui/material';
import classNames from 'classnames';
import classnames from 'classnames';

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
    />
  );
};

export default DeleteRetrieverModal;
