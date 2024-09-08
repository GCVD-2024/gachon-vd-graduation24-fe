import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import background from '../../assets/img/background.png';
import GuestBook from './components/GuestBook';

const Guest = () => {
  const [guestEntries, setGuestEntries] = useState<string[]>([
    '정말 좋은 출연진이었습니다. 특히 저는 김도연님 작품이 가장 기억에 남네요.',
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [nameValue, setNameValue] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [randomAngles, setRandomAngles] = useState<number[]>([]); // 각도를 저장하는 상태

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'comment') {
      setInputValue(event.target.value);
    } else if (event.target.name === 'name') {
      setNameValue(event.target.value);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() && nameValue.trim()) {
      // 이름과 댓글을 함께 표시
      setGuestEntries([...guestEntries, `${nameValue}: ${inputValue.trim()}`]);

      // 랜덤 각도 생성 (-45도에서 45도 사이)
      const randomAngle = Math.random() * 90 - 45;
      setRandomAngles([...randomAngles, randomAngle]);

      setInputValue('');
      setNameValue('');

      // Trigger the animation
      setIsAnimating(true);

      // Reset animation after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Duration should match animation duration
    }
  };

  return (
    <GuestPage>
      <img src={background} alt="background" />
      <GuestBook entries={guestEntries} angles={randomAngles} />

      <ComentContainer>
        <h1>WHAT DID YOU DIG ?</h1>
        <TextContainer>
          <TextInputContainer>
            <NameInput
              name="name"
              type="text"
              value={nameValue}
              onChange={handleInputChange}
              placeholder="이름을 입력하세요"
            />
            <TextInput
              name="comment"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="댓글을 입력하세요"
            />
          </TextInputContainer>

          <SubmitButton onClick={handleSubmit} isAnimating={isAnimating}>
            DIGGING!
          </SubmitButton>
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

const TextInputContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const GuestPage = styled.main`
  width: 100vw;
  height: calc(100vh - 73px);
  background: radial-gradient(41.45% 43.19% at 50% 50%, #6c2519 0%, #000 100%);
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    text-shadow: 0px -4px 10px rgba(92, 37, 37, 0.3);
    font-size: 100px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 100%;
  }

  img {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 73px);
    object-fit: cover;
    z-index: 0;
  }
`;

const TextContainer = styled.section`
  display: flex;
  margin: 0 auto;
  gap: 2rem;
  width: 100%;
`;

const expandCircle = keyframes`
  0% {
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }
  50% {
    width: 300px;
    height: 100px;
    border-radius: 50px;
  }
  100% {
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }
`;

const SubmitButton = styled.button<{ isAnimating: boolean }>`
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
  font-size: 30px;
  font-weight: 900;
  line-height: 120%;
  transition: background-color 0.3s ease;

  animation: ${({ isAnimating }) => (isAnimating ? expandCircle : 'none')} 1s ease;

  &:hover {
    background-color: #e63946;
  }
`;

const NameInput = styled.input`
  display: flex;
  font-size: 18px;
  height: 60%;
  color: white;
  background: transparent;
  border-radius: 14px 14px 0px 0px;
  border: 2px solid #fff;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;
const TextInput = styled.input`
  display: flex;
  font-size: 18px;
  height: 100%;
  color: white;
  background: transparent;
  border-radius: 0px 0px 14px 14px;
  border: 2px solid #fff;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;
