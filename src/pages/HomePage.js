import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { IssueList } from "../components/IssueList";
import { NewIssue } from "../components/NewIssue";
import { AuthContext } from "../contexto/AuthContext";
import useIssues from "../hooks/useIssues";

export const Homepage = () => {
  const { issues, loading, error, addIssue } = useIssues();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NewIssue addIssue={addIssue} /> : null}
      <h1>INCIDENCIAS</h1>

      <IssueList issues={issues} />
    </section>
  );
};
