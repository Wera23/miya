import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { FC } from 'react';
import { Typography } from '@mui/material';
import classnames from 'classnames';
import styles from './Button.module.scss';

const darkerBg = '#006e3a';
const brighterBg = '#00783f';

const StyledButtonForm = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '7px 12px',
  border: `1px solid ${brighterBg}`,
  color: '#fff',
  lineHeight: 1.5,
  outline: 'none',
  backgroundColor: brighterBg,
  fontFamily: ['Dosis'],
  '&:hover': {
    backgroundColor: darkerBg,
    borderColor: darkerBg,
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: darkerBg,
    borderColor: darkerBg,
    boxShadow: 'none',
    outline: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

interface BasicButtonProps extends ButtonProps {
  buttonText: string;
  buttonIcon?: string;
}

const BasicButton: FC<BasicButtonProps> = ({
  buttonText,
  buttonIcon,
  ...rest
}) => (
  <StyledButtonForm type="submit" {...rest}>
    <i className={classnames(`icon-${buttonIcon}`, styles.basicButtonIcon)} />
    <Typography>{buttonText}</Typography>
  </StyledButtonForm>
);

export default BasicButton;
