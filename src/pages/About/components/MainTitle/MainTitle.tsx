import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import {
  EXHIBITION_DEPARTMENT,
  EXHIBITION_SUBTITLE,
  EXHIBITION_TITLE,
} from '../../../../constants/constants';

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
    <MainTitleWrapper>
      <BackgroundImage
        src="/about/MainTitle/main-title-bg.svg"
        alt="Main background"
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
      <FloatingCircles ref={circlesRef}>
        {[...Array(20)].map((_, index) => (
          <Circle key={index} size={Math.random() * 20 + 5} />
        ))}
      </FloatingCircles>
    </MainTitleWrapper>
  );
}

const MainTitleWrapper = styled.div`
  position: relative;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  object-fit: cover;
  object-position: center;
  z-index: 0;
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

const Circle = styled.div<{size: number}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: white;
  top: ${() => Math.random() * 100}vh;
  left: ${() => Math.random() * 100}vw;
`;
