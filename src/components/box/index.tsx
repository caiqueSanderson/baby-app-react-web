import React from 'react';
import { Box } from '@mui/material';

export default function BoxComponent({ children, className, ...props }) {
    return <Box className={className} {...props}>{children}</Box>;
}
