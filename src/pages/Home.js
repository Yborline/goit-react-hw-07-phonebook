import s from "./Home.module.css";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selectors";

export default function Home() {
  const name = useSelector(authSelectors.getUserName);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.container}>
      <h1 className={s.h1}>
        Welcome {isLoggedIn ? `${name} =)` : "my friend !"}
      </h1>
      <h2 className={s.text}>
        Create your personal contact database with a handy search feature
      </h2>
    </div>
  );
}
