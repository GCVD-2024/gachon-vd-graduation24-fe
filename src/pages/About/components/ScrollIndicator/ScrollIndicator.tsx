import styled from 'styled-components';

interface ScrollIndicatorProps {
  scrollPercentage: number;
}

export default function ScrollIndicator({ scrollPercentage }: ScrollIndicatorProps) {
  return (
    <RulerContainer>
      <Mask position="top">
        <PercentageText>{scrollPercentage}%</PercentageText>
      </Mask>
      <Lines>
        {[...Array(25)].map((_, i) => (
          <Line key={i} style={{ top: `${4 * (i + 1)}%` }} />
        ))}
      </Lines>
      <Mask position="bottom">
        <PercentageText>-{100 - scrollPercentage}%</PercentageText>
      </Mask>
    </RulerContainer>
  );
}

const RulerContainer = styled.div`
  z-index: 1000;
  width: 100px;
  height: 100%;
  position: absolute;
  left: 39px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  color: white;
  ${(props) => (props.position === 'top' ? 'top: 0; ' : 'bottom: 0; ')}
`;

const PercentageText = styled.span`
  margin-left: 20px;
`;
