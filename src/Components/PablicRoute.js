import authSelectors from "../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PablicRoute({
  restricted = false,
  redirectTo = "/contacts",
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shoulRedirect = isLoggedIn && restricted;
  return shoulRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
