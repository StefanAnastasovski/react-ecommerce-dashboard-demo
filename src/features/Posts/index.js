import React from "react";
import usePosts from "./hooks/usePosts";

import Post from "./components/Post";
import GridContainer from "../../components/Grid/GridContainer";

const Posts = () => {
  const { posts } = usePosts({
    props: { searchTitle: "bitcoin", pageSize: 8 },
  });

  let content = posts.map((post) => {
    return <Post key={post.title} postDetails={post} />;
  });

  return (
    <GridContainer direction={"row"} sx={{ marginTop: 2 }} spacing={2.5}>
      {content}
    </GridContainer>
  );
};

export default Posts;
