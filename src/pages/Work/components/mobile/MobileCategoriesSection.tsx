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
  position: fixed;
  width: 34.3rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
`;

const CategoriesItem = styled.span<{ selected: boolean }>`
  width: 11.4rem;
  height: 4.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.primary};
  font-size: 20px;
  line-height: 120%;
  font-style: normal;
  font-weight: 900;
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : 'white')};

  border: 1px solid #fff;
  /* box-sizing: border-box; */
  /* margin: 0 -1px; */
  cursor: pointer;
`;
