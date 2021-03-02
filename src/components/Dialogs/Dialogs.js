import React from 'react';
import dialogsClasses from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ updateNewMessageBody, sendMessage, dialogsPage }) => {
    const dialogsData = dialogsPage.dialogs;
    const messagesData = dialogsPage.messages;
    const newDialogText = dialogsPage.newDialogText;
    const dialogsElements = dialogsData
        .map(dialog => <DialogItem userName={dialog.name} id={dialog.id} />);

    const messagesElements = messagesData
        .map(message => <Message message={message.message} />);

    const sendMessageButton = React.createRef();

    const addMessageToState = () => {
        sendMessage();
    }

    const onMessageChange = (e) => {
        const text = e.target.value;
        updateNewMessageBody(text);
    }

    return (
        <div className={dialogsClasses.dialogs}>
            <div className={dialogsClasses.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsClasses.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder='Write a message...' onChange={onMessageChange} ref={sendMessageButton} value={newDialogText} />
                </div>
                <div>
                    <button onClick={addMessageToState}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;