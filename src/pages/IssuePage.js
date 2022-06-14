import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Issue } from "../components/Issue";
import useIssue from "../hooks/useIssue";

export const IssuePage = () => {
  const { id } = useParams();

  const { issue, loading, error } = useIssue(id);

  if (loading) return <p>Cargando incidencia...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>INCIDENCIA DE ACCESIBILIDAD</h1>
      <Issue issue={issue} />
    </section>
  );
};
