import css from './UserMenu.module.css';

const UserMenu = () => {
  const handleClick = () => {
    console.log('dfdff');
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
