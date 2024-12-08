import React from 'react';
import { Fab, FabProps } from '@mui/material';

interface IFabProps extends FabProps {
    children?: React.ReactNode;
    size: 'small' | 'medium' | 'large';  
    sx: {
        color: string;
        backgroundColor: string;
        position: string;
        bottom: string;
    }
    onClick: () => void | Promise<void>;
    props: any;
}

const FabComponent: React.FC<IFabProps> = ({ children, ...props }) => {
    return <Fab {...props}>{children}</Fab>;
}

export default FabComponent;