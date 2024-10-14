import styled, { keyframes } from 'styled-components';
import { useIsMobile } from '../../../../../hooks/useIsMobile';

interface MarqueeProps {
  marqueeText: string;
}

export default function Marquee({ marqueeText }: MarqueeProps) {
  const isMobile = useIsMobile();
  return (
    <>
      <Content isMobile={isMobile}>
        <MarqueeContainer isMobile={isMobile}>
          <MarqueeBlur>
            <MarqueeText isMobile={isMobile}>{marqueeText}</MarqueeText>
          </MarqueeBlur>
          <MarqueeClear>
            <MarqueeText isMobile={isMobile}>{marqueeText}</MarqueeText>
          </MarqueeClear>
        </MarqueeContainer>
      </Content>
    </>
  );
}

const Content = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '343px' : '1060px')};
  height: ${(props) => (props.isMobile ? '100px' : '320px')};
`;

const marqueeAnimation = keyframes`
  from { translate: 70%; }
  to { translate: -70%; }
`;

const MarqueeContainer = styled.div<{ isMobile: boolean }>`
  position: relative;
  height: ${(props) => (props.isMobile ? '100px' : '320px')};
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const MarqueeText = styled.p<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '50px' : '200px')};
  font-weight: 800;
  position: absolute;
  min-width: 100%;
  white-space: nowrap;
  animation: ${marqueeAnimation} 16s infinite linear;
`;

const MarqueeBlur = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background-color: black;
  background-image: linear-gradient(to right, rgba(0, 180, 219, 1), 1rem, transparent 50%),
    linear-gradient(to left, rgba(0, 180, 219, 1), 1rem, transparent 50%);
  filter: contrast(15);

  p {
    filter: blur(0.06em);
  }
`;

const MarqueeClear = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
`;
