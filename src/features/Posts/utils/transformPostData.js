export const transformPostData = ({ status, articles }) => {
  if (status !== "ok") {
    return;
  }
  return articles.slice(0, 8).map((article) => {
    const {
      author,
      title,
      urlToImage,
      url,
      source: { name: sourceName },
      publishedAt,
    } = article;
    return {
      author,
      title,
      urlToImage,
      url,
      source: sourceName,
      publishedAt,
    };
  });
};
