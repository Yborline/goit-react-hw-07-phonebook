import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/auth-operations";

export default function LoginView() {
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
    dispatch(authOperation.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmitLogin}>
        <label>
          Email
          <input
            onChange={onChangeLogin}
            name="email"
            type="email"
            value={email}
          />
        </label>

        <label>
          Password
          <input
            onChange={onChangeLogin}
            name="password"
            type="password"
            value={password}
          />
        </label>
        <button type="submit">LogIn</button>
      </form>
    </>
  );
}
