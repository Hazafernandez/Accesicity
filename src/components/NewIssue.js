import { useContext, useState } from "react";
import { AuthContext } from "../contexto/AuthContext";
import { sendIssueService } from "../services";

export const NewIssue = ({ addIssue }) => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [image, setImage] = useState(null);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setEnviando(true);

      const data = new FormData(e.target);
      const issue = await sendIssueService({ data, token });
      console.log("data del NewIssue", data);

      addIssue(issue);
      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setEnviando(false);
    }
  };

  return visible ? (
    <form onSubmit={handleForm}>
      <h1> Añade una nueva incidencia</h1>

      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" required />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripción</label>
        <input type="text" id="description" name="description" required />
      </fieldset>
      <fieldset>
        <label htmlFor="city">Ciudad</label>
        <input type="text" id="city" name="city" required />
      </fieldset>
      <fieldset>
        <label htmlFor="hood">Barrio</label>
        <input type="text" id="hood" name="hood" required />
      </fieldset>
      <fieldset>
        <label htmlFor="image">Imagen (Opcional)</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {image ? (
          <figure>
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{ width: "100px" }}
            />
          </figure>
        ) : null}
      </fieldset>

      <button>Enviar Incidencia</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setVisible(false);
        }}
      >
        Cancelar
      </button>
      {enviando ? <p>Enviando incidencia</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  ) : (
    <button onClick={() => setVisible(true)}>Crear incidencia</button>
  );
};
