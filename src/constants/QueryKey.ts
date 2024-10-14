const WORK_KEYS = {
  all: ['works'] as const,
  lists: () => [...WORK_KEYS.all, 'list'] as const,
  list: (category: string, currentPage: number) =>
    [...WORK_KEYS.lists(), 'infinite', category, currentPage] as const,
  prefetchList: (category: string, currentPage: number) =>
    [...WORK_KEYS.lists(), 'prefetch', category, currentPage] as const,
  details: () => [...WORK_KEYS.all, 'detail'] as const,
  detail: (name: string, title: string) => [...WORK_KEYS.details(), name, title] as const,
};

export { WORK_KEYS };
