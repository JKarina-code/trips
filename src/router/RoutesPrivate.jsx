import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const RoutesPrivate = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return logged ? children : <Navigate to="/login" />;
};

export default RoutesPrivate;
