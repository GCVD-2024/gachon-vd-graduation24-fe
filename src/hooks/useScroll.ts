import { useState, useEffect } from 'react';

interface ScrollInfo {
  scrollY: number;
  scrollProgress: number;
}

export function useScroll(): ScrollInfo {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    scrollY: 0,
    scrollProgress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;

      setScrollInfo({
        scrollY,
        scrollProgress,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollInfo;
}
