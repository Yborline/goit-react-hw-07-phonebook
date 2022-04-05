// import ContactsPage from "./pages/ContactsPage";
// import { LoginPages } from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import { Home } from "./pages/Home";
import Container from "Components/Container/Container";
import MenuAppBar from "Components/AppBar/AppBar.js";
import PrivateRoute from "Components/PrivateRoute";
import PablicRoute from "Components/PablicRoute";
import authSelectors from "redux/auth/auth-selectors";
import authOperations from "./redux/auth/auth-operations";
import { useSelector, useDispatch } from "react-redux";
import { Suspense, useEffect, lazy } from "react";
import { getLoading, getError } from "./redux/contact/contacts-selectors";
import toast from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "Components/AppBar/AppBar.js";
import PropagateLoader from "react-spinners/PropagateLoader";
import s from "./App.module.css";
// import hooks from "./hooks/appHooks";

export default function App() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  const dispatch = useDispatch();

  const Home = lazy(() => import("./pages/Home"));
  const RegisterPage = lazy(() => import("./pages/RegisterPage"));
  const LoginPages = lazy(() => import("./pages/LoginPage"));
  const ContactsPage = lazy(() => import("./pages/ContactsPage"));

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser(), [dispatch]);
  // });

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  if (error) {
    return toast.error("Oops!...Something went wrong");
  }
  console.log(isFetchingCurrentUser);
  return (
    // className={s.containerForm}
    <Container>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense
            fallback={
              <p className={s.loader}>
                <PropagateLoader
                  color={"#2962ff"}
                  // loading={loading}
                  // css={override}
                  size={10}
                />
              </p>
            }
          >
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
              <Route path="/contacts" element={<PrivateRoute />}>
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
            </Routes>
          </Suspense>
        </>
      )}
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
