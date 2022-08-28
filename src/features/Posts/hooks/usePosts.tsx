import { useEffect, useState } from "react";

import { API_BASE_URL, API_KEY } from "../../../data/constants";

import useHttp from "../../../hooks/useHttp";
import { transformPostData } from "../utils/transformPostData";

const usePosts = ({
  props: { searchTitle, pageSize },
}: {
  props: { searchTitle?: string; pageSize?: number | string };
}) => {
  const [posts, setPosts] = useState([]);

  const { isLoading, sendRequest: fetchPosts } = useHttp();

  useEffect(() => {
    const httpRequest = {
      url: `${API_BASE_URL}?q=${searchTitle}&pageSize=${pageSize}&${API_KEY}`,
    };

    fetchPosts(httpRequest, setPosts, transformPostData);
  }, []);

  return { posts, isLoading };
};

export default usePosts;
