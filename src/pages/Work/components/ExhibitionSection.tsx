import { styled } from 'styled-components';
import WorkCardItem from './WorkCardItem';
// import { MOCK_DATA } from '../../../constants/constants';
import { WorkListResponseType } from '../../../types/types';

interface ExhibitionSectionProps {
  data: WorkListResponseType | undefined;
}

const ExhibitionSection = ({ data }: ExhibitionSectionProps) => {
  if (!data) {
    throw new Error('[에러] 작품리스트 데이터가 없습니다.');
  }
  return (
    <ExhibitionWrapper>
      {data.result.works.map((work) => (
        <WorkCardItem name={work.studentName} title={work.title} imgUrl={work.thumbnailUrl} />
      ))}
    </ExhibitionWrapper>
  );
};

export default ExhibitionSection;

const ExhibitionWrapper = styled.section`
  width: 1220px;

  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
