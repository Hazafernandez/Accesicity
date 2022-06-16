import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexto/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <p className="user-registered">
      El usuario está conectado como {user.username}{" "}
      <button className="user-registered-boton" onClick={() => logout()}>
        Desconectarse
      </button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>{" "}
      </li>
    </ul>
  );
};
