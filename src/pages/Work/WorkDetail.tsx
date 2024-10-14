import styled from 'styled-components';
import WorkInfoSection from './components/workDetail/WorkInfoSection';
import YouTube from 'react-youtube';
import { useGetWorkDetail } from '../../hooks/queries/useGetWorkDetail';
import { useParams } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import MobileWorkDetail from './components/mobile/MobileWorkDetail';

const WorkDetail = () => {
  const params = useParams();
  const name = params.name;
  const title = params.title;

  const isMobile = useIsMobile();

  if (!name || !title) {
    throw new Error('[에러 발생]작품명이나 작가 이름값이 존재하는지 확인하세요.');
  }

  const { data } = useGetWorkDetail({ name, title });
  const result = data?.result;
  if (!result) {
    return <WorkDetailPage />;
  }
  return isMobile ? (
    <MobileWorkDetail />
  ) : (
    <WorkDetailPage>
      <WorkInfoSection data={result} />
      <WorkDetailContent>
        {result.videoUrl ? (
          <YouTube
            videoId={result.videoUrl.split('/').pop()}
            opts={{
              width: '950',
              height: '534',
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
          />
        ) : (
          <></>
        )}
        <WorkImg src={result.detailArtUrl || ''} alt={title || '작품-이미지'} />
      </WorkDetailContent>
    </WorkDetailPage>
  );
};

export default WorkDetail;

const WorkDetailPage = styled.div`
  margin-top: 6rem;
  margin-bottom: 10.4rem;

  display: flex;
  justify-content: center;

  column-gap: 4rem;
`;

const WorkDetailContent = styled.div`
  margin-top: 3.3rem;
  display: flex;
  flex-direction: column;
`;

const WorkImg = styled.img`
  width: 95rem;
  min-height: 83.8rem;

  object-fit: cover;
  background-color: gray;
`;
