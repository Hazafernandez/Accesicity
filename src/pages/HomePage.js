import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { IssueList } from "../components/IssueList";
import { NewIssue } from "../components/NewIssue";
import { Search } from "../components/Search";
import { AuthContext } from "../contexto/AuthContext";
import useIssues from "../hooks/useIssues";

export const Homepage = () => {
  const { issues, loading, error, addIssue, updateIssueStatus } = useIssues();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="prueba">
      <h2>PROBLEMAS DE ACCESIBILIDAD REGISTRADOS</h2>

      {/* Search City */}
      <Search />
      {/*      <ListHood /> */}

      {user ? <NewIssue addIssue={addIssue} /> : null}

      <IssueList issues={issues} updateIssueStatus={updateIssueStatus} />
    </section>
  );
};
