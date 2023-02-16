import css from './Register.module.css';
const Register = () => {
  return (
    <form className={`${css.form} ${css.block}`}>
      <label className={css.block}>
        Name
        <input className={css.block} type="text" name="name" required></input>
      </label>
      <label className={css.block}>
        E-mail
        <input className={css.block} type="email" name="email" required></input>
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
      <button type="Submit">Register</button>
    </form>
  );
};

export default Register;
