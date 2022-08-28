export const formatTitleText = (title?: string) => {
  return title && title.length > 50 ? `${title.substring(0, 50)}...` : title;
};
