export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);

  return formattedDate.replace(/,/g, '');
};
