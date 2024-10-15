import { styled } from 'styled-components';
import { WorkListType } from '../../../../types/types';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import WorkCardItem from './WorkCardItem';

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
  display: ${({ isMobile }) => (isMobile ? 'flex' : null)};
  justify-content: ${({ isMobile }) => (isMobile ? 'center' : null)};
  width: ${({ isMobile }) => (isMobile ? '34.3rem' : '95rem')};
  margin-left: ${({ isMobile }) => (isMobile ? null : '33rem')};
  margin-top: ${({ isMobile }) => (isMobile ? '14.8rem' : null)};

  display: grid;
  grid-template-rows: ${({ isMobile }) => (isMobile ? 'repeat(10, 1fr)' : 'repeat(5, 1fr)')};
  grid-template-columns: ${({ isMobile }) => (isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)')};
  gap: ${({ isMobile }) => (isMobile ? '1.6rem' : '1.4rem')};
`;
