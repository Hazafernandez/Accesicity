import { useEffect, useState } from "react";
import { getAllIssuesService } from "../services";

const useIssues = ({ city, hood }) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadIssues = async () => {
      try {
        setLoading(true);

        const data = await getAllIssuesService({ city, hood });

        setIssues(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadIssues();
  }, [city, hood]);

  const addIssue = (issue) => {
    setIssues([issue, ...issues]);
  };

  const updateIssueStatus = (id, data) => {
    setIssues(
      issues.map((i) => {
        if (i.id === id) return data;
        return i;
      })
    );
  };

  return { issues, loading, error, addIssue, updateIssueStatus };
};

export default useIssues;
