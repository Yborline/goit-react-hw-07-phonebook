// import { useState, useEffect } from "react";
// import "./App.css";
// import { nanoid } from "nanoid";
import ListForm from "./Components/listForm/listForm.js";
import Form from "./Components/form/form.js";
import Filter from "./Components/filter/Filter.js";
import { contactsOperations } from "./redux/contact";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoading, getError } from "./redux/contact/contacts-selectors";
import toast, { Toaster } from "react-hot-toast";
import s from "./App.module.css";
// import hooks from "./hooks/appHooks";

export default function App() {
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  if (error) {
    return toast.error("Oops!...Something went wrong");
  }

  return (
    <div className={s.containerForm}>
      <div>
        <Form />

        <div> {loading ? <h1>LOADING ...</h1> : <Filter />}</div>
      </div>
      <ListForm />
    </div>
  );
}

// const [contacts, setContacts] = hooks.useLocalStorage("phonebook", []);
// const [filter, setFilter] = useState("");

// useEffect(() => {
//   window.localStorage.setItem("phonebook", JSON.stringify(contacts));
// }, [contacts]);

// const formSubmitHandler = (data) => {
//   data.id = nanoid();
// contacts.find((contact) =>contact.name.toLocaleLowerCase()
// === data.name.toLocaleLowerCase() )
//     ? alert("Такое имя уже занято")
//     : setContacts( [...contacts, data] , contacts);
// };
// const changeFilter = (event) => {
//   setFilter(event.currentTarget.value);
// };

// const findContact = () => {
//   const normalizedFilter = filter.toLocaleLowerCase();
//   if (filter.length) {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   } else {
//     return contacts;
//   }
// };

// onSubmit={formSubmitHandler} valueForm={contacts}
// LIST onContacts={findContact} onDelete={deletedContact}
// valueFilter={filter} onChange={changeFilter}

// const deletedContact = (contactId) => {
//   setContacts(contacts.filter((contact) => contact.id !== contactId));
// };
