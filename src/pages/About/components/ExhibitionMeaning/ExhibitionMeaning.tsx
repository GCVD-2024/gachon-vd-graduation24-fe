import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function ExhibitionMeaning() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titles = gsap.utils.toArray<HTMLElement>('.about_title');
    const contents = gsap.utils.toArray<HTMLElement>('.about_content');

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
      <TitleContainer>
        <Title className="about_title">우리가 지나온 길, 그리고 앞으로 나아갈 길</Title>
        <Paragraph className="about_content">
          이번 전시에서는 <Highlight>Digging</Highlight>의 사전적 의미 뿐만 아니라,
          <br />
          더 확장 된 범주에서 단어를 사용함으로써 디자인 아이덴티티를 드러내고 있다.
          <br />
          우리가 지나온 길을 상징하여여 구성하고 앞으로 나아갈 길을 상상해 볼 수 있다.
          <br />
          내가 지나온 길과 네가 지나 온 길을 공유하며 각자 새로운 길을 개척해 나아갈 미래를
          응원한다.
        </Paragraph>
      </TitleContainer>
    </IntroductionWrapper>
  );
}

export default ExhibitionMeaning;

const IntroductionWrapper = styled.div`
  height: 1080px;
  padding: 0px 140px 0px 140px;
`;

const TitleContainer = styled.div`
  text-align: end;
`;

const Title = styled.h1`
  margin-bottom: 100px;
  font-size: 40px;
  font-weight: 900;
  line-height: 140%;
  letter-spacing: -0.8px;
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
