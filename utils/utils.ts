import path from "path";
import fs from "fs";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "content", "posts");

export const getPostsData = () => {
  return fs.readdirSync(postsDirectory);
};

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData: any = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsData();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  return allPosts.sort((postA, postB) => (postA?.date > postB?.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}
