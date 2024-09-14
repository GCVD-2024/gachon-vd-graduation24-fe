import { styled } from 'styled-components';
import { Category } from '../../../types/types';
import { CATEGORIES } from '../../../constants/constants';
import { useQueryClient } from '@tanstack/react-query';

interface CategoriesSectionProps {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}
const CategoriesSection = ({ category, setCategory }: CategoriesSectionProps) => {
  const queryClient = useQueryClient();

  const handleClick = (name: Category) => {
    queryClient.removeQueries({ queryKey: ['works'] });
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
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 60px;
`;

const CategoriesItem = styled.span<{ selected: boolean }>`
  font-size: 40px;
  line-height: 120%;
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : 'white')};

  cursor: pointer;
`;
1920;
