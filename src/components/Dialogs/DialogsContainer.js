import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
    const state = store.getState();

    const onSendMessageClick = () => {
        store.dispatch(addPostActionCreator());
    }

    const onNewMessageChange = (body) => {
        store.dispatch(updateNewPostTextActionCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state.dialogsPage} />
    )
    
}

export default DialogsContainer;