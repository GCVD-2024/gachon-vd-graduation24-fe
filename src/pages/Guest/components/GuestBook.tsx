import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import GuestBookEntry from './GuestBookEntry';

interface GuestBookProps {
  entries: string[];
}

const GuestBookContainer = styled.div`
  display: flex;
  position: relative;
  top: -27%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 20px;
  padding: 10px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: black;
`;

const GuestBook: React.FC<GuestBookProps> = ({ entries }) => {
  const lastEntryRef = useRef<HTMLDivElement | null>(null);
  let previousYOffset: number | undefined = undefined;

  useEffect(() => {
    if (lastEntryRef.current) {
      lastEntryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [entries]);

  return (
    <GuestBookContainer>
      {entries.map((entry, index) => {
        const currentEntry = (
          <GuestBookEntry
            key={index}
            text={entry}
            isNew={index === entries.length - 1}
            hasConnection={index > 0}
            ref={index === entries.length - 1 ? lastEntryRef : null}
            previousYOffset={previousYOffset}
          />
        );

        previousYOffset = Math.random() * 200 - 100;

        return currentEntry;
      })}
    </GuestBookContainer>
  );
};

export default GuestBook;