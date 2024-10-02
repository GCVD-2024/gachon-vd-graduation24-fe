import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import '../../../styles/animations.css';
import { usePrefetchWorkDetail } from '../../../hooks/queries/usePrefetchWorkDetail';

interface CardInfoProps {
  name: string;
  title: string;
  imgUrl: string;
  isLastItem: boolean;
  setTarget: React.Dispatch<React.SetStateAction<HTMLDivElement | null | undefined>>;
}

const WorkCardItem = ({ name, title, imgUrl, isLastItem, setTarget }: CardInfoProps) => {
  const navigate = useNavigate();
  const { prefetchWorkDetail } = usePrefetchWorkDetail();

  const handleClick = () => {
    prefetchWorkDetail(name, title);
    navigate(`/work/${name}/${title}`);
  };

  return (
    <WorkCardItemWrapper
      onClick={handleClick}
      imgUrl={imgUrl}
      ref={isLastItem ? setTarget : undefined}
    ></WorkCardItemWrapper>
  );
};

export default WorkCardItem;

const WorkCardItemWrapper = styled.div<{ imgUrl?: string }>`
  width: 466px;
  height: 262px;
  flex-shrink: 0;
  padding: 27.85px 27.91px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  row-gap: 11.14px;

  border: 2px solid white;

  background-color: gray;
  background-image: ${({ imgUrl }) => (imgUrl ? `url(${imgUrl})` : '')};
  background-size: cover;
  background-position: center;

  cursor: pointer;

  &:hover {
    -webkit-animation-name: hvr-buzz-out;
    animation-name: hvr-buzz-out;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`;

const ItemSpan = styled.span`
  font-size: 16px;
  line-height: 100%;
`;
