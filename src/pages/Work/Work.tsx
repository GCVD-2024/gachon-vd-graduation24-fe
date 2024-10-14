import { Helmet } from 'react-helmet-async';
import CategoriesSection from './components/work/CategoriesSection';
import ExhibitionSection from './components/work/ExhibitionSection';
import styled from 'styled-components';
import { useGetWorkList } from '../../hooks/queries/useGetWorkList';
import { useState } from 'react';
import { Category } from '../../types/types';
import { useIsMobile } from '../../hooks/useIsMobile';
import MobileHeader from './components/mobile/MobileHeader';

const Work = () => {
  const [category, setCategory] = useState<Category>('ALL');
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetWorkList({
    category,
    currentPage: 1,
  });
  const isMobile = useIsMobile();

  return (
    <WorkPage>
      <Helmet>
        <title>Digging Club - Work</title>
      </Helmet>
      {isMobile ? (
        <MobileDiv>
          <MobileHeader category={category} setCategory={setCategory} />
          <ExhibitionSection
            data={data}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isMobile={isMobile}
          />
        </MobileDiv>
      ) : (
        <PcDiv>
          <CategoriesSection category={category} setCategory={setCategory} />
          <ExhibitionSection
            data={data}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isMobile={isMobile}
          />
        </PcDiv>
      )}
    </WorkPage>
  );
};

export default Work;

const WorkPage = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const PcDiv = styled.div`
  padding: 6rem 0 10.4rem 0;
`;

const MobileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
