import styled from 'styled-components';

interface ErrorBtnProps {
  onClick: VoidFunction;
  text: string;
}
const ErrorBtn = ({ onClick, text }: ErrorBtnProps) => {
  return <BtnWrapper onClick={onClick}>{text}</BtnWrapper>;
};

export default ErrorBtn;

const BtnWrapper = styled.div`
  width: 10rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  border-radius: 1rem;
  background-color: gray;
  cursor: pointer;
`;
