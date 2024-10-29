import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';
import WordCanvas from './components/WordCanvas';
import { useIsMobile } from '../../../../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

export default function ConceptExperiencing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWordCanvasVisible, setIsWordCanvasVisible] = useState(false);
  const isMobile = useIsMobile();

  useGSAP(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 50%',
      end: 'bottom 50%',
      onEnter: () => setIsWordCanvasVisible(true),
      onLeave: () => setIsWordCanvasVisible(false),
      onEnterBack: () => setIsWordCanvasVisible(true),
      onLeaveBack: () => setIsWordCanvasVisible(false),
    });
  }, []);

  return (
    <ExperiencingWrapper ref={containerRef} isMobile={isMobile}>
      <MatterJsContainer isMobile={isMobile}>
        {isWordCanvasVisible && <WordCanvas />}
      </MatterJsContainer>
      <ContentWrapper isMobile={isMobile}>
        <Title className="experiencing_title" isMobile={isMobile}>
          Experiencing.
          <br />
          경험하다
        </Title>
        <Description className="experiencing_content" isMobile={isMobile}>
          Experiencing은 특정한 상황이나 사건, 감정 등을 실제로 겪고 느끼는 과정을 의미한다.
          <br />
          Digging이 지식이나 정보를 얻는 과정이라면,
          <br />
          Experiencing은 그 지식이나 정보를 실제로 체험하는 단계이다.
          <br />
          우리는 Digging을 통해 얻은 새로운 것들을 Experiencing하면서 더 깊이 이해하고,
          <br />
          그것이 우리 삶에 어떤 영향을 미치는지 직접 느껴본다.
        </Description>
      </ContentWrapper>
    </ExperiencingWrapper>
  );
}

const ExperiencingWrapper = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? 'auto' : '1080px')};
  min-height: ${(props) => (props.isMobile ? '100vh' : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isMobile ? '40px 20px' : '0px 140px')};
`;

const MatterJsContainer = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '343px' : '1060px')};
  height: ${(props) => (props.isMobile ? '326px' : '725px')};
  background-image: url('/about/ConceptExperiencing/concept-experiencing-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: ${(props) => (props.isMobile ? '40px' : '100px')};
`;

const ContentWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
  gap: ${(props) => (props.isMobile ? '30px' : '250px')};
  align-items: flex-start;
`;

const Title = styled.h1<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '32px' : '40px')};
  font-weight: 800;
  text-align: left;
  line-height: 140%;
`;

const Description = styled.p<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '12px' : '16px')};
  font-weight: 500;
  line-height: 200%;
  text-align: left;
`;
