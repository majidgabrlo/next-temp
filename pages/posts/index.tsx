import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../utils/utils";

function index(props:any) {
  return <AllPosts posts={props.posts} />;
}

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    }
  };
};

export default index;
