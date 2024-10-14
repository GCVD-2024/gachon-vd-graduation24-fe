import { useNavigate } from 'react-router-dom';
import DelayedComponent from './DelayedComponent';
import { styled } from 'styled-components';
import ErrorBtn from './ErrorBtn';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  console.log('Error', error);
  return (
    <DelayedComponent>
      <ErrorWrapper>
        <ErrorSpan>에러가 발생했습니다</ErrorSpan>
        <ErrorBtnWrapper>
          <ErrorBtn text={'새로고침'} onClick={() => resetErrorBoundary()} />
          <ErrorBtn text={'홈으로'} onClick={() => navigate('/')} />
        </ErrorBtnWrapper>
      </ErrorWrapper>
    </DelayedComponent>
  );
};

export default ErrorFallback;

const ErrorWrapper = styled.div`
  width: 100%;
  height: 30dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 3rem;
`;

const ErrorSpan = styled.span`
  font-size: 2rem;
`;

const ErrorBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;
