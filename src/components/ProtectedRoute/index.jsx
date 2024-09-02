import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "../../context/Auth";

export function ProtectedRoute({ element }) {
  const authContext = useContext(AuthContext);
  
  if (authContext.user) {
    return element;
  }

  return (
    <Navigate to={"/login"} />
  );
}
