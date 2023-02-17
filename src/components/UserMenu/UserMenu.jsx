import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const { name } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={css.usermenu}>
      <p className={css.name}>Welcome, {name}</p>
      <button className={css.button} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
