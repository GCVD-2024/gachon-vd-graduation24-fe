import BlackholeCircle from './components/BlackholeCircle';
import { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

export default function ConceptImmersing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <ImmersingWrapper ref={containerRef} isMobile={isMobile}>
      <BlackholeCircle />

      <Description className="immersing_title" isMobile={isMobile}>
        Immersing은 어떤 활동이나 주제에 완전히 빠져들어
        {isMobile ? <br /> : ' '}
        집중하는 것을 의미한다.
        <div style={{ height: '16px' }} />
        Digging이 어떤 것을 알아가고 발견하는 과정이라면,
        <br />
        Immersing은 그 과정에서 얻은 것을 잊고
        {isMobile ? <br /> : ' '}
        완전히 경험하며 새로운 시각과 경험을 얻는 것이다.
        <div style={{ height: '16px' }} />
        우리는 몰입을 통해 더 창의적이고 깊이 있는 결과를 얻어낼 수 있다.
      </Description>
    </ImmersingWrapper>
  );
}

const ImmersingWrapper = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? 'auto' : '3000px')};
  min-height: ${(props) => (props.isMobile ? '100vh' : 'auto')};
  display: flex;
  background-color: #121212;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${(props) => (props.isMobile ? '20px' : '30px')};
  padding: ${(props) => (props.isMobile ? '40px 20px' : '0')};
`;

const Description = styled.p<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '12px' : '16px')};
  font-weight: 500;
  line-height: 200%;
  max-width: ${(props) => (props.isMobile ? '100%' : '80%')};
`;
