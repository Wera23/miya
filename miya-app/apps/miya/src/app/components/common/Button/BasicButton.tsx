import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { FC } from 'react';
import { Typography } from '@mui/material';
import classnames from 'classnames';
import styles from './Button.module.scss';

interface BasicButtonProps extends ButtonProps {
  buttonText: string;
  buttonIcon?: string;
  customClassName?: string;
}

const BasicButton: FC<BasicButtonProps> = ({
  buttonText,
  buttonIcon,
  customClassName,
  ...rest
}) => (
  <button
    className={classnames(styles.buttonBasic, customClassName)}
    type="submit"
    {...rest}
  >
    <i className={classnames(`icon-${buttonIcon}`, styles.basicButtonIcon)} />
    <Typography>{buttonText}</Typography>
  </button>
);

export default BasicButton;
