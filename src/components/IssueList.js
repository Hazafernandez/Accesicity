import { Issue } from "./Issue";

export const IssueList = ({ issues, updateIssueStatus }) => {
  return issues.length ? (
    <ul>
      {issues.map((issue) => (
        <li key={issue.id}>
          <Issue issue={issue} updateIssueStatus={updateIssueStatus} />
        </li>
      ))}
    </ul>
  ) : (
    <p> Todavía no hay incidencias...</p>
  );
};
