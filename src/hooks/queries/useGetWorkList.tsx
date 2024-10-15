import { useInfiniteQuery } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkListRequestType, WorkListResponseType, WorkListType } from '../../types/types';
import { WORK_KEYS } from '../../constants/QueryKey';

const getWorkList = async (category: string, currentPage: number) => {
  const mappedCategory = (() => {
    switch (category) {
      case 'ILLUST':
        return 'ILLUSTRATION';
      case 'UX':
        return 'UXUI';
      case 'BRAND':
        return 'BX';
      default:
        return category;
    }
  })();

  const res = await get<WorkListResponseType>(
    `work?category=${mappedCategory}&currentPage=${currentPage}`
  );
  console.log('API Response:', res);
  return res.result.works as WorkListType[];
};

export const useGetWorkList = ({ category, currentPage }: WorkListRequestType) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: WORK_KEYS.list(category, currentPage),
    queryFn: ({ pageParam = currentPage }) => getWorkList(category, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage && Array.isArray(lastPage) && lastPage?.length === 10) {
        return allPages?.length ? allPages.length + 1 : 1;
      }
      return null;
    },
    initialPageParam: 1,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page) || [],
      pageParams: data?.pageParams || [],
    }),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { data, hasNextPage, fetchNextPage, isFetchingNextPage };
};
