import messageClasses from './Message.module.css';

const Message = ({ message }) => {
    return (
        <div className={messageClasses.message}>{message}</div>
    )
}

export default Message;