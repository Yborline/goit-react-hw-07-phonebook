import RegisterView from "../Components/registerView/registerView";
import s from "./RegisterPage.module.css";
export default function RegisterPage() {
  return (
    <div className={s.container}>
      <h1>Реестрация Аккаунта , введите некобходимые данные</h1>
      <RegisterView />
    </div>
  );
}
