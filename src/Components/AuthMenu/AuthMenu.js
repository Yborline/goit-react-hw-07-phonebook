import { NavLink } from "react-router-dom";
import s from "./AuthMenu.module.css";

const activeLink = ({ isActive }) => (isActive ? s.active : s.link);
export default function AuthMenu() {
  return (
    <div>
      <NavLink to="/register" className={activeLink}>
        Регистрация
      </NavLink>
      <NavLink to="/login" className={activeLink}>
        Войти
      </NavLink>
    </div>
  );
}
