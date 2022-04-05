import Filter from "Components/filter/Filter";
import Form from "Components/form/form";
import ListForm from "Components/listForm/listForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "redux/contact";
import s from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const { fetchContacts } = contactsOperations;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, fetchContacts]);

  return (
    <div className={s.container}>
      <Form />

      <div className={s.containerForm}>
        <Filter />
        <ListForm />
      </div>
    </div>
  );
}
