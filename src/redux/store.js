import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    post: 'Hi kyky!',
                    likeCount: 15
                },
                {
                    id: 2,
                    post: 'It is my first post',
                    likeCount: 20
                },
            ],
            newPostText: 'test for post',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'V-tune'
                },
                {
                    id: 2,
                    name: 'Pudge'
                },
                {
                    id: 3,
                    name: 'Grinch'
                },
                {
                    id: 4,
                    name: 'Abama'
                },
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Dispetcher, my padaem'
                },
                {
                    id: 3,
                    message: 'Kavo!!!???'
                },
            ],
            newDialogText: '',
        }
    },
    _rerenderEntireTree() {
        console.log('.');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    }
}

export default store;