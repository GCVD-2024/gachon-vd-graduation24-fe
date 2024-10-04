import styled from 'styled-components';
import { WorkDetailType } from '../../../types/types';
interface WorkInfoSectionProps {
  data: WorkDetailType;
}

const WorkInfoSection = ({ data }: WorkInfoSectionProps) => {
  return (
    <WorkInfoWrapper>
      <WorkCategory>{data.category}</WorkCategory>
      <WorkAuthorInfo>
        <AuthorSpan>{data.studentName}</AuthorSpan>
        <AuthorSpan>{data.studentId}</AuthorSpan>
      </WorkAuthorInfo>
      <WorkTitle>제목 : {data.title}</WorkTitle>
      <WorkSubtitle>{data.subtitle}</WorkSubtitle>
      <WorkBody>{data.description}</WorkBody>
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
const WorkSubtitle = styled.span`
  margin-bottom: 30px;

  font-size: 16px;
  line-height: 120%;
`;

const WorkBody = styled.span`
  font-size: 16px;
  line-height: 140%;
`;
