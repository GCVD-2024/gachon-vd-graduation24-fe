import React from 'react';
import styled from 'styled-components';
import BlackholeCircle from './components/BlackholeCircle';

function ConceptImmersing(): React.ReactElement {
  return (
    <ImmersingWrapper>
      <BlackholeCircle />

      <DescriptionContainer>
        <Description>
          Immersing은 어떤 활동이나 주제에 완전히 빠져들어 집중하는 것을 의미한다.
          <br />
          Digging이 어떤 것을 알아가고 발견하는 과정이라면,
          <br />
          Immersing은 그 과정에서 얻은 것을 깊고 완전히 경험하며 새로운 시각과 경험을 얻는 것이다.
        </Description>
        <Description>우리는 몰입을 통해 더 창의적이고 깊이 있는 결과를 얻어낼 수 있다.</Description>
      </DescriptionContainer>
    </ImmersingWrapper>
  );
}

export default ConceptImmersing;

const ImmersingWrapper = styled.div`
  height: 3000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Description = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.64px;
`;
