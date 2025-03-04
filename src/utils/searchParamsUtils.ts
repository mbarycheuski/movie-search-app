export const setOrDeleteSearchParam = (
  params: URLSearchParams,
  key: string,
  value?: string | number
): void => {
  if (value) {
    params.set(key, value.toString());
  } else {
    params.delete(key);
  }
};
