export const trimText = (text: string, length: number = 200) => {
  return text && text.length > length ? `${text.substring(0, length)}...` : text;
};
