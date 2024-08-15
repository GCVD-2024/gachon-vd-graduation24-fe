import styled from 'styled-components';
import WorkInfoSection from './components/WorkInfoSection';

const WorkDetail = () => {
  return (
    <WorkDetailPage>
      <WorkInfoSection />
      <WorkImg imgUrl="" />
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

const WorkImg = styled.img<{ imgUrl: string }>`
  width: 1220px;
  min-height: 823px;

  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;

  background-color: gray;
`;
