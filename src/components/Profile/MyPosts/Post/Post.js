import PostClasses from './Post.module.css';

const Post = ({ message, likeCount }) => {
    return (
        <div className={PostClasses.item}>
            <img src='https://images8.alphacoders.com/876/876228.png' />
            {message}
            <div>
                <span>{likeCount} likes</span>
            </div>     
        </div>
    )
}

export default Post;