import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { useModal } from 'react-modal-hook';

import { MenuButton } from '../../common';
import { AddRetrieverForm } from '../..';

import { initialValues } from './AddRetrieverForm/FormInitialValues';
import { useIsTransparentActionsContext } from '../../../context/IsTransparent';

const AddRetrieverModal: React.FC = () => {
  const { setIsTransparent } = useIsTransparentActionsContext();

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
  };

  return (
    <MenuButton
      handleClickButton={handleClick}
      buttonText="Dodaj psa"
      buttonIcon="paw"
    />
  );
};

export default AddRetrieverModal;
