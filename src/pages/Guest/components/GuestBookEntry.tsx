import styled from 'styled-components';

interface GuestBoxProps {
  nickname: string;
  content: string;
  timestamp: string;
}

const GuestBookEntry = ({ nickname, content, timestamp }: GuestBoxProps) => {
  return (
    <GuestBoxContainer>
      <GuestBoxHeader>from. {nickname || '익명'}</GuestBoxHeader>
      <GuestBoxContent>{content}</GuestBoxContent>
      <GuestBoxFooter>{timestamp}</GuestBoxFooter>
    </GuestBoxContainer>
  );
};

export default GuestBookEntry;

const GuestBoxContainer = styled.div`
  background-color: #8eebff;
  border: 1px solid #000;
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
  width: 465px;
  height: 250px;
`;

const GuestBoxHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const GuestBoxContent = styled.div`
  font-size: 18px;
  margin-bottom: 16px;
`;

const GuestBoxFooter = styled.div`
  font-size: 12px;
  text-align: right;
  color: #666;
`;
