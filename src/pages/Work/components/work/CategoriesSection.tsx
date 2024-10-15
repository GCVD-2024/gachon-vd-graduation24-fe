import { styled } from 'styled-components';
import { Category } from '../../../../types/types';
import { CATEGORIES } from '../../../../constants/constants';
import { useQueryClient } from '@tanstack/react-query';
import { usePrefetchWorkList } from '../../../../hooks/queries/usePrefetchWorkList';
import { WORK_KEYS } from '../../../../constants/QueryKey';

interface CategoriesSectionProps {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}
const CategoriesSection = ({ category, setCategory }: CategoriesSectionProps) => {
  const queryClient = useQueryClient();
  const { prefetchWorkList } = usePrefetchWorkList();

  const handleClick = (name: Category) => {
    queryClient.removeQueries({ queryKey: WORK_KEYS.all });
    prefetchWorkList(category, 1);
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
  width: 13rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 60px;
`;

const CategoriesItem = styled.span<{ selected: boolean }>`
  ${({ theme }) => theme.fonts.primaryBlue};
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  color: ${({ theme, selected }) => (selected ? theme.colors.primaryBlue : 'white')};

  cursor: pointer;
`;
