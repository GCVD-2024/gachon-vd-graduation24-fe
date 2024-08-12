import styled from 'styled-components';

interface ScrollIndicatorProps {
  scrollPercentage: number;
}

export default function ScrollIndicator({ scrollPercentage }: ScrollIndicatorProps) {
  return (
    <RulerContainer>
      <Mask position="top">{scrollPercentage}%</Mask>
      <Lines>
        {[...Array(25)].map((_, i) => (
          <Line key={i} style={{ top: `${4 * (i + 1)}%` }} />
        ))}
      </Lines>
      <Mask position="bottom">-{100 - scrollPercentage}%</Mask>
    </RulerContainer>
  );
}

const RulerContainer = styled.div`
  z-index: 1000;
  width: 58px;
  height: 100%;
  position: absolute;
  left: 39px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Lines = styled.div`
  width: 1px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

const Line = styled.span`
  width: 16px;
  background-color: white;
  height: 1px;
  position: absolute;
`;

const Mask = styled.div<{ position: 'top' | 'bottom' }>`
  position: fixed;
  height: 10%;
  width: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: white;
  ${(props) =>
    props.position === 'top'
      ? 'top: 0; border-bottom: 1px solid white;'
      : 'bottom: 0; border-top: 1px solid white;'}
`;
