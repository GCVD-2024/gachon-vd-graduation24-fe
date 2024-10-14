import GuestBookEntry from './GuestBookEntry';
import styled from 'styled-components';

interface GuestBookProps {
  entries: string[];
}

const GuestBookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const GuestBook = ({ entries }: GuestBookProps) => (
  <GuestBookContainer>
    {entries.map((entry, index) => (
      <GuestBookEntry key={index} text={entry} />
    ))}
  </GuestBookContainer>
);

export default GuestBook;
