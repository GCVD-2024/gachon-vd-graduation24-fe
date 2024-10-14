import { styled } from 'styled-components';
import { Category } from '../../../../types/types';
import { CATEGORIES } from '../../../../constants/constants';
import { useQueryClient } from '@tanstack/react-query';
import { usePrefetchWorkList } from '../../../../hooks/queries/usePrefetchWorkList';
import { WORK_KEYS } from '../../../../constants/QueryKey';

interface MobileCategoriesSectionProps {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}
const MobileCategoriesSection = ({ category, setCategory }: MobileCategoriesSectionProps) => {
  const queryClient = useQueryClient();
  const { prefetchWorkList } = usePrefetchWorkList();

  const handleClick = (name: Category) => {
    queryClient.removeQueries({ queryKey: WORK_KEYS.all });
    prefetchWorkList(category, 1);
    setCategory(name);
  };

  return (
    <MobileCategoriesWrapper>
      {CATEGORIES.map((item) => (
        <CategoriesItem key={item} onClick={() => handleClick(item)} selected={category === item}>
          {item}
        </CategoriesItem>
      ))}
    </MobileCategoriesWrapper>
  );
};

export default MobileCategoriesSection;

const MobileCategoriesWrapper = styled.section`
  min-width: 34.3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0;

  background-color: #121212;
`;

const CategoriesItem = styled.span<{ selected: boolean }>`
  height: 4.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  line-height: 120%;
  font-style: normal;
  font-weight: 900;
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : 'white')};

  cursor: pointer;

  border: 1px solid #fff;

  &:nth-child(2),
  &:nth-child(5) {
    border-left: none;
    border-right: none;
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    border-bottom: none;
  }
`;
