import Marquee from './components/Marquee';
import { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

function ConceptReflecting() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <ReflectingWrapper ref={containerRef} isMobile={isMobile}>
      <ReflectingContainer isMobile={isMobile}>
        <Marquee marqueeText="Reflecting. 반추하다" />

        <Description className="reflecting_title" isMobile={isMobile}>
          Reflecting은 특정한 경험이나 지식에 대해 깊이 생각하고
          {isMobile ? <br /> : ' '}그 의미를 되새기는 과정을 의미한다.
          {isMobile ? <div style={{ height: '16px' }} /> : <br />}
          Digging을 통해 얻게 된 정보나 경험을 Reflecting함으로써,
          {isMobile ? <br /> : ' '}
          그것이 우리의 삶에 어떤 의미를 가지는지,
          <br />
          어떤 교훈을 줄 수 있는지 고민하게 된다.
          {isMobile ? <div style={{ height: '16px' }} /> : ''}
          이러한 반추의 과정에서 우리는
          {isMobile ? <br /> : ' '}
          더 깊이 있는 통찰과 이해를 얻는다.
          <br />
        </Description>
      </ReflectingContainer>
    </ReflectingWrapper>
  );
}

export default ConceptReflecting;

const ReflectingWrapper = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? 'auto' : '1080px')};
  min-height: ${(props) => (props.isMobile ? '100vh' : 'auto')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.isMobile ? '40px 20px' : '0')};
`;

const ReflectingContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isMobile ? '40px' : '100px')};
`;

const Description = styled.p<{ isMobile: boolean }>`
  margin-top: ${(props) => (props.isMobile ? '30px' : '46px')};
  font-size: ${(props) => (props.isMobile ? '12px' : '16px')};
  font-weight: 500;
  line-height: 200%;
  text-align: left;
`;
