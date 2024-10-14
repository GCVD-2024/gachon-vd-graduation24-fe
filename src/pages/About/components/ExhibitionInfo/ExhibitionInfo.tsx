import styled from 'styled-components';
import { useRef } from 'react';
import { useIsMobile } from '../../../../hooks/useIsMobile';

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

export default function ExhibitionInfo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile();

  return (
    <ExhibitionInfoWrapper ref={containerRef}>
      <TitleContainer isMobile={isMobile}>
        <Title className="info_title" isMobile={isMobile}>Digging Club</Title>
        <Subtitle className="info_title" isMobile={isMobile}>발견의 여정 : 숨겨진 가능성을 찾아서</Subtitle>

        {infoItems.map((item, index) => (
          <InfoSection className="info_content" key={index} isMobile={isMobile}>
            <Label isMobile={isMobile}>{item.label}</Label>
            {item.content}
          </InfoSection>
        ))}
      </TitleContainer>
    </ExhibitionInfoWrapper>
  );
}

const ExhibitionInfoWrapper = styled.div`
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TitleContainer = styled.div<{ isMobile: boolean }>`
  width: ${props => props.isMobile ? '400px' : '830px'};
  height: ${props => props.isMobile ? '400px' : '830px'};
  background-image: url('/about/ExhibitionInfo/exhibition-info-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1<{ isMobile: boolean }>`
  font-size: ${props => props.isMobile ? '24px' : '40px'};
  font-weight: 900;
`;

const Subtitle = styled.h2<{ isMobile: boolean }>`
  margin-bottom: ${props => props.isMobile ? '50px' : '139px'};
  font-size: ${props => props.isMobile ? '10px' : '20px'};
  font-weight: 500;
`;

const InfoSection = styled.div<{ isMobile: boolean }>`
  margin-bottom: 20px;
  font-size: ${props => props.isMobile ? '10px' : '16px'};
  font-weight: 700;
`;

const Label = styled.span<{ isMobile: boolean }>`
  margin-right: 8px;
  font-size: ${props => props.isMobile ? '10px' : '16px'};
  font-weight: 700;
  color: #00b4db;
`;