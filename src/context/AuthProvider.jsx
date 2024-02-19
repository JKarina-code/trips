import { useState } from "react";
import { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "../reducers/authReducer";
import agreeReducer from "../reducers/agreeReducer";
import types from "../reducers/types";

const init = () => {
  const user = localStorage.getItem("value");
  return {
    logged: !!user,
    user: user,
  };
};

const initAgree = [];
const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, init);
  const [agreement, dispatchAgree] = useReducer(agreeReducer, initAgree);
  const [refer, setRefer] = useState("");
  const [total, setTotal] = useState(0);
  const getLogin = (user) => {
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("value", user);
    dispatch(action);
  };

  const loginOff = () => {
    const action = {
      type: types.logout,
      payload: null,
    };
    localStorage.removeItem("value");
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...auth,
        getLogin,
        loginOff,
        agreement,
        dispatchAgree,
        refer,
        setRefer,
        total,
        setTotal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
