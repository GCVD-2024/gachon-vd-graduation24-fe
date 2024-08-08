import styled from 'styled-components';
function ConceptExperiencing(): React.ReactElement {
  return (
    <ExperiencingWrapper>
      {/* TODO: matterjs로 구현 필요 */}
      <MatterJsContainer></MatterJsContainer>
      <ContentWrapper>
        <Title>
          Experiencing.
          <br />
          경험하다
        </Title>
        <Description>
          Experiencing은 특정한 상황이나 사건, 감정 등을 실제로 겪고 느끼는 과정을 의미한다.
          <br />
          Digging이 지식이나 정보를 얻는 과정이라면,
          <br />
          Experiencing은 그 지식이나 정보를 실제로 체험하는 단계이다.
          <br />
          우리는 Digging을 통해 얻은 새로운 것들을 Experiencing하면서 더 깊이 이해하고,
          <br />
          그것이 우리 삶에 어떤 영향을 미치는지 직접 느껴본다.
        </Description>
      </ContentWrapper>
    </ExperiencingWrapper>
  );
}

export default ConceptExperiencing;

const ExperiencingWrapper = styled.div`
  height: 1080px;
  display: flex;
  flex-direction: column;
  padding: 0px 140px 0px 140px;
`;

const MatterJsContainer = styled.div`
  width: 100%;
  height: 800px;
  background-image: url('/about/ConceptExperiencing/concept-experiencing-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 100px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 115px;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 800;
  line-height: 120%; /* 84px */
  letter-spacing: -1.4px;
`;

const Description = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.64px;
`;
