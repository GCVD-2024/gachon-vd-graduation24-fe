import { useNavigate } from 'react-router-dom';
import IcLeft from '../../../../assets/icons/left.svg';
import { styled } from 'styled-components';

const WorkDetailHeader = () => {
  const navigate = useNavigate();
  const handleIcon = () => {
    navigate(-1);
  };

  return (
    <WorkDetailHeaderWrapper>
      <Icon src={IcLeft} alt="back" onClick={handleIcon} />
    </WorkDetailHeaderWrapper>
  );
};

export default WorkDetailHeader;

const WorkDetailHeaderWrapper = styled.div`
  min-width: 37.5rem;

  display: flex;
  justify-content: left;
  padding: 1rem 1.6rem;
`;

const Icon = styled.img`
  cursor: pointer;
`;
