import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useIntersectionObserver = ({
  threshold = 0.5,
  hasNextPage,
  fetchNextPage,
}: useIntersectionObserverProps) => {
  
  //관찰할 요소
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    // 관찰 시작
    observer.observe(target);

    // 관찰 중지
    return () => observer.unobserve(target);
  }, [observerCallback, threshold, target]);

  return { setTarget };
};
