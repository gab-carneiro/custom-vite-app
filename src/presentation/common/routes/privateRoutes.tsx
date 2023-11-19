import React from 'react';

interface PrivateRoutesProps {
  children: React.ReactNode;
}
const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
  return <>{children}</>;
};

export default PrivateRoutes;
