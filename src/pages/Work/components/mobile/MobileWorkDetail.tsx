import styled from 'styled-components';
import YouTube from 'react-youtube';
import { useGetWorkDetail } from '../../../../hooks/queries/useGetWorkDetail';
import { useParams } from 'react-router-dom';
import MobileWorkInfoSection from './MobileWorkInfoSection';
import MobileWorkDetailContact from './MobileWorkDetailContact';
import WorkDetailHeaderLayout from '../../../../components/Layout/WorkDetailHeaderLayout';

const MobileWorkDetail = () => {
  const params = useParams();
  const name = params.name;
  const title = params.title;

  if (!name || !title) {
    throw new Error('[에러 발생]작품명이나 작가 이름값이 존재하는지 확인하세요.');
  }

  const { data } = useGetWorkDetail({ name, title });
  const result = data?.result;
  if (!result) {
    return <MobileWorkDetailPage />;
  }
  return (
    <>
      <WorkDetailHeaderLayout>
        <MobileWorkDetailPage>
          <MobileWorkInfoSection data={result} />
          <WorkDetailContent>
            {result.videoUrl ? (
              <YouTube
                videoId={result.videoUrl.split('/').pop()}
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
            ) : (
              <></>
            )}
            <WorkImg src={result.detailArtUrl || ''} alt={title || '작품-이미지'} />
          </WorkDetailContent>
          <MobileWorkDetailContact
            name={result.studentName}
            studentId={result.studentId}
            contact={result.contact}
          />
        </MobileWorkDetailPage>
      </WorkDetailHeaderLayout>
    </>
  );
};

export default MobileWorkDetail;

const MobileWorkDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  column-gap: 4rem;
`;

const WorkDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkImg = styled.img`
  width: 34.3rem;
  min-height: 60rem;
  margin-bottom: 4rem;

  object-fit: cover;
  background-color: gray;
`;
