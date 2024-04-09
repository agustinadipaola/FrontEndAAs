import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PrivateRoute(props) {
  const [jwt, setJwt] = useState("", "jwt");
  return jwt ? props : <Navigate to="/login" />;
}

export default PrivateRoute;
