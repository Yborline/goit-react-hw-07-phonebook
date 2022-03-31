import { useDispatch } from "react-redux";
import { useState } from "react";
import authOpetations from "../../redux/auth/auth-operations";

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
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={handleChange}
            name="userName"
            value={name}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            onChange={handleChange}
            name="userEmail"
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            onChange={handleChange}
            name="userPassword"
            value={password}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
