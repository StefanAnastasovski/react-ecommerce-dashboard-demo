import React from "react";

interface PostDetailType {
  author: string;
  title: string | undefined;
  urlToImage?: string;
  url?: string;
  source?: string;
  publishedAt?: string;
}

interface PostType {
  postDetails: PostDetailType;
}

export default PostType;
