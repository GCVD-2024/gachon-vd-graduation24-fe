const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const getInstance = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('서버에서 데이터를 받아오는 중 문제가 생겼습니다.');
  }

  return response.json();
};

export function get<T>(...args: Parameters<typeof getInstance>) {
  return getInstance<T>(args[0]);
}
