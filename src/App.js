// import ContactsPage from "./pages/ContactsPage";
// import { LoginPages } from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import { Home } from "./pages/Home";
import Container from "Components/Container/Container";
import AppBar from "Components/AppBar/AppBar.js";
import PrivateRoute from "Components/PrivateRoute";
import PablicRoute from "Components/PablicRoute";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "./redux/auth/auth-operations";
import { useSelector, useDispatch } from "react-redux";
import { Suspense, useEffect, lazy } from "react";
import { getLoading, getError } from "./redux/contact/contacts-selectors";
import toast from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
// import s from "./App.module.css";
// import hooks from "./hooks/appHooks";

export default function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrentUser);
  console.log(isFetchingCurrent);
  const dispatch = useDispatch();

  const Home = lazy(() => import("./pages/Home"));
  const RegisterPage = lazy(() => import("./pages/RegisterPage"));
  const LoginPages = lazy(() => import("./pages/LoginPage"));
  const ContactsPage = lazy(() => import("./pages/ContactsPage"));

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(), [dispatch]);
  });

  if (error) {
    return toast.error("Oops!...Something went wrong");
  }

  return (
    // className={s.containerForm}
    <Container>
      <AppBar />
      <Suspense fallback={<p>LOADING...</p>}>
        <Routes>
          <Route path="/" element={<PablicRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<PablicRoute restricted />}>
            <Route path="/login" element={<LoginPages />} />
          </Route>

          <Route path="/register" element={<PablicRoute restricted />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" />}
          >
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          {/* <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          /> */}

          {/* <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute> */}

          <Route path="*" element={<Navigate to="/" />} />
          {/* </Route> */}
        </Routes>
      </Suspense>

      {/* <div> {loading ? <h1>LOADING ...</h1> : <Filter />}</div> */}

      {/* <ListForm /> */}
    </Container>
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

// <Routes>
//   <Route path="/" element={<AppBar />} />
//   <Route path="home" element={<Home />} />
//   <Route path="login" element={<LoginPages />} />
//   <Route path="register" element={<RegisterPage />} />

//   <Route path="contacts" element={<ContactsPage />} />
//   <Route path="*" element={<Navigate to="/register" />} />
//   {/* </Route> */}
// </Routes>;
