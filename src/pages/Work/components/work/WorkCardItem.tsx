import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import '../../../../styles/animations.css';
import { usePrefetchWorkDetail } from '../../../../hooks/queries/usePrefetchWorkDetail';
import { useIsMobile } from '../../../../hooks/useIsMobile';

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
  const isMobile = useIsMobile();

  const handleClick = () => {
    prefetchWorkDetail(name, title);
    navigate(`/work/${name}/${title}`);
  };

  return (
    <WorkCardItemWrapper
      onClick={handleClick}
      imgUrl={imgUrl}
      ref={isLastItem ? setTarget : null}
      isMobile={isMobile}
    />
  );
};

export default WorkCardItem;

const WorkCardItemWrapper = styled.div<{ imgUrl?: string; isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '34.3rem' : '46.6rem')};
  height: ${({ isMobile }) => (isMobile ? '19rem' : '26.2rem')};
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: end;

  border: ${({ isMobile }) => (isMobile ? '1px' : '2px')} solid white;

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
