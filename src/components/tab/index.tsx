import React, { ReactNode } from 'react';

interface TabProps {
  children?: ReactNode;
  props?: any;
}

const TabComponent: React.FC<TabProps> = ({ children, ...props }) => {
  return <div {...props}>Tab</div>;
};

export default TabComponent;
