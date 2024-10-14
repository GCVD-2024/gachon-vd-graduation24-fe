import { PropsWithChildren, useEffect, useState } from 'react';

const DelayedComponent = ({ children }: PropsWithChildren<{}>) => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDelayed(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return isDelayed ? <>{children}</> : null;
};

export default DelayedComponent;
