import { useDispatch } from "react-redux";
import { useState } from "react";
import authOpetations from "../../redux/auth/auth-operations";
import s from "./RegisterView.module.css";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "userName":
        return setName(value);
      case "userEmail":
        return setEmail(value);
      case "userPassword":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOpetations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.containerDiv}>
      <form className={s.container} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            onChange={handleChange}
            name="userName"
            value={name}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            onChange={handleChange}
            name="userEmail"
            value={email}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            onChange={handleChange}
            name="userPassword"
            value={password}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
