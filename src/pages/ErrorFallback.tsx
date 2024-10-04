import { useNavigate } from 'react-router-dom';
import DelayedComponent from './DelayedComponent';

const ErrorFallback = () => {
  const navigate = useNavigate();

  return (
    <DelayedComponent>
      <div>
        <span>에러가 발생했습니다.</span>
        <button onClick={() => navigate('/')}>홈으로</button>
      </div>
    </DelayedComponent>
  );
};

export default ErrorFallback;
