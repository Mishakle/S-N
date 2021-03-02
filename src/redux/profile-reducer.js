const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {
            id: 1,
            post: 'Hi kyky!',
            likeCount: 15
        },
        {
            id: 2,
            post: 'POMOGITE!!!!!!!!',
            likeCount: 20
        },
    ],
    newPostText: 'test',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                post: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer;