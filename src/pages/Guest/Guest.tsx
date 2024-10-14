import React, { useMemo, useState } from 'react';
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

  const [nameValue, setNameValue] = useState<string>('');
  const [commentValue, setCommentValue] = useState<string>('');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setNameValue(value);
    if (name === 'comment') setCommentValue(value);
  };

  const handleSubmit = async () => {
    const newGuestBookData: IGuestBookData = {
      nickname: nameValue,
      content: commentValue,
    };

    try {
      await GuestBookMutation.mutateAsync(newGuestBookData);

      const newEntry = {
        id: entryId + initialEntries.length,
        nickname: nameValue,
        content: commentValue,
        timestamp: new Date().toLocaleString(),
        twinkle: true,
      };

      setGuestEntries([...guestEntries, newEntry]);
      setEntryId(entryId + 1);
      setNameValue('');
      setCommentValue('');

      queryClient.invalidateQueries({
        queryKey: GUEST_KEYS.all,
      });

      // twinkle 애니메이션이 끝난 후 twinkle 상태를 false로 변경
      setTimeout(() => {
        setGuestEntries((prevEntries) =>
          prevEntries.map((entry) =>
            entry.id === newEntry.id ? { ...entry, twinkle: false } : entry
          )
        );
      }, 1000);
    } catch (error) {
      console.error('방명록 전송 실패 -- ✈️ :', error);
    }
  };

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
      </EntriesContainer>
    </GuestPage>
  );
};

export default Guest;

const Title = styled.h1``;

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
`;

const EntriesContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  overflow-x: scroll;
  justify-content: center;

  padding: 20px;
  margin-bottom: 3rem;
`;

const EntryWrapper = styled.div<{ twinkle: boolean }>`
  margin-top: 2rem;
  ${({ twinkle }) =>
    twinkle &&
    css`
      animation: ${shootUp} 1s ease-out forwards;
    `};
`;

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

const ComentContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 60%;
  gap: 0.5rem;
  padding-bottom: 3%;

  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

const TextInputContainer = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TextContainer = styled.section`
  display: flex;
  gap: 2rem;
`;

const SubmitButton = styled.button`
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
    border-color: ${({ theme }) => theme.colors.primaryBlue};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primaryBlue};
  }
`;
