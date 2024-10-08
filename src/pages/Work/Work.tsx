import { Helmet } from 'react-helmet-async';
import CategoriesSection from './components/CategoriesSection';
import ExhibitionSection from './components/ExhibitionSection';
import styled from 'styled-components';
import { useGetWorkList } from '../../hooks/queries/useGetWorkList';
import { useState } from 'react';
import { Category } from '../../types/types';
import { useIsMobile } from '../../hooks/useIsMobile';
import MobileCategoriesSection from './components/MobileCategoriesSection';

function Work() {
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
          <MobileCategoriesSection category={category} setCategory={setCategory} />
          <ExhibitionSection
            data={data}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isMobile={isMobile}
          />
        </MobileDiv>
      ) : (
        <NotMobileDiv>
          <CategoriesSection category={category} setCategory={setCategory} />
          <ExhibitionSection
            data={data}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            isMobile={isMobile}
          />
        </NotMobileDiv>
      )}
    </WorkPage>
  );
}

export default Work;

const WorkPage = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 80px 0 104px 0;
`;

const NotMobileDiv = styled.div``;

const MobileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
