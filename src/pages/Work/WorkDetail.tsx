import styled from 'styled-components';
import WorkInfoSection from './components/WorkInfoSection';

const WorkDetail = () => {
  return (
    <WorkDetailPage>
      <WorkInfoSection />
      <WorkImg src="" alt="작품-이미지" />
    </WorkDetailPage>
  );
};

export default WorkDetail;

const WorkDetailPage = styled.div`
  padding-top: 80px;
  padding-bottom: 104px;

  display: flex;
  justify-content: center;

  column-gap: 40px;
`;

const WorkImg = styled.img`
  width: 1220px;
  min-height: 823px;

  object-fit: cover;
  background-color: gray;
`;
