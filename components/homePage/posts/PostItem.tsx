import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import classes from "./post-item.module.css";

type PostItemProps = {
  post: {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
  };
};

const PostItem: FC<any> = ({ post }) => {
  const { date, excerpt, image, slug, title } = post;
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
