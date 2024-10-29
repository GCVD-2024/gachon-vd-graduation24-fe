import styled from 'styled-components';
import { formatDate } from '../../../utils/dateUtils';

interface GuestBoxProps {
  nickname: string;
  content: string;
  timestamp: string;
}

const GuestBookEntry = ({ nickname, content, timestamp }: GuestBoxProps) => {
  const formattedTimestamp = formatDate(timestamp);

  return (
    <GuestBoxContainer>
      <GuestBoxHeader>from. {nickname || '익명'}</GuestBoxHeader>
      <GuestBoxContent>{content}</GuestBoxContent>
      <GuestBoxFooter>{formattedTimestamp}</GuestBoxFooter>
    </GuestBoxContainer>
  );
};

export default GuestBookEntry;

const GuestBoxContainer = styled.div`
  width: 465px;
  height: 250px;
  background-color: #0000006e;
  border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 12px;
  }
`;

const GuestBoxHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 11px;
  }
`;

const GuestBoxContent = styled.div`
  font-size: 18px;
  font-weight: 900;
  top: 41%;
  position: relative;
  transform: translateY(-50%);
  height: 60px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 12px;
    padding-top: 1rem;
  }
`;

const GuestBoxFooter = styled.div`
  font-size: 12px;
  top: 42%;
  padding: 2rem;
  position: relative;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
