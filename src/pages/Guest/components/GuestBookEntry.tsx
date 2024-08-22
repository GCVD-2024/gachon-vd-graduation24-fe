import styled, { keyframes } from 'styled-components';

interface CircleProps {
  length: number;
}

interface GuestBookEntryProps {
  text: string;
}

const dropAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const waterDropAnimation = keyframes`
  from, to {
    transform: none;
  }
  50% {
    transform: translateX(300px);
  }
`;

const circleDropAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
`;

const Circle = styled.div<CircleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 18px;
  text-align: center;
  background-color: #fff;
  margin: 10px;
  box-sizing: border-box;
  animation: ${dropAnimation} 0.6s ease-out forwards, ${circleDropAnimation} 2s infinite ease-in-out,
    ${waterDropAnimation} 5000ms infinite;
  filter: url(#water);

  width: ${({ length }) =>
    length <= 20 ? '150px' : length <= 70 ? '250px' : length <= 130 ? '330px' : '430px'};

  height: ${({ length }) =>
    length <= 20 ? '150px' : length <= 70 ? '250px' : length <= 130 ? '330px' : '430px'};
`;

const TextBox = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  word-break: break-word;
`;

const GuestBookEntry = ({ text }: GuestBookEntryProps) => (
  <Circle length={text.length}>
    <TextBox>{text}</TextBox>
  </Circle>
);

export default GuestBookEntry;
