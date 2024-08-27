import styled from 'styled-components';

const WorkInfoSection = () => {
  return (
    <WorkInfoWrapper>
      <WorkCategory>UX/UI</WorkCategory>
      <WorkAuthorInfo>
        <AuthorSpan>김가천</AuthorSpan>
        <AuthorSpan>202412345</AuthorSpan>
      </WorkAuthorInfo>
      <WorkTitle>제목 : 내가 뭘 한 거지</WorkTitle>
      <WorkBody>
        나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고
        싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을
        하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다.
        졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지
        모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀
        한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가
        멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도
        내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고
        싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을
        하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다.
        졸업을 하고 싶다.나도 내가 멀 한건지 모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지
        모르겠다. 졸업을 하고 싶다.나도 내가 멀 한건지
      </WorkBody>
    </WorkInfoWrapper>
  );
};

export default WorkInfoSection;

const WorkInfoWrapper = styled.section`
  width: 380px;

  display: flex;
  flex-direction: column;
`;

const WorkCategory = styled.span`
  margin-bottom: 30px;

  font-size: 50px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primary};
`;

const WorkAuthorInfo = styled.div`
  margin-bottom: 40px;

  display: flex;
  column-gap: 67px;
`;

const AuthorSpan = styled.span`
  font-size: 28px;
  line-height: 100%;
`;

const WorkTitle = styled.span`
  margin-bottom: 30px;

  font-size: 32px;
  line-height: 120%;
`;

const WorkBody = styled.span`
  font-size: 20px;
  line-height: 140%;
`;
