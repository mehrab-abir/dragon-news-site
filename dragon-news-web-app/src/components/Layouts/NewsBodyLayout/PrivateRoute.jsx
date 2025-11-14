import React, { use } from "react";
import { AuthContext } from "../../../Authentication/AuthContext";
import { Navigate, useLocation } from "react-router";
import { Loader } from "../../Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Loader></Loader>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/auth" state={location.pathname}></Navigate>;
  }
};

export default PrivateRoute;
