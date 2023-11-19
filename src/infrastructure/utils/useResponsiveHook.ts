import { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ScreenDimensions } from '../../domain/enums/screenDimension';

const useResponsiveHook = () => {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: ScreenDimensions.MOBILE,
  });

  const isTablet = useMediaQuery({
    maxWidth: ScreenDimensions.TABLET,
  });

  const isMidTablet = useMediaQuery({
    maxWidth: ScreenDimensions.MID_TABLET,
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isClient,
    isMobile: isClient ? isMobile : false,
    isTablet: isClient ? isTablet : false,
    isMidTablet: isClient ? isMidTablet : false,
  };
};

export default useResponsiveHook;
