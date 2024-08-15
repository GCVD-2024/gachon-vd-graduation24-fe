import { styled } from 'styled-components';
import { CATEGORIES } from '../../../constants/constants';
import { useState } from 'react';

const CategoriesSection = () => {
  const [category, setCategory] = useState('ALL');

  const handleClick = (name: string) => {
    setCategory(name);
  };

  return (
    <CategoriesWrapper>
      {CATEGORIES.map((item) => (
        <CategoriesItem onClick={() => handleClick(item)} chosen={category === item}>
          {item}
        </CategoriesItem>
      ))}
    </CategoriesWrapper>
  );
};

export default CategoriesSection;

const CategoriesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
`;

const CategoriesItem = styled.span<{ chosen: boolean }>`
  font-size: 40px;
  line-height: 120%;
  color: ${({ theme, chosen }) => (chosen ? theme.colors.primary : 'white')};

  cursor: pointer;
`;
