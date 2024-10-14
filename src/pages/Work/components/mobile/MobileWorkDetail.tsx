import styled from 'styled-components';
import WorkInfoSection from '../WorkInfoSection';
import YouTube from 'react-youtube';
import { useGetWorkDetail } from '../../../../hooks/queries/useGetWorkDetail';
import { useParams } from 'react-router-dom';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import MobileWorkInfoSection from './MobileWorkInfoSection';
import MobileWorkDetailContact from './MobileWorkDetailContact';

const MobileWorkDetail = () => {
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
    return <MobileWorkDetailPage />;
  }
  console.log('DATA', result);
  // console.log('유튜브 링크', result.videoUrl);
  return (
    <MobileWorkDetailPage>
      <MobileWorkInfoSection data={result} />
      <WorkDetailContent>
        <YouTube
          videoId={result.videoUrl}
          opts={{
            width: '343',
            height: '193',
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
        <WorkImg src={result.detailArtUrl || ''} alt={title || '작품-이미지'} />
      </WorkDetailContent>
      <MobileWorkDetailContact
        name={result.studentName}
        studentId={result.studentId}
        contact={result.contact}
      />
    </MobileWorkDetailPage>
  );
};

export default MobileWorkDetail;

const MobileWorkDetailPage = styled.div`
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  column-gap: 40px;
`;

const WorkDetailContent = styled.div`
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkImg = styled.img`
  width: 34.3rem;
  min-height: 60rem;

  object-fit: cover;
  background-color: gray;
`;
