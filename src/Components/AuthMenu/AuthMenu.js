import { NavLink } from "react-router-dom";

export default function AuthMenu() {
  return (
    <div>
      <NavLink to="/register">Регистрация</NavLink>
      <NavLink to="/login">Войти</NavLink>
    </div>
  );
}
