import { useRef } from 'react';
import styled from 'styled-components';
import { useIsMobile } from '../../../../hooks/useIsMobile';

export default function ConceptSavoring() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <PageWrapper ref={containerRef} isMobile={isMobile}>
      <Title className="savoring_title" isMobile={isMobile}>
        Savoring.
      </Title>
      <Subtitle className="savoring_title" isMobile={isMobile}>
        향유하다
      </Subtitle>
      <DescriptionContainer isMobile={isMobile}>
        <Description className="savoring_content" isMobile={isMobile}>
          Savoring은 어떤 경험이나 감정을 깊이 있게 즐기고 음미하는 것을 의미한다.
          <br />
          Digging이 무언가를 탐구하고 발견하는 과정이라면,
          <br />
          Savoring은 그 과정에서 얻은 결과를 천천히 그리고 깊이 있게 즐기는 것이다.
        </Description>
        <Description className="savoring_content" isMobile={isMobile}>
          우리는 Digging을 통해 발견한 것들을 Savoring함으로써
          <br />
          그것이 우리에게 주는 진정한 의미와 가치를 마음껏 누릴 수 있다.
        </Description>
      </DescriptionContainer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div<{ isMobile: boolean }>`
  height: ${(props) => (props.isMobile ? 'auto' : '3000px')};
  min-height: ${(props) => (props.isMobile ? '100vh' : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isMobile ? '40px 20px' : '0')};

  background-image: url('/about/ConceptSavoring/concept-savoring-bg.svg');
  background-size: ${(props) => (props.isMobile ? 'cover' : '100%')};
  background-position: center;
  background-repeat: no-repeat;
`;

const TitleText = styled.h1<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? '24px' : '40px')};
  font-weight: 800;
  line-height: 120%;
  letter-spacing: ${(props) => (props.isMobile ? '-1.28px' : '-1.52px')};
  text-align: center;
`;

const Title = styled(TitleText)`
  margin-bottom: ${(props) => (props.isMobile ? '10px' : '20px')};
`;

const Subtitle = styled(TitleText)`
  margin-bottom: ${(props) => (props.isMobile ? '40px' : '85px')};
`;

const DescriptionContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.isMobile ? '30px' : '60px')};
`;

const Description = styled.p<{ isMobile: boolean }>`
  text-align: center;
  font-size: ${(props) => (props.isMobile ? '12px' : '16px')};
  font-weight: 500;
  line-height: 140%;
  letter-spacing: ${(props) => (props.isMobile ? '-0.56px' : '-0.64px')};
`;
