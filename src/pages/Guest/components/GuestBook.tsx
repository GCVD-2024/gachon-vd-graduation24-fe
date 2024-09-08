import React, { useEffect, useRef } from 'react';
import GuestBookEntry from './GuestBookEntry';
import { styled } from 'styled-components';

interface GuestBookProps {
  entries: string[];
  angles: number[]; // 각도를 받는 prop 추가
}

const GuestBook: React.FC<GuestBookProps> = ({ entries, angles }) => {
  const lastEntryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastEntryRef.current) {
      lastEntryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [entries]);

  return (
    <GuestBookContainer>
      {entries.map((entry, index) => (
        <GuestBookEntry
          key={index}
          text={entry}
          isNew={index === entries.length - 1}
          hasConnection={index > 0}
          ref={index === entries.length - 1 ? lastEntryRef : null}
          angle={angles[index]} // 각도 전달
        />
      ))}
    </GuestBookContainer>
  );
};

export default GuestBook;

const GuestBookContainer = styled.div`
  display: flex;
`;
