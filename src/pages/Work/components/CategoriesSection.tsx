import { styled } from 'styled-components';
import { Category } from '../../../types/types';
import { CATEGORIES } from '../../../constants/constants';

interface CategoriesSectionProps {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}
const CategoriesSection = ({ category, setCategory }: CategoriesSectionProps) => {
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
