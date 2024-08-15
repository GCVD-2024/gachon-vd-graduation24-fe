import { styled } from 'styled-components';
import WorkCardItem from './WorkCardItem';
import { MOCK_DATA } from '../../../constants/constants';

const ExhibitionSection = () => {
  return (
    <ExhibitionWrapper>
      {MOCK_DATA.map((data) => (
        <WorkCardItem name={data.학생이름} title={data.작품이름} img={data.이미지} />
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
