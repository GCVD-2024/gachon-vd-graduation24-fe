import BlackholeCircle from './components/BlackholeCircle';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function ConceptImmersing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titles = gsap.utils.toArray<HTMLElement>('.immersing_title');
    const contents = gsap.utils.toArray<HTMLElement>('.immersing_content');

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
    <ImmersingWrapper ref={containerRef}>
      <BlackholeCircle />

      <DescriptionContainer>
        <Description className="immersing_title">
          Immersing은 어떤 활동이나 주제에 완전히 빠져들어 집중하는 것을 의미한다.
          <br />
          Digging이 어떤 것을 알아가고 발견하는 과정이라면,
          <br />
          Immersing은 그 과정에서 얻은 것을 깊고 완전히 경험하며 새로운 시각과 경험을 얻는 것이다.
        </Description>
        <Description className="immersing_title">
          우리는 몰입을 통해 더 창의적이고 깊이 있는 결과를 얻어낼 수 있다.
        </Description>
      </DescriptionContainer>
    </ImmersingWrapper>
  );
}

export default ConceptImmersing;

const ImmersingWrapper = styled.div`
  height: 3000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.64px;
`;
