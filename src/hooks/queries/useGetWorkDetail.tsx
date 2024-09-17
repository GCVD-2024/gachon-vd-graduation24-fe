import { useQuery } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkDetailRequestType, WorkDetailResponseType } from '../../types/types';
import { WORK_KEYS } from '../../constants/QueryKey';

export const useGetWorkDetail = ({ name, title }: WorkDetailRequestType) => {
  return useQuery<WorkDetailResponseType>({
    queryKey: WORK_KEYS.detail(name, title),
    queryFn: () => get<WorkDetailResponseType>(`work/${name}/${title}`),
  });
};
