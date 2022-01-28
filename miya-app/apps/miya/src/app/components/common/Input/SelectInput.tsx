import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';

import { SelectOptions } from './SelectOption';
import './SelectInput.scss';

interface SelectInputTypes {
  onChange: any;
  options: SelectOptions[];
  value: string;
  icon?: string;
  label: string;
  placeholder: string;
}

const SelectInput: React.FC<SelectInputTypes> = ({
  onChange,
  options,
  value,
  icon,
  label,
  placeholder
}) => {
  const defaultValue = (options: any, value: string) => {
    return options
      ? options.find((option: SelectOptions) => option.value === value)
      : '';
  };

  return (
    <div className="inputContainer">
      <i className={classnames(`icon-${icon}`, 'inputIcon')} />

      <div className="selectInput">
        <label className="selectInputLabel">{label}</label>
        <Select
          value={defaultValue(options, value)}
          onChange={(value) => {
            onChange(value);
          }}
          options={options}
          placeholder={placeholder}
          classNamePrefix="react-select-custom"
          className="react-select-container"
        />
      </div>
    </div>
  );
};

export default SelectInput;
