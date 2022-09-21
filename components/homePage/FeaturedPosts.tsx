import classes from './featured-posts.module.css';
import PostGrid from './posts/PostGrid';
function FeaturedPosts(props:any) {
    return (
        <section className={classes.latest}>
            <h2>Featured Post</h2>
            <PostGrid posts={props.posts} />
        </section>
    )
}

export default FeaturedPosts
