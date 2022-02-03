import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { useModal } from 'react-modal-hook';

import { MenuButton } from '../../common';
import { AddRetrieverForm } from '../..';

import { initialValues } from './AddRetrieverForm/FormInitialValues';
import {
  useIsDeleteRetrieverActionsContext,
  useIsTransparentActionsContext,
} from '../../../context';

interface AddRetrieverTypes {
  customClassName?: string;
}

const AddRetrieverModal: React.FC<AddRetrieverTypes> = ({
  customClassName,
}) => {
  const { setIsTransparent } = useIsTransparentActionsContext();
  const { setDeleteRetriever } = useIsDeleteRetrieverActionsContext();

  useEffect(() => {
    return () => {
      setIsTransparent(false);
    };
  }, [setIsTransparent]);

  const [showModal, hideModal] = useModal(() => {
    const actionsModal = () => {
      hideModal && hideModal();
      setIsTransparent(false);
    };

    return (
      <ReactModal isOpen ariaHideApp={false}>
        <AddRetrieverForm
          closeModal={actionsModal}
          initialValues={initialValues}
        />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    setIsTransparent(true);
    setDeleteRetriever(false);
  };

  return (
    <MenuButton
      handleClickButton={handleClick}
      buttonText="Dodaj psa"
      buttonIcon="paw"
      customClassName={customClassName}
    />
  );
};

export default AddRetrieverModal;
