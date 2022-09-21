import { FC } from "react";
import PostItem from "./PostItem";
import classes from "./posts-grid.module.css";

type PostGridType = {
  posts: any[];
};

const PostGrid: FC<PostGridType> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
