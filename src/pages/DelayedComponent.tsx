import { PropsWithChildren, useEffect, useState } from 'react';

const DelayedComponent = ({ children }: PropsWithChildren<{}>) => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    console.log('타이머 시작');
    const timeoutId = setTimeout(() => {
      setIsDelayed(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return isDelayed ? <>{children}</> : null;
};

export default DelayedComponent;
