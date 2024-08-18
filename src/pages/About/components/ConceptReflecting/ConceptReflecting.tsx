import Marquee from './components/Marquee';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function ConceptReflecting() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titles = gsap.utils.toArray<HTMLElement>('.reflecting_title');
    const contents = gsap.utils.toArray<HTMLElement>('.reflecting_content');

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
    <ReflectingWrapper ref={containerRef}>
      <Marquee marqueeText="Reflecting. 반추하다" />

      <Description className="reflecting_title">
        Reflecting은 특정한 경험이나 지식에 대해 깊이 생각하고 그 의미를 되새기는 과정을 의미한다.
        <br />
        Digging을 통해 얻게 된 정보나 경험을 Reflecting함으로써, 그것이 우리의 삶에 어떤 의미를
        가지는지,
        <br />
        어떤 교훈을 줄 수 있는지 고민하게 된다. 이러한 반추의 과정에서 우리는 더 깊이 있는 통찰과
        이해를 얻는다.
        <br />
      </Description>
    </ReflectingWrapper>
  );
}

export default ConceptReflecting;

const ReflectingWrapper = styled.div`
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 140px 0 140px;
`;

const Description = styled.p`
  margin-top: 46px;
  font-size: 24px;
  font-weight: 500;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.64px;
`;
