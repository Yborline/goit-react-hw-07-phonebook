import { useSelector, useDispatch } from "react-redux";
import authOperation from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <div>
      <span> Добро пожаловать, {userEmail} </span>
      <button type="click" onClick={() => dispatch(authOperation.logOut())}>
        Logout
      </button>
    </div>
  );
}
