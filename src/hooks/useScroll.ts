import { useEffect, useState } from "react";

interface ScrollInfo {
  scrollY: number;
  scrollProgress: number;
  scrollDirection: 'up' | 'down' | null;
}

export function useScroll(): ScrollInfo {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    scrollY: 0,
    scrollProgress: 0,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';

      setScrollInfo({
        scrollY,
        scrollProgress,
        scrollDirection,
      });

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollInfo;
}