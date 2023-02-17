import { NavLink } from 'react-router-dom';
import css from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={css.authLinks}>
      <NavLink to="register" className={`${css.link} ${css.linkRegister}`}>
        Register
      </NavLink>
      <NavLink to="login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthMenu;
