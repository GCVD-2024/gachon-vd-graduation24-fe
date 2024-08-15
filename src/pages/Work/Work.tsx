import { Helmet } from 'react-helmet-async';
import CategoriesSection from './components/CategoriesSection';
import ExhibitionSection from './components/ExhibitionSection';
import styled from 'styled-components';

function Work() {
  return (
    <>
      <WorkPage>
        <Helmet>
          <title>Digging Club - Work</title>
        </Helmet>
        <CategoriesSection />
        <ExhibitionSection />
      </WorkPage>
    </>
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
