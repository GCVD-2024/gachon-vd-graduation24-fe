import { styled } from 'styled-components';
import WorkCardItem from './WorkCardItem';
// import { MOCK_DATA } from '../../../constants/constants';
import { WorkListResponseType } from '../../../types/types';

interface ExhibitionSectionProps {
  data: WorkListResponseType | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ExhibitionSection = ({ data, currentPage, setCurrentPage }: ExhibitionSectionProps) => {
  if (!data) {
    throw new Error('[에러] 작품리스트 데이터가 없습니다.');
  }
  setCurrentPage(data.result.currentPage);

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
