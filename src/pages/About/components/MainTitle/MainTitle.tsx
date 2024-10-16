import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import {
  EXHIBITION_DEPARTMENT,
  EXHIBITION_SUBTITLE,
  EXHIBITION_TITLE,
} from '../../../../constants/constants';

interface InfoItem {
  label: string;
  content: string;
}

const infoItems: InfoItem[] = [
  { label: '', content: '가천대학교 시각디자인학과 졸업전시 2025' },
  { label: '기간', content: '2024. 10. - 2024. 10.' },
  { label: '시간', content: '10:00 - 18:00' },
  { label: '장소', content: '가천대학교 비전타워 B1' },
];

export default function MainTitle() {
  const isMobile = useIsMobile();
  const globeRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (circlesRef.current) {
      const circles = circlesRef.current.children;
      gsap.to(circles, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <MainTitleWrapper isMobile={isMobile}>
      <BackgroundImage
        src="/about/MainTitle/main-title-bg.svg"
        alt="Main background"
        isMobile={isMobile}
      />
      <BackgroundStarsImage
        src="/about/MainTitle/main_stars.svg"
        alt="Stars background decoration"
        isMobile={isMobile}
      />
      <BackgroundTopImage
        src="/about/MainTitle/main-title-top-bg.svg"
        alt="Top background decoration"
        isMobile={isMobile}
      />
      <ContentWrapper>
        <OverlayContent>
          <GlobeWrapper ref={globeRef} style={{ display: 'absolute', zIndex: 10 }}>
            <img src="/about/MainTitle/moon_before.svg" alt="moon_before" className="moon-before" />
            <img src="/about/MainTitle/moon_after.svg" alt="moon_after" className="moon-after" />
            <img src="/about/MainTitle/main_title.svg" alt="globe" />
          </GlobeWrapper>
        </OverlayContent>
        <div style={{ position: 'absolute', left: '10%', bottom: '20%' }}>
          <SubtitleText>
            <p>{EXHIBITION_TITLE}</p>
            <p>{EXHIBITION_DEPARTMENT}</p>
            <p>{EXHIBITION_SUBTITLE}</p>
          </SubtitleText>
        </div>
      </ContentWrapper>
      {/* Exhibition Info */}
      <TitleContainer isMobile={isMobile}>
        <ExhibitionBackgroundImage
          src="/about/ExhibitionInfo/exhibition-info-bg.svg"
          isMobile={isMobile}
        />
        <Title className="info_title" isMobile={isMobile}>
          Digging Club
        </Title>
        <Subtitle className="info_title" isMobile={isMobile}>
          발견의 여정 : 숨겨진 가능성을 찾아서
        </Subtitle>

        {infoItems.map((item, index) => (
          <InfoSection className="info_content" key={index} isMobile={isMobile}>
            <Label isMobile={isMobile}>{item.label}</Label>
            {item.content}
          </InfoSection>
        ))}
      </TitleContainer>
      <FloatingCircles ref={circlesRef}>
        {[...Array(20)].map((_, index) => (
          <Circle key={index} size={Math.random() * 20 + 5} />
        ))}
      </FloatingCircles>
    </MainTitleWrapper>
  );
}

const MainTitleWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;
  height: ${(props) => (props.isMobile ? '1300px' : '2400px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => (props.isMobile ? '' : '300px')};
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OverlayContent = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img<{ isMobile: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  z-index: 0;
`;

const BackgroundStarsImage = styled.img<{ isMobile: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
  z-index: 1;
`;

const BackgroundTopImage = styled.img<{ isMobile: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isMobile ? '10%' : '20%')};
  object-fit: contain;
  object-position: center top;
  z-index: 1;
`;

const GlobeWrapper = styled.div`
  position: relative;
  width: 880px;
  height: 530px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 340px;
    height: 200px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease-in-out;
  }

  .moon-before {
    opacity: 1;
  }

  .moon-after {
    opacity: 0;
  }

  &:hover {
    .moon-before {
      opacity: 0;
    }
    .moon-after {
      opacity: 1;
    }
  }
`;

const SubtitleText = styled.p`
  font-size: 16px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  line-height: 140%;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 0 20px;
  }
`;

const FloatingCircles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
`;

const Circle = styled.div<{ size: number }>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: white;
  top: ${() => Math.random() * 100}vh;
  left: ${() => Math.random() * 100}vw;
`;

const TitleContainer = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '400px' : '1000px')};
  height: ${(props) => (props.isMobile ? '400px' : '1000px')};
  padding-bottom: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.isMobile ? '200px' : '500px')};
`;

const ExhibitionBackgroundImage = styled.img<{ isMobile: boolean }>`
  position: absolute;
  width: ${(props) => (props.isMobile ? '600px' : '1600px')};
  height: ${(props) => (props.isMobile ? '600px' : '1600px')};
  object-fit: contain;
  object-position: center top;
`;

const Title = styled.h1<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '24px' : '40px')};
  font-weight: 900;
  line-height: 140%;
  z-index: 1000;
`;

const Subtitle = styled.h2<{ isMobile: boolean }>`
  margin-bottom: ${(props) => (props.isMobile ? '50px' : '139px')};
  font-size: ${(props) => (props.isMobile ? '10px' : '20px')};
  font-weight: 500;
  line-height: 140%;
  z-index: 1000;
`;

const InfoSection = styled.div<{ isMobile: boolean }>`
  margin-bottom: 20px;
  font-size: ${(props) => (props.isMobile ? '10px' : '16px')};
  font-weight: 700;
  line-height: 140%;
  z-index: 1000;
`;

const Label = styled.span<{ isMobile: boolean }>`
  margin-right: 8px;
  font-size: ${(props) => (props.isMobile ? '10px' : '16px')};
  font-weight: 700;
  line-height: 140%;
  color: #00b4db;
  z-index: 1000;
`;
