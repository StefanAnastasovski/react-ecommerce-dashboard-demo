export const transformPostData = ({
  status,
  articles,
}: {
  status: string;
  articles: any;
}) => {
  if (status !== "ok") {
    return;
  }
  return articles.slice(0, 8).map((article: any) => {
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
