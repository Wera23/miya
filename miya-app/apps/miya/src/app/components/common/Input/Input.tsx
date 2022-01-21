import React from 'react';
import classnames from 'classnames';

import { TextField } from '@mui/material';

import './Input.scss';

interface InputTypes {
  inputId: string;
  label: string | number;
  placeholder: any;
  icon?: string;
  iconClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
  value: string | number | undefined;
  size: any;
  error?: any;
  onChange: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
}

const TextInput: React.FC<InputTypes> = ({
  inputId,
  label,
  placeholder,
  icon,
  iconClassName,
  inputClassName,
  containerClassName,
  size,
  error,
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
        className={inputClassName}
        size={size}
        error={error}
        fullWidth
      />
    </div>
  );
};

export default TextInput;
