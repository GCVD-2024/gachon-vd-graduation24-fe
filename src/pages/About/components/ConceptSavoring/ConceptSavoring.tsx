import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function ConceptSavoring() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titles = gsap.utils.toArray<HTMLElement>('.savoring_title');
    const contents = gsap.utils.toArray<HTMLElement>('.savoring_content');

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
  }, []);

  return (
    <PageWrapper ref={containerRef}>
      <Title className="savoring_title">Savoring.</Title>
      <Subtitle className="savoring_title">향유하다</Subtitle>
      <DescriptionContainer>
        <Description className="savoring_content">
          Savoring은 어떤 경험이나 감정을 깊이 있게 즐기고 음미하는 것을 의미한다.
          <br />
          Digging이 무언가를 탐구하고 발견하는 과정이라면,
          <br />
          Savoring은 그 과정에서 얻은 결과를 천천히 그리고 깊이 있게 즐기는 것이다.
        </Description>
        <Description className="savoring_content">
          우리는 Digging을 통해 발견한 것들을 Savoring함으로써
          <br />
          그것이 우리에게 주는 진정한 의미와 가치를 마음껏 누릴 수 있다.
        </Description>
      </DescriptionContainer>
    </PageWrapper>
  );
}

export default ConceptSavoring;

const PageWrapper = styled.div`
  height: 3000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url('/about/ConceptSavoring/concept-savoring-bg.svg');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const TitleText = styled.h1`
  font-size: 76px;
  font-weight: 800;
  line-height: 120%;
  letter-spacing: -1.52px;
  text-align: center;
`;

const Title = styled(TitleText)`
  margin-bottom: 20px;
`;

const Subtitle = styled(TitleText)`
  margin-bottom: 150px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.64px;
`;
