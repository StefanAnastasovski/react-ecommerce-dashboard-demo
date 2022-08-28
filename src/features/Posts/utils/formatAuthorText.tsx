export const formatAuthorText = (author: string | undefined) => {
  return author
    ? author.includes(",")
      ? `${author.split(",")[0]}`
      : author
    : null;
};
