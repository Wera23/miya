import React from 'react';
import classnames from 'classnames';
import './Input.scss';
import { TextField } from '@mui/material';
import { sizeWidth } from '@mui/system';

interface IProps {
  inputId: string;
  label: string;
  placeholder: string;
  icon?: string;
  iconClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  value: string;
  size: any;
  onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
}

const TextInput: React.FC<IProps> = ({
  inputId,
  label,
  placeholder,
  icon,
  iconClassName,
  inputClassName,
  containerClassName,
  size,
  ...props
}) => {
  return (
    <div className={classnames(containerClassName, 'inputContainer')}>
      <i className={classnames(`icon-${icon}`, 'inputIcon', iconClassName)} />

      <TextField
        id={inputId}
        label={label}
        placeholder={placeholder}
        margin="normal"
        {...props}
        className={classnames('inputField', inputClassName)}  
        size={size}      
      />
    </div>
  );
};

export default TextInput;
