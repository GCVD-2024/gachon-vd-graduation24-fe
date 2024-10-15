import { CATEGORIES } from '../constants/constants';

export type Category = (typeof CATEGORIES)[number];

export interface ResponseType<T = Record<string, object>> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}

export interface guestbooks {
  nickname: string;
  content: string;
  createdAt: string;
}

export type GuestBookListResponseType = ResponseType<{
  guestbooks: guestbooks[];
}>;

export type WorkListRequestType = {
  category: Category;
  currentPage: number;
};

export type WorkListResponseType = ResponseType<{
  currentPage: number;
  totalPage: number;
  totalWorks: number;
  works: WorkListType[];
}>;

export type WorkListType = {
  category: Category;
  studentName: string;
  title: string;
  thumbnailUrl: string;
};

export type WorkDetailRequestType = {
  name: string;
  title: string;
};

export type WorkDetailResponseType = ResponseType<WorkDetailType>;

export type WorkDetailType = {
  studentName: string;
  studentId: string;
  contact: string;
  category: Category;
  title: string;
  subtitle: string;
  description: string;
  detailArtUrl: string;
  thumbnailUrl: string;
  videoUrl: string;
};
