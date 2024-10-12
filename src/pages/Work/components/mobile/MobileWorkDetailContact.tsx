import { styled } from 'styled-components';

interface MobileContactProps {
  name: string;
  studentId: string;
  contact: string;
}

const MobileWorkDetailContact = ({ name, studentId, contact }: MobileContactProps) => {
  return (
    <MobileFooterWrapper>
      <div>
        <span>{name}</span>
        <span>{studentId}</span>
      </div>
      <span>{contact}</span>
    </MobileFooterWrapper>
  );
};

export default MobileWorkDetailContact;

const MobileFooterWrapper = styled.section`
  width: 100%;
  padding-top: 2rem;
  margin-bottom: 10rem;

  display: flex;
  justify-content: space-between;
`;
