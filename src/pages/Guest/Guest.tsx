import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import background from '../../assets/img/bg_guest.png';
import { useGetGuestBookList } from '../../hooks/queries/guestBook/useGetGuestBook';
import { IGuestBookData, usePostGuestBook } from '../../hooks/mutations/guestBook/usePostGuestBook';
import { GUEST_KEYS } from '../../constants/QueryKey';
import queryClient from '../../api/queyrCLient';

const Guest = () => {
  const guestBook = useGetGuestBookList();
  const { GuestBookMutation } = usePostGuestBook();
  console.log('✅', guestBook);

  const [nameValue, setNameValue] = useState<string>('');
  const [commentValue, setCommentValue] = useState<string>('');
  const [circles, setCircles] = useState<
    { id: number; text: string; position: { top: string; left: string }; animate: boolean }[]
  >([]);
  const [circleId, setCircleId] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setNameValue(value);
    if (name === 'comment') setCommentValue(value);
  };

  const handleSubmit = async () => {
    // 방명록 데이터 객체 생성
    const newGuestBookData: IGuestBookData = {
      nickname: nameValue,
      content: commentValue,
    };

    // GuestBookMutation을 사용하여 데이터 전송
    try {
      await GuestBookMutation.mutateAsync(newGuestBookData);
      const newCircle = {
        id: circleId,
        text: `${nameValue}: ${commentValue}`,
        position: randomPosition(),
        animate: true, // 애니메이션 활성화
      };

      setCircles([...circles, newCircle]);
      setCircleId(circleId + 1);
      setNameValue(''); // 입력 초기화
      setCommentValue(''); // 입력 초기화

      queryClient.invalidateQueries({
        queryKey: GUEST_KEYS.all,
      });
    } catch (error) {
      console.error('Error posting guest book:', error);
    }
  };

  const randomPosition = () => {
    const top = `${Math.random() * 80 + 10}%`; // 10% ~ 90% 사이의 값
    const left = `${Math.random() * 80 + 10}%`; // 10% ~ 90% 사이의 값
    return { top, left };
  };

  return (
    <GuestPage>
      <img src={background} alt="background" />

      <ComentContainer>
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
              value={commentValue}
              onChange={handleInputChange}
              placeholder="댓글을 입력하세요"
            />
          </TextInputContainer>

          <SubmitButton onClick={handleSubmit}>DIGGING!</SubmitButton>
        </TextContainer>
      </ComentContainer>

      {circles.map((circle) => (
        <Circle
          key={circle.id}
          style={{ top: circle.position.top, left: circle.position.left }}
          animate={circle.animate}
        >
          {circle.text}
        </Circle>
      ))}
    </GuestPage>
  );
};

export default Guest;

// 애니메이션 정의
const shootUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

const Circle = styled.div<{ animate: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
  background: radial-gradient(50% 50% at 50% 50%, #8eebff 23%, #fff 118%);
  color: white;
  font-size: 16px;
  font-weight: bold;
  z-index: 10;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${shootUp} 1s ease-out forwards;
    `}; // css 헬퍼로 감싸서 애니메이션 적용
`;

const ComentContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 0.5rem;
  padding-bottom: 3%;
  min-width: 700px;
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
  background: radial-gradient(41.45% 43.19% at 50% 50%, #00b4db 0%, #000 100%);
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
    font-style: normal;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primaryBlue};
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

const SubmitButton = styled.button`
  width: 170px;
  height: 160px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
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
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
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
    border-color: ${({ theme }) => theme.colors.primaryBlue};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primaryBlue};
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
