import { styled } from 'styled-components';

interface MobileContactProps {
  name: string;
  studentId: string;
  contact: string;
}

const MobileWorkDetailContact = ({ name, studentId, contact }: MobileContactProps) => {
  return (
    <MobileFooterWrapper>
      <StudentInfoWrapper>
        <NameSpan>{name}</NameSpan>
        <IdSpan>{studentId}</IdSpan>
      </StudentInfoWrapper>
      <ContactSpan>{contact}</ContactSpan>
    </MobileFooterWrapper>
  );
};

export default MobileWorkDetailContact;

const MobileFooterWrapper = styled.section`
  width: 100%;
  min-width: 37.5rem;
  padding: 2rem 1.6rem 0 1.6rem;
  margin-bottom: 10rem;

  display: flex;
  justify-content: space-between;
  border-top: 1px solid #fff;
`;

const StudentInfoWrapper = styled.div`
  display: flex;
  column-gap: 1.44rem;
`;

const NameSpan = styled.span`
  color: #fff;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

const IdSpan = styled.span`
  color: #6a7574;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

const ContactSpan = styled.span`
  color: #fff;

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
