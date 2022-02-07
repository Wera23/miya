import { FC, useState } from 'react';
import classnames from 'classnames';

import styles from './ConfirmPopup.module.scss';
import { BasicButton, Message } from '..';
import { AnimationConfirmOk } from '../../../Animations';

interface ConfirmPopupTypes {
  messageText: string;
  buttonIcon: string;
  buttonText: string;
  customClassName?: string;
  closeModal: () => void;
}

const ConfirmPopup: FC<ConfirmPopupTypes> = ({
  messageText,
  buttonIcon,
  buttonText,
  customClassName,
  closeModal,
}) => {
  const [showButtonClose, setShowButtonClose] = useState(false);

  setTimeout(() => {
    setShowButtonClose(true);
  }, 2000);

  return (
    <div className={classnames(styles.confirmPopup, customClassName)}>
      <Message
        messageText={messageText}
        colorMessage="green"
        classCustomeName={styles.confirmPopupMessage}
      />
      <AnimationConfirmOk />

      <BasicButton
        buttonText={buttonText}
        buttonIcon={buttonIcon}
        onClick={closeModal}
        customClassName={classnames(
          styles.invisibleButton,
          showButtonClose && styles.visibleButton
        )}
      />
    </div>
  );
};

export default ConfirmPopup;
