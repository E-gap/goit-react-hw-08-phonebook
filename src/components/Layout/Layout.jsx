import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu/UserMenu';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/selectors';

const Layout = () => {
  const isLogin  = useSelector(selectIsLogin);
  return (
    <div>
      {isLogin && (
        <div className={`${css.linkLogin} ${css.linkLayout}`}>
          <NavLink to="contacts" className={`${css.link} ${css.linkContacts}`}>
            Contacts
          </NavLink>
          <UserMenu />
        </div>
      )}
      {!isLogin && (
        <div className={`${css.linkNotLogin} ${css.linkLayout}`}>
          <AuthMenu />
        </div>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
