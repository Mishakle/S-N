import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ store }) => {
    const state = store.getState();
    const addPostToState = () => {
        const action = addPostActionCreator();
        store.dispatch(action);
    }
    
    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        store.dispatch(action);
    }
    
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPostToState} postsData={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer;