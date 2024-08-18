import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';
import WordCanvas from './components/WordCanvas';

gsap.registerPlugin(ScrollTrigger);

function ConceptExperiencing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isWordCanvasVisible, setIsWordCanvasVisible] = useState(false);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titles = gsap.utils.toArray<HTMLElement>('.experiencing_title');
    const contents = gsap.utils.toArray<HTMLElement>('.experiencing_content');

    const animateElements = (
      elements: HTMLElement[],
      fromVars: gsap.TweenVars,
      toVars: gsap.TweenVars
    ) => {
      elements.forEach((element, index) => {
        gsap.fromTo(element, fromVars, {
          ...toVars,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 5%',
            end: 'bottom 20%',
          },
          delay: index * 0.2,
        });
      });
    };

    animateElements(titles, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    animateElements(contents, { opacity: 0 }, { opacity: 1, duration: 1 });

    // WordCanvas visibility trigger
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
    <ExperiencingWrapper ref={containerRef}>
      <MatterJsContainer>{isWordCanvasVisible && <WordCanvas />}</MatterJsContainer>
      <ContentWrapper>
        <Title className="experiencing_title">
          Experiencing.
          <br />
          경험하다
        </Title>
        <Description className="experiencing_content">
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

export default ConceptExperiencing;

// Styled components remain unchanged
const ExperiencingWrapper = styled.div`
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 140px 0px 140px;
`;

const MatterJsContainer = styled.div`
  width: 1360px;
  height: 800px;
  background-image: url('/about/ConceptExperiencing/concept-experiencing-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 100px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 115px;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 800;
  line-height: 120%; /* 84px */
  letter-spacing: -1.4px;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.64px;
`;
