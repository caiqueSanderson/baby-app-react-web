import React from 'react';
import Grid, { GridProps } from '@mui/material/Grid';

interface IGridProps extends GridProps {
  className?: string; 
}

const GridComponent: React.FC<IGridProps> = ({ children, className, ...props }) => {
  return (
    <Grid className={className} {...props}>
      {children}
    </Grid>
  );
};

export default GridComponent;
