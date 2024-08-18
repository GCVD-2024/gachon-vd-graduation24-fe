import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function ExhibitionIntroduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titles = gsap.utils.toArray<HTMLElement>('.introduction_title');
    const contents = gsap.utils.toArray<HTMLElement>('.introduction_content');

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
            start: 'top 90%',
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
    <IntroductionWrapper ref={containerRef}>
      <Title className="introduction_title">ABOUT</Title>
      <Paragraph className="introduction_content">
        <Highlight>Digging</Highlight>의 사전적 의미는 '파기, 채굴' 이다.
        <br />
        이 단어가 라이프스타일의 범주로 들어오면서
        <br />
        어떤 것에 꽤 집중하여 파고 드는 걸 의미하게 되었다.
      </Paragraph>
      <Paragraph className="introduction_content">
        우리는 가장 잘하고 좋아하는 것을 찾아 한 분야의 디깅러가 된다.
        <br />
        그리고 여기, 디깅 클럽에서 다른 디깅러를 만나게 된다.
      </Paragraph>
      <Paragraph className="introduction_content">
        우리가 각자의 분야로 나아가기 위해 <Highlight>Digging</Highlight> 해온 길,
        <br />그 길을 디깅 클럽에서 공유하려한다.
      </Paragraph>
    </IntroductionWrapper>
  );
}

export default ExhibitionIntroduction;

const IntroductionWrapper = styled.div`
  height: 1080px;
  padding: 0px 140px 0px 140px;
`;

const Title = styled.h1`
  margin-bottom: 100px;
  font-size: 70px;
  font-weight: 900;
  line-height: 120%; /* 84px */
  letter-spacing: -1.4px;
`;

const Paragraph = styled.p`
  margin-bottom: 60px;
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.64px;
`;

const Highlight = styled.span`
  color: #ff4500;
  font-weight: 700;
`;
