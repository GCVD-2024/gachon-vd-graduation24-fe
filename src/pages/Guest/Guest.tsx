import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';
import background from '../../assets/img/bg_guest.png';
import { useGetGuestBookList } from '../../hooks/queries/guestBook/useGetGuestBook';
import { IGuestBookData, usePostGuestBook } from '../../hooks/mutations/guestBook/usePostGuestBook';
import GuestBookEntry from './components/GuestBookEntry';
import queryClient from '../../api/queyrClient';
import { GUEST_KEYS } from '../../constants/QueryKey';

const Guest = () => {
  const { data: guestBookData } = useGetGuestBookList();
  console.log('실행', guestBookData);
  const { GuestBookMutation } = usePostGuestBook();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const [formValues, setFormValues] = useState({
    name: '',
    comment: '',
  });
  const [guestEntries, setGuestEntries] = useState<
    {
      id: number;
      nickname: string;
      content: string;
      timestamp: string;
      twinkle: boolean;
    }[]
  >([]);
  const [entryId, setEntryId] = useState<number>(0);

  const entriesEndRef = useRef<HTMLDivElement>(null);

  const initialEntries = useMemo(
    () =>
      guestBookData?.guestbooks?.map((guest, index) => ({
        id: index,
        nickname: guest.nickname,
        content: guest.content,
        timestamp: guest.createdAt,
        twinkle: false,
      })) || [],
    [guestBookData]
  );

  const allEntries = [...initialEntries, ...guestEntries];

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const scrollToBottom = () => {
    entriesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    const newGuestBookData: IGuestBookData = {
      nickname: formValues.name,
      content: formValues.comment,
    };

    try {
      await GuestBookMutation.mutateAsync(newGuestBookData);

      const newEntry = {
        id: entryId + initialEntries.length,
        nickname: formValues.name,
        content: formValues.comment,
        timestamp: new Date().toISOString(),
        twinkle: true,
      };

      setGuestEntries([...guestEntries, newEntry]);
      setEntryId(entryId + 1);
      setFormValues({
        name: '',
        comment: '',
      });
      setIsAnimating(true);
      useGetGuestBookList();
      queryClient.invalidateQueries({
        queryKey: GUEST_KEYS.all,
      });

      setTimeout(() => {
        setGuestEntries((prevEntries) =>
          prevEntries.map((entry) =>
            entry.id === newEntry.id ? { ...entry, twinkle: false } : entry
          )
        );

        setIsAnimating(false);
        scrollToBottom();
      }, 1000);
    } catch (error) {
      console.error('방명록 전송 실패 -- ✈️ :', error);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [allEntries]);

  return (
    <GuestPage>
      <img src={background} alt="background" />

      <Title>WHAT DID YOU DIG ?</Title>

      <ComentContainer>
        <TextContainer>
          <TextInputContainer>
            <NameInput
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="이름을 입력하세요"
              autoComplete="off"
            />
            <TextInput
              name="comment"
              type="text"
              value={formValues.comment}
              onChange={handleInputChange}
              placeholder="댓글을 입력하세요"
              autoComplete="off"
            />
          </TextInputContainer>

          <SubmitButton onClick={handleSubmit} isAnimating={isAnimating}>
            DIGGING!
          </SubmitButton>
        </TextContainer>
      </ComentContainer>

      <EntriesContainer>
        {allEntries.map((entry) => (
          <EntryWrapper key={entry.id} twinkle={entry.twinkle}>
            <GuestBookEntry
              nickname={entry.nickname}
              content={entry.content}
              timestamp={entry.timestamp}
            />
          </EntryWrapper>
        ))}
        <div ref={entriesEndRef} />
      </EntriesContainer>
    </GuestPage>
  );
};

export default Guest;

/**
 *  1. 디깅 버튼 눌렀을 때 애니메이션
 */
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

/**
 *  2. 방명록 전송 후 올라오는 애니메이션
 */
const shootUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primaryBlue};
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 1rem;
  }
`;

const GuestPage = styled.main`
  width: 100vw;
  height: calc(100vh - 73px);
  background: radial-gradient(41.45% 43.19% at 50% 50%, #00b4db 0%, #000 100%);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 160px;

  img {
    position: absolute;
    width: 100vw;
    height: calc(100vh - 73px);
    object-fit: cover;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding-bottom: 100px;
  }
`;

const EntriesContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  overflow-x: scroll;
  justify-content: center;
  padding: 20px;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    padding: 10px;
    justify-content: center;
    margin-bottom: 11rem;
    gap: 1rem;
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-52%);
  }
`;

const EntryWrapper = styled.div<{ twinkle: boolean }>`
  ${({ twinkle }) =>
    twinkle &&
    css`
      animation: ${shootUp} 1s ease-out forwards;
    `};
`;

const ComentContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 55%;
  gap: 0.5rem;
  padding-bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 10;

  @media (max-width: 768px) {
    width: 90%;
    gap: 0.2rem;
    margin-bottom: 3rem;
  }
`;

const TextInputContainer = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.section`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;
const SubmitButton = styled.button<{ isAnimating: boolean }>`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: white;
  font-size: 16px;
  font-weight: bold;
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
  border: none;
  transition: background-color 0.3s ease;

  // 기본적으로 애니메이션 적용
  animation: ${({ isAnimating }) => (isAnimating ? expandCircle : 'none')} 1s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    font-size: 20px;
    animation: none;
    border: none;
  }
`;

const NameInput = styled.input`
  display: flex;
  padding-left: 1rem;
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
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 40px;
  }
`;

const TextInput = styled(NameInput)`
  display: flex;
  padding-left: 1rem;
  font-size: 16px;
  height: 160px;
  border-radius: 0px 0px 14px 14px;
  border-top: none;

  @media (max-width: 768px) {
    font-size: 14px;
    height: 80px;
  }
`;
