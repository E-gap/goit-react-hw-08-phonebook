import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
