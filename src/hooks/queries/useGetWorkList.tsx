import { useInfiniteQuery } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkListRequestType, WorkListResponseType, WorkListType } from '../../types/types';

export const useGetWorkList = ({ category, currentPage }: WorkListRequestType) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['works', category, currentPage],
    queryFn: ({ pageParam = currentPage }) => getWorkList(category, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : null;
    },
    initialPageParam: 1,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page),
      pageParams: data.pageParams,
    }),
  });

  return { data, hasNextPage, fetchNextPage, isFetchingNextPage };
};

const getWorkList = async (category: string, currentPage: number) => {
  const res = await get<WorkListResponseType>(
    `work?category=${category}&currentPage=${currentPage}`
  );
  return res.result.works as WorkListType[];
};
