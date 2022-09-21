import Head from "next/head";
import PostContents from "../../components/posts/postDetail/PostContents";
import { getPostData, getPostsData } from "../../utils/utils";

function SinglePost(props: any) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <PostContents post={props.post} />
    </>
  );
}

export const getStaticProps = (context: any) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 700,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsData();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default SinglePost;
