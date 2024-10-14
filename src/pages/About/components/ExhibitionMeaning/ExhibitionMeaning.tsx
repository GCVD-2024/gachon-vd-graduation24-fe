import { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

export default function ExhibitionMeaning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <IntroductionWrapper ref={containerRef} isMobile={isMobile}>
      <TitleContainer isMobile={isMobile}>
        <Title className="about_title" isMobile={isMobile}>
          우리가 지나온 길,{isMobile ? <br /> : ' '}그리고 앞으로 나아갈 길
        </Title>
        <Paragraph className="about_content" isMobile={isMobile}>
          이번 전시에서는 <Highlight isMobile={isMobile}>Digging</Highlight>의 사전적 의미 뿐만
          아니라,
          <br />더 확장 된 범주에서 단어를 사용함으로써
          {isMobile ? <br /> : ' '}
          디자인 아이덴티티를 드러내고 있다.
          <br />
          우리가 지나온 길을 상징하여여 구성하고
          {isMobile ? <br /> : ' '}
          앞으로 나아갈 길을 상상해 볼 수 있다.
          <br />
          내가 지나온 길과 네가 지나 온 길을 공유하며
          {isMobile ? <br /> : ' '}
          각자 새로운 길을 개척해 나아갈 미래를 응원한다.
        </Paragraph>
      </TitleContainer>
    </IntroductionWrapper>
  );
}

const IntroductionWrapper = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? 'auto' : '1080px')};
  padding: ${(props) => (props.isMobile ? '40px 20px' : '0px 140px')};
`;

const TitleContainer = styled.div<{ isMobile: boolean }>`
  text-align: end;
`;

const Title = styled.h1<{ isMobile: boolean }>`
  margin-bottom: ${(props) => (props.isMobile ? '50px' : '100px')};
  font-size: ${(props) => (props.isMobile ? '28px' : '40px')};
  font-weight: 900;
  line-height: 140%;
  letter-spacing: ${(props) => (props.isMobile ? '-0.56px' : '-0.8px')};
`;

const Paragraph = styled.p<{ isMobile: boolean }>`
  margin-bottom: ${(props) => (props.isMobile ? '40px' : '60px')};
  font-size: ${(props) => (props.isMobile ? '12px' : '16px')};
  font-weight: 500;
  line-height: 1.5;
`;

const Highlight = styled.span<{ isMobile: boolean }>`
  color: #00b4db;
  font-weight: 700;
  font-size: ${(props) => (props.isMobile ? '12px' : '16px')};
`;
