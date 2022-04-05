import { useSelector, useDispatch } from "react-redux";
import authOperation from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { logOut } = authOperation;
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <div className={s.container}>
      <span className={s.span}>
        Добро пожаловать, <span className={s.user}>{userEmail}</span>{" "}
      </span>
      <button
        className={s.button}
        type="click"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
