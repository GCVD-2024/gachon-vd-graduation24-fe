import styled from 'styled-components';
import WorkInfoSection from './components/WorkInfoSection';
import YouTube from 'react-youtube';
import { useGetWorkDetail } from '../../hooks/queries/useGetWorkDetail';
import { useParams } from 'react-router-dom';

const WorkDetail = () => {
  const params = useParams();
  const name = params.name;
  const title = params.title;

  if (!name || !title) {
    throw new Error('[에러 발생]작품명이나 작가 이름값이 존재하는지 확인하세요.');
  }

  const { data } = useGetWorkDetail({ name, title });
  const result = data?.result;
  if (!result) {
    return <WorkDetailPage />;
  }

  return (
    <WorkDetailPage>
      <YouTube
        // videoId={key}
        opts={{
          width: '1220',
          height: '686',
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
          },
        }}
      />
      <WorkInfoSection data={result} />
      <WorkImg src={result.detailArtUrl || ''} alt={title || '작품-이미지'} />
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
  width: 950px;
  min-height: 838px;

  object-fit: cover;
  background-color: gray;
`;
