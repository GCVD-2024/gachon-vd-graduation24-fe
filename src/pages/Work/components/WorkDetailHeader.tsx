import { useNavigate } from 'react-router-dom';
import IcLeft from '../../../assets/icons/left.png';
import { styled } from 'styled-components';

const WorkDetailHeader = () => {
  const navigate = useNavigate();
  const handleIcon = () => {
    navigate(-1);
  };

  return (
    <WorkDetailHeaderWrapper>
      <IcLeft />
    </WorkDetailHeaderWrapper>
  );
};

export default WorkDetailHeader;

const WorkDetailHeaderWrapper = styled.div`
  display: flex;
  justify-content: left;
  padding: 1rem 1.6rem;
`;
