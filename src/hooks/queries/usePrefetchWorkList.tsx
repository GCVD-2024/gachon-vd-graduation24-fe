import { useQueryClient } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkListResponseType, WorkListType } from '../../types/types';
import { WORK_KEYS } from '../../constants/QueryKey';

export const usePrefetchWorkList = () => {
  const queryClient = useQueryClient();

  const prefetchWorkList = async (category: string, page: number) => {
    await queryClient.prefetchQuery({
      queryKey: WORK_KEYS.prefetchList(category, page),
      queryFn: () => getWorkList(category, page),
    });
  };

  return { prefetchWorkList };
};

const getWorkList = async (category: string, currentPage: number) => {
  const res = await get<WorkListResponseType>(
    `work?category=${category}&currentPage=${currentPage}`
  );
  return res.result.works as WorkListType[];
};
