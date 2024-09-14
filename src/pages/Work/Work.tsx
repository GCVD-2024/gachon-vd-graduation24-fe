import { Helmet } from 'react-helmet-async';
import CategoriesSection from './components/CategoriesSection';
import ExhibitionSection from './components/ExhibitionSection';
import styled from 'styled-components';
import { useGetWorkList } from '../../hooks/queries/useGetWorkList';
import { useState } from 'react';
import { Category } from '../../types/types';

function Work() {
  const [category, setCategory] = useState<Category>('ALL');
  const { data, hasNextPage, fetchNextPage } = useGetWorkList({ category, currentPage: 1 });

  return (
    <WorkPage>
      <Helmet>
        <title>Digging Club - Work</title>
      </Helmet>
      <div>
        <CategoriesSection category={category} setCategory={setCategory} />
        <ExhibitionSection data={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
      </div>
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
