import { Helmet } from 'react-helmet-async';
import CategoriesSection from './components/CategoriesSection';
import ExhibitionSection from './components/ExhibitionSection';
import styled from 'styled-components';
import { useGetWorkList } from '../../hooks/queries/useGetWorkList';
import { useState } from 'react';
import { Category } from '../../types/types';

function Work() {
  const [category, setCategory] = useState<Category>('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetWorkList({ category, currentPage });

  return (
    <WorkPage>
      <Helmet>
        <title>Digging Club - Work</title>
      </Helmet>
      <CategoriesSection category={category} setCategory={setCategory} />
      <ExhibitionSection data={data} />
    </WorkPage>
  );
}

export default Work;

const WorkPage = styled.div`
  width: 100%;

  display: flex;
  column-gap: 248px;
  justify-content: center;

  padding: 80px 0 104px 0;
`;
