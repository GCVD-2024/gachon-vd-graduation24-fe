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
  padding-top: 60px;
  padding-bottom: 104px;

  display: flex;
  justify-content: center;

  column-gap: 40px;
`;

const WorkDetailContent = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
`;

const WorkImg = styled.img`
  width: 950px;
  min-height: 838px;

  object-fit: cover;
  background-color: gray;
`;
