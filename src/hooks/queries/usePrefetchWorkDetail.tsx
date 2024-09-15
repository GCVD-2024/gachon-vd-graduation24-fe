import { useQueryClient } from '@tanstack/react-query';
import { get } from '../../api/api';
import { WorkDetailResponseType } from '../../types/types';

export const usePrefetchWorkDetail = () => {
  const queryClient = useQueryClient();

  const prefetchWorkDetail = async (name: string, title: string) => {
    await queryClient.prefetchQuery({
      queryKey: ['works', name, title],
      queryFn: () => get<WorkDetailResponseType>(`work/${name}/${title}`),
    });
  };

  return { prefetchWorkDetail };
};
