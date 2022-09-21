import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./PostHeader";

function PostContents(props:any) {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContents;
