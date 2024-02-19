import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export const Navbar = () => {
  const { loginOff } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    loginOff();
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <>
      <nav>
        <div>
          <NavLink to="/patagonia">Patagonia</NavLink>
          <NavLink to="/northwest">North West</NavLink>
          <NavLink to="/trip">My trip</NavLink>
        </div>

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </nav>
    </>
  );
};
