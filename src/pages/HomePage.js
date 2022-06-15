import { useContext, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { FilteredIssues } from "../components/FilteredIssues";
import { IssueList } from "../components/IssueList";
import { NewIssue } from "../components/NewIssue";
import { Search } from "../components/Search";
import { AuthContext } from "../contexto/AuthContext";
import useIssues from "../hooks/useIssues";

export const Homepage = () => {
  const [city, setCity] = useState("");
  const [hood, setHood] = useState("");

  return (
    <section className="prueba">
      <h2>PROBLEMAS DE ACCESIBILIDAD REGISTRADOS</h2>

      <Search setFilterCity={setCity} setFilterHood={setHood} />

      <FilteredIssues city={city} hood={hood} />
    </section>
  );
};
