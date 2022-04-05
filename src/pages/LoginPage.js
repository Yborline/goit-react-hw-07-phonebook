import LoginView from "../Components/LoginView/LoginView";
import s from "./LoginPage.module.css";

export default function LoginPages() {
  return (
    <div className={s.container}>
      <h1>Введите ваши данные</h1>
      <LoginView />
    </div>
  );
}
