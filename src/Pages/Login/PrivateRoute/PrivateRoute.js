import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="m-5 d-flex justify-content-center">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  return user.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export default PrivateRoute;
