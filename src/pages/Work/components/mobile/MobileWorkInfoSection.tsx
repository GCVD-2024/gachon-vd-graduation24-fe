import styled from 'styled-components';
import { WorkDetailType } from '../../../../types/types';
interface WorkInfoSectionProps {
  data: WorkDetailType;
}

const MobileWorkInfoSection = ({ data }: WorkInfoSectionProps) => {
  return (
    <WorkInfoWrapper>
      <MobileCategoryWrapper>
        <WorkCategory>{data.category}</WorkCategory>
        <WorkAuthorInfo>
          <AuthorSpan>{data.studentName}</AuthorSpan>
          <AuthorSpan className="studentId">{data.studentId}</AuthorSpan>
        </WorkAuthorInfo>
      </MobileCategoryWrapper>
      <WorkTitle>제목 : {data.title}</WorkTitle>
      <WorkSubtitle>{data.subtitle}</WorkSubtitle>
      <WorkBody>{data.description}</WorkBody>
    </WorkInfoWrapper>
  );
};

export default MobileWorkInfoSection;

const WorkInfoWrapper = styled.section`
  width: 380px;

  display: flex;
  flex-direction: column;
`;

const MobileCategoryWrapper = styled.div`
  height: 6.2rem;
  margin-bottom: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #fff;
`;

const WorkCategory = styled.span`
  font-size: 1.8rem;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primary};
`;

const WorkAuthorInfo = styled.div`
  display: flex;
  column-gap: 1.45rem;
`;

const AuthorSpan = styled.span`
  font-size: 1.2rem;
  line-height: 100%;

  &.studentId {
    color: #7ca2b0;
  }
`;

const WorkTitle = styled.span`
  margin-bottom: 20px;
  font: ${({ theme }) => theme.fonts.Primary};
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
`;

const WorkSubtitle = styled.span`
  margin-bottom: 4rem;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

const WorkBody = styled.span`
  width: 34.3rem;
  height: 15.3rem;
  margin-bottom: 4rem;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #6a7574;
`;
