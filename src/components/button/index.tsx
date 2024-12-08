import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
  children?: React.ReactNode;
  props?: any;
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  className?: string;
}

const ButtonComponent: React.FC<IButtonProps> = ({ children, className, ...props }) => {
  const { variant = "contained", size = "large" } = props;

  return <Button
    className={className}
    variant={variant}
    size={size}
    {...props}>
    {children}
  </Button>;
}

export default ButtonComponent;