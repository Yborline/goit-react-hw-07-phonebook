import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./Navigation.module.css";

const activeLink = ({ isActive }) => (isActive ? s.active : s.link);

export default function Navigation() {
  const { getIsLoggedIn } = authSelectors;
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={activeLink}>
        Главная{" "}
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={activeLink}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
}
