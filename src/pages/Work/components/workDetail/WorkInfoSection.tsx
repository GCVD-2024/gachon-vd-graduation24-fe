import styled from 'styled-components';
import { WorkDetailType } from '../../../../types/types';
interface WorkInfoSectionProps {
  data: WorkDetailType;
}

const WorkInfoSection = ({ data }: WorkInfoSectionProps) => {
  return (
    <WorkInfoWrapper>
      <WorkCategory>{data.category}</WorkCategory>
      <WorkTitle>제목 : {data.title}</WorkTitle>
      <WorkSubtitle>{data.subtitle}</WorkSubtitle>
      <WorkAuthorInfo>
        <AuthorSpan>{data.studentName}</AuthorSpan>
        <AuthorSpan className="studentId">{data.studentId}</AuthorSpan>
      </WorkAuthorInfo>
      <WorkBody>{data.description}</WorkBody>
      <WorkContact>{data.contact}</WorkContact>
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
  margin-bottom: 60px;

  font-size: 50px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primary};
`;

const WorkAuthorInfo = styled.div`
  margin-bottom: 40px;

  display: flex;
  column-gap: 68px;
`;

const AuthorSpan = styled.span`
  font-size: 16px;
  line-height: 100%;

  &.studentId {
    color: #7ca2b0;
  }
`;

const WorkTitle = styled.span`
  margin-bottom: 20px;

  font-size: 32px;
  line-height: 120%;
`;

const WorkSubtitle = styled.span`
  margin-bottom: 40px;

  font-size: 16px;
  line-height: 120%;
`;

const WorkBody = styled.span`
  width: 290px;
  margin-bottom: 230px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #7ca2b0;
`;

const WorkContact = styled.span`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
