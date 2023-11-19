import React, { createContext } from 'react';
import useResponsiveHook from '../../utils/useResponsiveHook';

interface ResponsiveContextProps {
  isMobile: boolean;
  isTablet: boolean;
  isMidTablet: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextProps>(
  {} as ResponsiveContextProps,
);

const ResponsiveContextProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const { isMobile, isTablet, isMidTablet } = useResponsiveHook();

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isMidTablet }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export { ResponsiveContextProvider };
export default ResponsiveContext;
