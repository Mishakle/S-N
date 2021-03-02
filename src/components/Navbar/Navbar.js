import { NavLink } from 'react-router-dom';
import navbarClasses from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbarClasses.nav}>
            {/* <div className={`${navbarClasses.item} ${navbarClasses.active}`}> */}
            <div className={navbarClasses.item}>
                <NavLink to='/profile' activeClassName={navbarClasses.activeLink}>Profile</NavLink>
            </div>
            <div className={navbarClasses.item}>
                <NavLink to='/dialogs' activeClassName={navbarClasses.activeLink}>Messages</NavLink>
            </div>
            <div className={navbarClasses.item}>
                <NavLink to='/news' activeClassName={navbarClasses.activeLink}>News</NavLink>
            </div>
            <div className={navbarClasses.item}>
                <NavLink to='/music' activeClassName={navbarClasses.activeLink}>Music</NavLink>
            </div>
            <div className={navbarClasses.item}>
                <NavLink to='/settings' activeClassName={navbarClasses.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;