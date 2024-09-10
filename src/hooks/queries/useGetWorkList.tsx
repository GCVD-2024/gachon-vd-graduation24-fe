import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkListRequestType, WorkListResponseType } from '../../types/types';

export const useGetWorkList = ({ category, currentPage }: WorkListRequestType) => {
  return useSuspenseQuery<WorkListResponseType>({
    queryKey: ['works', category, currentPage],
    queryFn: () =>
      get<WorkListResponseType>(`work?category=${category}&currentPage=${currentPage}`),
  });
};
