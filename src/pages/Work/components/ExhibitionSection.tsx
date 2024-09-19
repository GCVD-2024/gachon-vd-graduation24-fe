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
}

const ExhibitionSection = ({
  data,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: ExhibitionSectionProps) => {
  if (!data?.pages && !isFetchingNextPage) {
    return <ExhibitionWrapper />;
  }

  // intersectionObserver 호출
  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  console.log('data', data);
  return (
    <ExhibitionWrapper>
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

const ExhibitionWrapper = styled.div`
  width: 950px;
  margin-left: 33.85%;

  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
