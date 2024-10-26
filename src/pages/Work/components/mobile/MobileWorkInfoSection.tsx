import styled from 'styled-components';
import { WorkDetailType } from '../../../../types/types';
interface WorkInfoSectionProps {
  data: WorkDetailType;
}

const MobileWorkInfoSection = ({ data }: WorkInfoSectionProps) => {
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
      <MobileCategoryWrapper>
        <WorkCategory>{mappedCategory}</WorkCategory>
        <WorkAuthorInfo>
          <AuthorSpan>{data.studentName}</AuthorSpan>
          <AuthorSpan className="studentId">{data.studentId}</AuthorSpan>
        </WorkAuthorInfo>
      </MobileCategoryWrapper>
      <InfoBodyWrapper>
        <WorkTitle>{data.title}</WorkTitle>
        <WorkSubtitle>{data.subtitle}</WorkSubtitle>
        <WorkBody>{data.description}</WorkBody>
      </InfoBodyWrapper>
    </WorkInfoWrapper>
  );
};

export default MobileWorkInfoSection;

const WorkInfoWrapper = styled.section`
  width: 100%;
  min-width: 37.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileCategoryWrapper = styled.div`
  width: 100%;
  min-width: 37.5rem;

  height: 6.2rem;
  margin-bottom: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #fff;
`;

const WorkCategory = styled.span`
  margin-left: 1.6rem;

  font-size: 1.8rem;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primaryBlue};
`;

const WorkAuthorInfo = styled.div`
  margin-right: 1.6rem;

  display: flex;
  column-gap: 1.45rem;
`;

const AuthorSpan = styled.span`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  &.studentId {
    font-weight: 500;
    color: #7ca2b0;
  }
`;

const InfoBodyWrapper = styled.div`
  width: 37.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 1.6rem;
`;

const WorkTitle = styled.span`
  margin-bottom: 1.2rem;

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
  margin-bottom: 4rem;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  color: #6a7574;
`;
