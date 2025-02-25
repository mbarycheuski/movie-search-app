export const trimText = (text: string, length: number = 200) => {
  if (!text) {
    return text;
  }

  return text.length > length ? `${text.substring(0, length)}...` : text;
};
