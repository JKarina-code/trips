import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const Login = () => {
  const { getLogin, refer, setRefer } = useContext(AuthContext);
  const navigation = useNavigate();

  const login = () => {
    if (refer === "") return;
    getLogin("Karina");
    navigation("/", { replace: true });
  };

  const register = (e) => {
    setRefer(e.target.value);
  };
  return (
    <>
      <section className="login">
        <label htmlFor="refer"> User: </label>

        <input
          type="text"
          id="refer"
          onChange={register}
          placeholder="Add  your user"
          className="input-login"
          autoFocus={true}
          autoComplete="off"
        />

        <button className="btnLogin" onClick={login}>
          Login
        </button>
      </section>
    </>
  );
};
