import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet-async';

// Drop 애니메이션 정의
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

// Water Drop 애니메이션 정의
const waterDropAnimation = keyframes`
  from, to {
    transform: none;
  }
  50% {
    transform: translateX(300px);
  }
`;

// Circle Drop 애니메이션 정의
const circleDropAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
`;

// Circle Props 타입 정의
interface CircleProps {
  length: number;
}

// 원 크기 및 텍스트 박스 설정
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

// WaterDropContainer와 애니메이션 설정
const WaterDropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SvgContainer = styled.svg`
  width: 100%;
  height: auto;
`;

const Drop = styled.circle`
  animation: ${waterDropAnimation} 9000ms infinite;
  overflow: hidden;

  &:nth-child(2) {
    animation-delay: 2500ms;
  }
`;

const InputField = styled.input`
  width: 80%;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const SvgDefs = () => (
  <svg height="0" width="0">
    <defs>
      <filter id="water" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  
                  0 1 0 0 0  
                  0 0 1 0 0  
                  0 0 0 19 -9"
          result="goo"
        />
      </filter>
    </defs>
  </svg>
);

const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #333;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

// GuestBookEntry 컴포넌트 타입 정의
interface GuestBookEntryProps {
  text: string;
}

const GuestBookEntry: React.FC<GuestBookEntryProps> = ({ text }) => (
  <Circle length={text.length}>
    <TextBox>{text}</TextBox>
  </Circle>
);

// GuestBook 컴포넌트 스타일 설정
const GuestBookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

// GuestBook 컴포넌트 타입 정의
interface GuestBookProps {
  entries: string[];
}

const GuestBook: React.FC<GuestBookProps> = ({ entries }) => (
  <GuestBookContainer>
    {entries.map((entry, index) => (
      <GuestBookEntry key={index} text={entry} />
    ))}
  </GuestBookContainer>
);

const Guest: React.FC = () => {
  const [guestEntries, setGuestEntries] = useState<string[]>([
    '정말 좋은 출연진이었습니다. 특히 저는 김도연님 작품이 가장 기억에 남네요.',
  ]);

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setGuestEntries([...guestEntries, inputValue.trim()]);
      setInputValue(''); // 입력 필드 초기화
    }
  };

  return (
    <>
      <Helmet>
        <title>Digging Club - Guest</title>
      </Helmet>
      <SvgDefs />
      <div>
        <InputField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="댓글을 입력하세요"
        />
        <SubmitButton onClick={handleSubmit}>전송</SubmitButton>
      </div>

      <GuestBook entries={guestEntries} />
    </>
  );
};

export default Guest;
