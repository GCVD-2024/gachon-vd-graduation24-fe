import React from 'react';
import styled from 'styled-components';
import Marquee from './components/Marquee';

function ConceptReflecting(): React.ReactElement {
  return (
    <ReflectingWrapper>
      <Marquee marqueeText="Reflecting . 반추하" />

      <Description>
        Reflecting은 특정한 경험이나 지식에 대해 깊이 생각하고 그 의미를 되새기는 과정을 의미한다.
        <br />
        Digging을 통해 얻게 된 정보나 경험을 Reflecting함으로써, 그것이 우리의 삶에 어떤 의미를
        가지는지,
        <br />
        어떤 교훈을 줄 수 있는지 고민하게 된다. 이러한 반추의 과정에서 우리는 더 깊이 있는 통찰과
        이해를 얻는다.
        <br />
      </Description>
    </ReflectingWrapper>
  );
}

export default ConceptReflecting;

const ReflectingWrapper = styled.div`
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 140px 0 140px;
`;

const Description = styled.p`
  margin-top: 46px;
  font-size: 32px;
  font-weight: 500;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.64px;
`;
