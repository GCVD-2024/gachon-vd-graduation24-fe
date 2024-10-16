import styled from 'styled-components';
import { useScroll } from '../../../../hooks/useScroll';
import { useEffect, useState } from 'react';

interface ScrollToTopButtonProps {
  onClick: () => void;
  text: string;
}

function ScrollToTopButton({ onClick, text }: ScrollToTopButtonProps) {
  const { scrollDirection } = useScroll();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (scrollDirection === 'up') {
      setIsVisible(true);
    } else if (scrollDirection === 'down') {
      setIsVisible(false);
    }
  }, [scrollDirection]);

  if (!isVisible) return null;

  return (
    <ButtonWrapper aria-label="Scroll to top" onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
}

export default ScrollToTopButton;

const ButtonWrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: transparent;
  border: 3px solid #00b4db;
  color: #00b4db;
  font-size: 16px;
  font-weight: 900;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s, opacity 0.5s, transform 0.5s;

  &:hover {
    background-color: #00b4db;
    color: #fff;
  }
`;
