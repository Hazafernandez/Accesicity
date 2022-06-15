import { useContext } from "react";
import { AuthContext } from "../contexto/AuthContext";
import useIssues from "../hooks/useIssues";
import { ErrorMessage } from "./ErrorMessage";
import { IssueList } from "./IssueList";
import { NewIssue } from "./NewIssue";

export const FilteredIssues = ({ city, hood }) => {
  const { issues, loading, error, addIssue, updateIssueStatus } = useIssues({
    city,
    hood,
  });

  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando incidencias...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      {user ? <NewIssue addIssue={addIssue} /> : null}
      <IssueList issues={issues} updateIssueStatus={updateIssueStatus} />;
    </>
  );
};
