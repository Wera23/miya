import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';
import classnames from 'classnames';
import EditUserForm from './EditUserForm/EditUserForm';

interface EditUserTypes {
  handleEditUser?: () => void;
}

const EditUserModal: React.FC<EditUserTypes> = ({ handleEditUser }) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen ariaHideApp={false}>
        <EditUserForm closeModal={hideModal} />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal();
    handleEditUser && handleEditUser();
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <i className={classnames('icon-cog')} />
        <Typography> Edytuj Użytkownika</Typography>
      </Button>
    </div>
  );
};

export default EditUserModal;
