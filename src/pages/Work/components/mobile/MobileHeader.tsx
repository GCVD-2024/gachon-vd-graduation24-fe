import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Category } from '../../../../types/types';
import MobileCategoriesSection from './MobileCategoriesSection';

interface MobileHeaderProps {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

const MobileHeader = ({ category, setCategory }: MobileHeaderProps) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <StyledHeader show={showHeader}>
      <MobileCategoriesSection category={category} setCategory={setCategory} />
    </StyledHeader>
  );
};

export default MobileHeader;

const StyledHeader = styled.header<{ show: boolean }>`
  width: 34.3rem;
  position: fixed;
  top: ${({ show }) => (show ? '8.4rem' : '-9rem')};
  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.1s ease-in-out;
`;
