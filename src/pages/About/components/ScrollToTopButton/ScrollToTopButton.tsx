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

  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
}

export default ScrollToTopButton;

const ButtonWrapper = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 160px;
  height: 160px;
  background-color: #e44227;
  color: #fff;
  font-size: 36px;
  font-weight: 900;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s, opacity 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1.05) translateY(-5px);
  }
`;
