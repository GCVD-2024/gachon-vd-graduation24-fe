import { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

export default function ExhibitionIntroduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <IntroductionWrapper ref={containerRef} isMobile={isMobile}>
      <Title className="introduction_title" isMobile={isMobile}>
        ABOUT
      </Title>
      <Paragraph className="introduction_content" isMobile={isMobile}>
        <Highlight isMobile={isMobile}>Digging</Highlight>의 사전적 의미는 '파기, 채굴' 이다.
        <br />
        이 단어가 라이프스타일의 범주로 들어오면서
        <br />
        어떤 것에 꽤 집중하여 파고 드는 걸 의미하게 되었다.
      </Paragraph>
      <Paragraph className="introduction_content" isMobile={isMobile}>
        우리는 가장 잘하고 좋아하는 것을 찾아 한 분야의 디깅러가 된다.
        <br />
        그리고 여기, 디깅 클럽에서 다른 디깅러를 만나게 된다.
      </Paragraph>
      <Paragraph className="introduction_content" isMobile={isMobile}>
        우리가 각자의 분야로 나아가기 위해 <Highlight isMobile={isMobile}>Digging</Highlight> 해온
        길,
        <br />그 길을 디깅 클럽에서 공유하려한다.
      </Paragraph>
    </IntroductionWrapper>
  );
}

const IntroductionWrapper = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? 'auto' : '1080px')};
  padding: ${(props) => (props.isMobile ? '40px 20px' : '0px 140px')};
`;

const Title = styled.h1<{ isMobile: boolean }>`
  margin-bottom: ${(props) => (props.isMobile ? '50px' : '100px')};
  font-size: ${(props) => (props.isMobile ? '32px' : '40px')};
  font-weight: 900;
`;

const Paragraph = styled.p<{ isMobile: boolean }>`
  margin-bottom: ${(props) => (props.isMobile ? '40px' : '60px')};
  font-size: ${(props) => (props.isMobile ? '14px' : '16px')};
  font-weight: 500;
  line-height: 1.5;
`;

const Highlight = styled.span<{ isMobile: boolean }>`
  color: #00b4db;
  font-size: ${(props) => (props.isMobile ? '14px' : '16px')};
  font-weight: 700;
`;
