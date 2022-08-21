export const formatTitleText = (title) => {
  return title.length > 50 ? `${title.substring(0, 50)}...` : title;
};
