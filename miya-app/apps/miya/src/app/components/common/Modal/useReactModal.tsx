// import { useEffect } from 'react';
// import { useModal } from 'react-modal-hook';
// import classnames from 'classnames';

// import ReactModal from 'react-modal';
// import { Button, Typography } from '@mui/material';

// import { AddRetrieverForm } from '../..';
// import {
//   useIsTransparentActionsContext,
//   useIsTransparentContext,
// } from '../../../context/IsTransparent';
// import styles from './AddRetrieverModel.module.scss';

// const AddRetrieverModal: React.FC = () => {
//   const { isTransparent } = useIsTransparentContext();
//   const { setIsTransparent } = useIsTransparentActionsContext();

//   useEffect(() => {
//     return () => {
//       setIsTransparent(false);
//     };
//   }, [setIsTransparent]);

//   const [showModal, hideModal] = useModal(() => {
//     const actionsModal = () => {
//       hideModal && hideModal();
//       setIsTransparent(false);
//     };

//     return (
//       <ReactModal isOpen ariaHideApp={false}>
//         <AddRetrieverForm
//           closeModal={actionsModal}
//           initialValues={initialValues}
//         />
//       </ReactModal>
//     );
//   });

//   const handleClick = (): void => {
//     showModal();
//     setIsTransparent(true);
//   };

//   return (
//     <Button onClick={handleClick}>
//       <i className={classnames('icon-paw')} />
//       <Typography
//         className={classnames(isTransparent && styles.isTransparentColor)}
//       >
//         { }
//       </Typography>
//     </Button>
//   );
// };

// export default AddRetrieverModal;
