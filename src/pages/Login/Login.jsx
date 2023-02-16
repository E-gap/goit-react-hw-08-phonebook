import css from './Login.module.css';
const Login = () => {
  return (
    <form className={`${css.form} ${css.block}`}>
      <label className={css.block}>
        Name
        <input className={css.block} type="text" name="name" required></input>
      </label>
      <label className={css.block}>
        Password
        <input
          className={css.block}
          type="text"
          name="password"
          required
        ></input>
      </label>
      <button type="Submit">Login</button>
    </form>
  );
};

export default Login;
