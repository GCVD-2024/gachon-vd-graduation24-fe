import styled from 'styled-components';

function ExhibitionMeaning() {
  return (
    <IntroductionWrapper>
      <TitleContainer>
        <Title>우리가 지나온 길, 그리고 앞으로 나아갈 길</Title>
        <Paragraph>
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
