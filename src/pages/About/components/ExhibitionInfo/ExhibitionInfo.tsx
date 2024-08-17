import React from 'react';
import styled from 'styled-components';
interface InfoItem {
  label: string;
  content: string;
}

function ExhibitionInfo(): React.ReactElement {
  const infoItems: InfoItem[] = [
    { label: '', content: '가천대학교 시각디자인학과 졸업전시 2025' },
    { label: '기간', content: '2024. 10. - 2024. 10.' },
    { label: '시간', content: '10:00 - 18:00' },
    { label: '장소', content: '가천대학교 비전타워 B1' },
  ];

  return (
    <ExhibitionInfoWrapper>
      <TitleContainer>
        <Title>Digging Club</Title>
        <Subtitle>발견의 여정 : 숨겨진 가능성을 찾아서</Subtitle>

        {infoItems.map((item, index) => (
          <InfoSection key={index}>
            <Label>{item.label}</Label>
            {item.content}
          </InfoSection>
        ))}
      </TitleContainer>
    </ExhibitionInfoWrapper>
  );
}

export default ExhibitionInfo;

const ExhibitionInfoWrapper = styled.div`
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TitleContainer = styled.div`
  width: 90%;
  height: 961px;
  /* TODO: 사이즈 수정 필요 */
  background-image: url('/about/ExhibitionInfo/exhibition-info-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 900;
  line-height: 120%; /* 96px */
  letter-spacing: -1.6px;
`;

const Subtitle = styled.h2`
  margin-bottom: 200px;
  font-size: 36px;
  font-weight: 500;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.96px;
`;

const InfoSection = styled.div`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
`;

const Label = styled.span`
  margin-right: 8px;
  color: #e44227;
`;
