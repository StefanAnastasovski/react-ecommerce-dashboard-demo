export const formatAuthorText = (author) => {
  return author ? (author.includes(",") ? `${author.split(",")[0]}` : author) : null;
}
