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
  background: radial-gradient(50% 50% at 50% 50%, #8eebff 23%, #fff 118%);
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
  color: black;
`;

const GuestBoxHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const GuestBoxContent = styled.div`
  font-size: 18px;
  top: 41%;
  position: relative;
  transform: translateY(-50%);
  margin-bottom: 16px;
`;

const GuestBoxFooter = styled.div`
  font-size: 12px;
  top: 60%;
  position: relative;
  text-align: right;
  color: #666;
`;
