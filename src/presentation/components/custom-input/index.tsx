import React from 'react';

import { useFormContext } from 'react-hook-form';
import { WithTranslation, withTranslation } from 'react-i18next';
import { InputType } from '../../../domain/enums/input';
import { Container, Input } from './styles';

interface CustomInputProps extends WithTranslation {
  label: string;
  inputName: string;
  customOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customOnBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  maxLength?: number;
  disabled?: boolean;
  type: InputType;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  inputName,
  defaultValue,
  maxLength = 1000,
  disabled = false,
  type = InputType.TEXT,
  customOnBlur,
  customOnChange,

  placeholder,
}) => {
  const { register } = useFormContext();

  const { onChange, onBlur } = register(inputName);

  return (
    <Container>
      <Input
        {...register(inputName)}
        type={type}
        placeholder={placeholder}
        onChange={e => {
          void onChange(e);
          if (customOnChange) customOnChange(e);
        }}
        onBlur={e => {
          void onBlur(e);
          if (customOnBlur) customOnBlur(e);
        }}
        defaultValue={defaultValue}
        maxLength={maxLength}
        disabled={disabled}
      />
    </Container>
  );
};

export default withTranslation()(CustomInput);
