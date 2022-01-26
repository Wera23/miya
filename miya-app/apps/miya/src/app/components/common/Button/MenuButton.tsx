import classnames from 'classnames';

import { Button, Typography } from '@mui/material';

import styles from './Button.module.scss';
import { useIsTransparentContext } from '../../../context/IsTransparent';

interface MenuButtonTypes {
  handleClickButton: () => void;
  buttonText: string;
  buttonIcon: string;
}

const MenuButton: React.FC<MenuButtonTypes> = ({
  handleClickButton,
  buttonText,
  buttonIcon,
}) => {
  const { isTransparent } = useIsTransparentContext();

  return (
    <Button onClick={handleClickButton}>
      <i
        className={classnames(
          `icon-${buttonIcon}`,
          isTransparent && styles.isTransparentIcon
        )}
      />
      <Typography
        className={classnames(
          isTransparent && styles.isTransparentColor,
          styles.buttonIcon
        )}
      >
        {buttonText}
      </Typography>
    </Button>
  );
};

export default MenuButton;
