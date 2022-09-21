import FeaturedPosts from "../components/homePage/FeaturedPosts";
import Hero from "../components/homePage/Hero";
import { getFeaturedPosts } from "../utils/utils";

export default function Home(props: any) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
