import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { FC } from 'react';

//Todo: dopracować komponent
const StyledButtonForm = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  color: 'white',
  lineHeight: 1.5,
  outline: 'none',
  backgroundColor: '#349041',
  fontFamily: ['Dosis'],
  '&:hover': {
    backgroundColor: '#4ba758',
    borderColor: '#4ba758',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#4ba758',
    outline: 'none',

    borderColor: '#4ba758',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

interface ButtonFormProps extends ButtonProps {
  message: string;
}

const ButtonForm: FC<ButtonFormProps> = ({ message, ...rest }) => (
  <StyledButtonForm type="submit" {...rest}>
    {message}
  </StyledButtonForm>
);

export default ButtonForm;
