import { useQuery } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkDetailRequestType, WorkDetailResponseType } from '../../types/types';

export const useGetWorkDetail = ({ name, title }: WorkDetailRequestType) => {
  return useQuery<WorkDetailResponseType>({
    queryKey: ['works', name, title],
    queryFn: () => get<WorkDetailResponseType>(`work/${name}/${title}`),
  });
};
