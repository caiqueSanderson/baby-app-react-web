import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type ITextFieldProps = TextFieldProps & {
  className?: string;
  mask?: string;
};

const TextFieldComponent: React.FC<ITextFieldProps> = ({
  className = "",
  variant = "outlined",
  ...props
}) => {
  return (
    <TextField
      className={`general-textfield ${className}`}
      variant={variant}
      {...props}
    />
  );
};

export default TextFieldComponent;
