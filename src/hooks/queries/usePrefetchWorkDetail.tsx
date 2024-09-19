import { useQueryClient } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkDetailResponseType } from '../../types/types';
import { WORK_KEYS } from '../../constants/QueryKey';

export const usePrefetchWorkDetail = () => {
  const queryClient = useQueryClient();

  const prefetchWorkDetail = async (name: string, title: string) => {
    await queryClient.prefetchQuery({
      queryKey: WORK_KEYS.detail(name, title),
      queryFn: () => get<WorkDetailResponseType>(`work/${name}/${title}`),
    });
  };

  return { prefetchWorkDetail };
};
