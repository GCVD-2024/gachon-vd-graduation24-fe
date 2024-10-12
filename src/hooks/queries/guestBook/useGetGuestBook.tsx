import { useQuery } from '@tanstack/react-query';
import { get } from '../../../api/api';
import { GUEST_KEYS } from '../../../constants/QueryKey';
import { GuestBookListResponseType } from '../../../types/types';

/**
 *  방명록 리스트 조회
 */

export const getGuestBook = async () => {
  const data = await get<GuestBookListResponseType>(`guestbook`);
  console.log('=====방명록 조회 성공=====', data.result.guestbooks);
  return data.result;
};

export const useGetGuestBookList = () => {
  const QUERY_KEY = GUEST_KEYS.all;

  const { data, isPending, isError, refetch } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => getGuestBook().then((res) => res),
  });

  return { data, isPending, isError, refetch };
};
