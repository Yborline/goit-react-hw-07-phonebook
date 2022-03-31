// import { NavLink } from "react-router-dom";\
import Navigation from "../Navigation/Navigation";
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "Components/AuthMenu/AuthMenu";
import s from "./AppBar-module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.containerNavigation}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
}
