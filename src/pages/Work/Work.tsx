import { Helmet } from 'react-helmet-async';
import CategoriesSection from './components/work/CategoriesSection';
import ExhibitionSection from './components/work/ExhibitionSection';
import styled from 'styled-components';
import { useGetWorkList } from '../../hooks/queries/useGetWorkList';
import { useState } from 'react';
import { WorkCategory } from '../../types/types';
import { useIsMobile } from '../../hooks/useIsMobile';
import MobileHeader from './components/mobile/MobileHeader';
import background from '../../assets/img/works_background.png';

const Work = () => {
  const [category, setCategory] = useState<WorkCategory>('ALL');
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetWorkList({
    category,
    currentPage: 1,
  });
  const isMobile = useIsMobile();

  return (
    <WorkPage>
      <img src={background} />
      <Helmet>
        <title>Digging Club : work</title>
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
  background-color: #000000;

  img {
    width: 100vw;
    position: fixed;

    z-index: 1;
  }
`;

const PcDiv = styled.div`
  display: flex;
  padding: 13rem 0;

  z-index: 2;
`;

const MobileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 2;
`;
