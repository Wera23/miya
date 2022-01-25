import { FC } from 'react';
import classnames from 'classnames';

import { Typography } from '@mui/material';

import styles from './DetailsModal.module.scss';
import './ReactModal.scss';

interface ModalTypes {
  closeModal: () => void;
  icon?: string;
  header?: string;
}

const DetailsModal: FC<ModalTypes> = ({
  closeModal,
  icon,
  header,
  children,
}) => {
  return (
    <div className={styles.detailsModal}>
    <div className={styles.detailsClose}>  <i
        className={classnames('icon-cancel', styles.detailsIconClose)}
        onClick={closeModal}
      /></div>

      <div className={styles.detailsModalContent}>
        <Typography variant="h2" mb={3}>
          {header}
          <i className={classnames(`icon-${icon}`, styles.detailsNameIcon)} />
        </Typography>

        <div className={styles.detailsModalForm}>{children}</div>
      </div>
    </div>
  );
};

export default DetailsModal;
