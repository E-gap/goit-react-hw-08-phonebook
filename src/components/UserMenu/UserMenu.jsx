import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={css.usermenu}>
      <p className={css.name}>mango@mail.com</p>
      <button className={css.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
