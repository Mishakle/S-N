import React from 'react';
import myPostsClasses from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData, addPost, updateNewPostText, newPostText }) => {
    const postsElements = postsData
        .map(post => <Post message={post.post} likeCount={post.likeCount} />);

    const newPostElement = React.createRef();

    const onAddPost = () => {
        addPost();
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={myPostsClasses.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={myPostsClasses.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;