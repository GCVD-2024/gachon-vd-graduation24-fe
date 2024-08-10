import styled, { keyframes } from 'styled-components';
import {
  EXHIBITION_DEPARTMENT,
  EXHIBITION_SUBTITLE,
  EXHIBITION_TITLE,
} from '../../../../constants/constants';

interface MainTitleProps {
  scrollPercentage: number;
}

const MainTitle = (scrollInfo: MainTitleProps) => {
  return (
    <MainTitleWrapper>
      <FloatingImage src="/about/MainTitle/d.png" alt="d" />
      <TitlePart style={{ transform: `translateX(calc(-50% * ${scrollInfo.scrollPercentage}))` }}>
        DIGGING
      </TitlePart>
      <BottomContainer>
        <ExhibitionInfo>
          <ExhibitionText>{EXHIBITION_TITLE}</ExhibitionText>
          <ExhibitionText>{EXHIBITION_DEPARTMENT}</ExhibitionText>
          <ExhibitionText>{EXHIBITION_SUBTITLE}</ExhibitionText>
        </ExhibitionInfo>
        <TitlePart style={{ transform: `translateX(calc(50% * ${scrollInfo.scrollPercentage}))` }}>
          CLUB
        </TitlePart>
      </BottomContainer>
    </MainTitleWrapper>
  );
};

export default MainTitle;

const MainTitleWrapper = styled.div`
  position: relative;
  /* TODO: 높이 수정 */
  height: 983px;
  background-image: url('/about/MainTitle/main-title-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const float = keyframes`
  0%, 100% { transform: translate(-50%, -50%); }
  50% { transform: translate(-50%, -52%); }
`;

const FloatingImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  z-index: 10;
  animation: ${float} 3s ease-in-out infinite;
`;

const TitlePart = styled.div`
  font-size: 350px;
  font-weight: 900;
  line-height: 1;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
`;

const ExhibitionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* TODO: gap 수정 */
  gap: 10px;
`;

const ExhibitionText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
`;
