import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/auth-operations";
import s from "./LoginView.module.css";

export default function LoginView() {
  const { logIn } = authOperation;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeLogin = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.containerDiv}>
      <form
        className={s.container}
        autoComplete="off"
        onSubmit={handleSubmitLogin}
      >
        <label className={s.label}>
          Email
          <input
            className={s.input}
            onChange={onChangeLogin}
            name="email"
            type="email"
            value={email}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            onChange={onChangeLogin}
            name="password"
            type="password"
            value={password}
          />
        </label>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}
