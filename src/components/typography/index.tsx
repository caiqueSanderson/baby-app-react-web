import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface ITextProps extends TypographyProps {
  children?: React.ReactNode;
  className?: string;
  props?: any;
}

const TextComponent: React.FC<ITextProps> = ({ children, className, ...props }) => {
  return <Typography className={className} {...props}>{children}</Typography>;
}

export default TextComponent;