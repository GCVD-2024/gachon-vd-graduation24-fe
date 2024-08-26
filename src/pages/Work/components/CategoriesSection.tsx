import { styled } from 'styled-components';
import { CATEGORIES } from '../../../constants/constants';
import { useState } from 'react';

type Category = (typeof CATEGORIES)[number];

const CategoriesSection = () => {
  const [category, setCategory] = useState<Category>('ALL');

  const handleClick = (name: Category) => {
    setCategory(name);
  };

  return (
    <CategoriesWrapper>
      {CATEGORIES.map((item) => (
        <CategoriesItem key={item} onClick={() => handleClick(item)} selected={category === item}>
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

const CategoriesItem = styled.span<{ selected: boolean }>`
  font-size: 40px;
  line-height: 120%;
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : 'white')};

  cursor: pointer;
`;
