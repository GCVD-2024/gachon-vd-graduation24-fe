import styled, { keyframes } from 'styled-components';

interface MarqueeProps {
  marqueeText: string;
}

export default function Marquee({ marqueeText }: MarqueeProps) {
  return (
    <>
      <Content>
        <MarqueeContainer>
          <MarqueeBlur>
            <MarqueeText>{marqueeText}</MarqueeText>
          </MarqueeBlur>
          <MarqueeClear>
            <MarqueeText>{marqueeText}</MarqueeText>
          </MarqueeClear>
        </MarqueeContainer>
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 1360px;
  height: 396px;
`;

const marqueeAnimation = keyframes`
  from { translate: 70%; }
  to { translate: -70%; }
`;

const MarqueeContainer = styled.div`
  position: relative;
  height: 396px;
  font-size: 5em;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const MarqueeText = styled.p`
  font-size: 200px;
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
  background-image: linear-gradient(to right, rgba(228, 66, 39, 1), 1rem, transparent 50%),
    linear-gradient(to left, rgba(228, 66, 39, 1), 1rem, transparent 50%);
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
