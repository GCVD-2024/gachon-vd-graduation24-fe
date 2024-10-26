import styled from 'styled-components';
import { WorkDetailType } from '../../../../types/types';
interface WorkInfoSectionProps {
  data: WorkDetailType;
}

const WorkInfoSection = ({ data }: WorkInfoSectionProps) => {
  const mappedCategory = (() => {
    switch (data.category) {
      case 'UXUI':
        return 'UX/UI';
      case 'ILLUSTRATION':
        return 'ILLUST';
      case 'BX':
        return 'BRAND';
      default:
        return data.category;
    }
  })();
  return (
    <WorkInfoWrapper>
      <WorkCategory>{mappedCategory}</WorkCategory>
      <WorkTitle>{data.title}</WorkTitle>
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
  width: 29rem;

  display: flex;
  flex-direction: column;
`;

const WorkCategory = styled.span`
  margin-bottom: 6rem;

  font-size: 3rem;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primaryBlue};
`;

const WorkAuthorInfo = styled.div`
  margin-bottom: 4rem;

  display: flex;
  column-gap: 6.8rem;
`;

const AuthorSpan = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  &.studentId {
    font-weight: 500;
    color: #7ca2b0;
  }
`;

const WorkTitle = styled.span`
  margin-bottom: 2rem;

  font-size: 3rem;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
`;

const WorkSubtitle = styled.span`
  margin-bottom: 4rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

const WorkBody = styled.span`
  width: 29rem;
  margin-bottom: 23rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #7ca2b0;
`;

const WorkContact = styled.span`
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
