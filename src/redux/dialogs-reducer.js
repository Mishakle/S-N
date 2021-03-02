const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'V-tune'
        },
        {
            id: 2,
            name: 'Punge'
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
            message: 'Hlep'
        },
        {
            id: 3,
            message: 'Kavo!!!???'
        },
    ],
    newDialogText: 'test',
}

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newDialogText
            };
            state.messages.push(newMessage);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newDialogText = action.text;
            return state
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})

export default dialogsReducer;