import { useMutation } from '@tanstack/react-query';
import { post } from '../../../api/api';

export interface IGuestBookData {
  nickname: string;
  content: string;
}

/**
 *  방명록 전송
 */

export const postGuestBook = async (data: IGuestBookData) => {
  const res = await post(`guestbook`, data);
  return res;
};

export const usePostGuestBook = () => {
  const GuestBookMutation = useMutation({
    mutationFn: (data: IGuestBookData) => postGuestBook(data),
  });

  return { GuestBookMutation };
};
