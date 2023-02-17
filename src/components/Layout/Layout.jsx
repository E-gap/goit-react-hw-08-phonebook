import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';

const Layout = () => {
  return (
    <div>
      <ul className={css.linkList}>
        <li>
          <NavLink to="contacts" className={`${css.link} ${css.linkContacts}`}>
            Contacts
          </NavLink>
        </li>
        <li>
          <AuthMenu />
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;
