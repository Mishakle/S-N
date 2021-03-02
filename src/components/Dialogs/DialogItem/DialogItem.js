import dialogItemClasses from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ userName, id }) => {
    const path = '/dialogs/' + id;
    return (
        <div>
            <div className={dialogItemClasses.dialog}>
                    <NavLink to={path}>{userName}</NavLink>
                </div>
        </div>
    )
}

export default DialogItem;