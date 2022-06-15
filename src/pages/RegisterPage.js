import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    //setError("");

    if (pass1 !== pass2) {
      setError("Las Password no son iguales");
      return;
    }

    try {
      await registerUserService({ username, email, password: pass1 });

      navigate("/login");
    } catch (error) {
      console.log(error); // pq con solo error sí vemos el error en consola pero error.message no aparece nada??? Ojo( en postman pone error:error no status:error)
      setError(error.messsage);
    }
  };

  return (
    <section className="register">
      <h1 className="register">Registrar</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label className="username" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass1">Contraseña</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass2">Repetir contraseña</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>

        <button>Registrar</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
