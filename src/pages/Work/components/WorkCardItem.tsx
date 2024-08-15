import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface CardInfoProps {
  name: string;
  title: string;
  img: string;
}

const WorkCardItem = ({ name, title, img }: CardInfoProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/detail');
  };

  return (
    <WorkCardItemWrapper onClick={handleClick} imgUrl={img}>
      <ItemSpan>{name}</ItemSpan>
      <ItemSpan>{title}</ItemSpan>
    </WorkCardItemWrapper>
  );
};

export default WorkCardItem;

const WorkCardItemWrapper = styled.div<{ imgUrl?: string }>`
  width: 600px;
  height: 337px;
  padding: 27.85px 27.91px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  row-gap: 11.14px;

  background-color: gray;
  background-image: ${({ imgUrl }) => imgUrl || ''};
  background-size: cover;
  background-position: center;

  cursor: pointer;
`;

const ItemSpan = styled.span`
  font-size: 16px;
  line-height: 100%;
`;
