import React from 'react';
import { Container, ContainerProps } from '@mui/material';

interface IContainerProps extends ContainerProps {
  children?: React.ReactNode;
  component?: "main";
  maxWidth?: "xs";
  className?: string;
  props?: any;
}

const ContainerComponent: React.FC<IContainerProps> = ({ children, className, ...props }) => {
  return <Container className={className} {...props}>{children}</Container>;
}

export default ContainerComponent;