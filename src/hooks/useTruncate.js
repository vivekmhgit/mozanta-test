export const useTruncate = (text) => {
  if (text.length > 25) {
    text = text.substring(0, 24) + "...";
    return text;
  }
  return text;
};
