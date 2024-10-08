import { styled } from 'styled-components';
import WorkCardItem from './WorkCardItem';
import { WorkListType } from '../../../types/types';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface ExhibitionSectionProps {
  data:
    | {
        pages: WorkListType[];
        pageParams: number[];
      }
    | undefined;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
  isFetchingNextPage: boolean;
  isMobile: boolean;
}

const ExhibitionSection = ({
  data,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  isMobile,
}: ExhibitionSectionProps) => {
  if (!data?.pages && !isFetchingNextPage) {
    return <ExhibitionWrapper isMobile={isMobile} />;
  }

  // intersectionObserver 호출
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  console.log('data', data);
  return (
    <ExhibitionWrapper isMobile={isMobile}>
      {data?.pages.map((work, index) => {
        const isLastItem = index === data.pages.length - 1;
        return (
          <WorkCardItem
            name={work.studentName}
            title={work.title}
            imgUrl={work.thumbnailUrl}
            isLastItem={isLastItem}
            setTarget={setTarget}
          />
        );
      })}
    </ExhibitionWrapper>
  );
};

export default ExhibitionSection;

const ExhibitionWrapper = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '34.3rem' : '95rem')};
  margin-left: ${({ isMobile }) => (isMobile ? null : '33.85%')};
  margin-top: ${({ isMobile }) => (isMobile ? '4.1rem' : null)};
  display: grid;
  grid-template-rows: ${({ isMobile }) => (isMobile ? 'repeat(10, 1fr)' : 'repeat(5, 1fr)')};
  grid-template-columns: ${({ isMobile }) => (isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)')};
  gap: 20px;
`;
