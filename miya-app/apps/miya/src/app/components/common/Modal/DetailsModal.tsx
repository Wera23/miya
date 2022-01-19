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
      <i
        className={classnames('icon-cancel', styles.detailsClose)}
        onClick={closeModal}
      />

      <div className={styles.detailsModalContent}>
        <Typography variant="h2" mb={3}>
          {header}
          <i className={classnames(`icon-${icon}`, styles.detailsNameIcon)} />
        </Typography>

        {children}
      </div>
    </div>
  );
};

export default DetailsModal;
