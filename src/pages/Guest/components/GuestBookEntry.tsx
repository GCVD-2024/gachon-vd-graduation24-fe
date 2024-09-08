import { forwardRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CircleProps {
  length: number;
  isNew: boolean;
}

interface GuestBookEntryProps {
  text: string;
  isNew: boolean;
  hasConnection: boolean;
  angle: number; // 각도 prop 추가
}

const expandLine = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 100px;
    opacity: 1;
  }
`;

const ConnectionLine = styled.div<{ isNew: boolean; angle: number }>`
  height: 10px;
  background-color: #fff;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -5px;

  ${({ isNew }) =>
    isNew &&
    css`
      animation: ${expandLine} 1s ease-out forwards;
    `}

  width: 100px;
  opacity: ${({ isNew }) => (isNew ? 0 : 1)};
  transform: rotate(${({ angle }) => angle}deg); /* 각도 적용 */
  transform-origin: left center;
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

const GuestBookEntry = forwardRef<HTMLDivElement, GuestBookEntryProps>(
  ({ text, isNew, hasConnection, angle }, ref) => {
    return (
      <div ref={ref} style={{ display: 'flex', alignItems: 'center' }}>
        {hasConnection && <ConnectionLine isNew={isNew} angle={angle} />}
        <Circle length={text.length} isNew={isNew}>
          <TextBox>{text}</TextBox>
        </Circle>
      </div>
    );
  }
);

export default GuestBookEntry;
