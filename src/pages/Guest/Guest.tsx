import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/background.png';
import SvgDefs from './components/SvgDefs';
import GuestBook from './components/GuestBook';

const Guest = () => {
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
    <GuestPage>
      <SvgDefs />
      <img src={background} />
      <GuestBook entries={guestEntries} />

      <ComentContainer>
        <h1>WHAT DID YOU DIG ?</h1>
        <TextContainer>
          <TextInput
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="댓글을 입력하세요"
          />
          <SubmitButton onClick={handleSubmit}>DIGGING!</SubmitButton>
        </TextContainer>
      </ComentContainer>
    </GuestPage>
  );
};

export default Guest;

const ComentContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 0.5rem;
  padding-bottom: 5%;

  min-width: 1050px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`;

const GuestPage = styled.main`
  width: 100dvw;
  height: calc(100vh - 73px);
  background: radial-gradient(41.45% 43.19% at 50% 50%, #6c2519 0%, #000 100%);

  h1 {
    text-align: center;
    text-shadow: 0px -4px 10px rgba(92, 37, 37, 0.3);
    font-size: 100px;
    font-style: normal;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 100%;
  }

  img {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 73px);
  }
`;

const TextContainer = styled.section`
  display: flex;
  margin: 0 auto;
  gap: 2rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  &:hover {
    background-color: #e63946;
  }
`;

const TextInput = styled.input`
  display: flex;

  width: 80%;
  font-size: 18px;
  color: white;
  background: transparent;
  border: 1px solid white;
  border-radius: 14px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;
