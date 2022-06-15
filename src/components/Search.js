import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexto/AuthContext";
import { getCitiesService, getHoodsByCityService } from "../services";

export const Search = ({ setFilterCity, setFilterHood }) => {
  const { user } = useContext(AuthContext);
  const [cities, setCities] = useState(null);
  const [hoods, setHoods] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCities = async () => {
      try {
        const cities = await getCitiesService();
        setCities(cities);
      } catch (error) {
        setError(error.message);
      }
    };

    loadCities();
  }, []);

  useEffect(() => {
    const loadHoods = async () => {
      try {
        const hoods = await getHoodsByCityService(city);
        setHoods(hoods);
      } catch (error) {
        setError(error.message);
      }
    };

    if (city) {
      loadHoods();
    } else {
      setHoods(null);
    }
  }, [city]);

  //funcion para filtrar:

  const handleForm = (e) => {
    e.preventDefault();

    const filter = new FormData(e.target);
    const city = filter.get("citiesgroup");
    const hood = filter.get("hoodsgroup");

    setFilterCity(city);
    setFilterHood(hood);
  };

  return (
    <article>
      {user ? (
        <section>
          <form onSubmit={handleForm}>
            <fieldset>
              <legend>Búsqueda</legend>
              <label>Seleccione una ciudad: </label>
              <select
                name="citiesgroup"
                id="citiesgroup"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                {cities ? (
                  <optgroup>
                    <option value={""}>Selecciona...</option>
                    {cities.map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                  </optgroup>
                ) : null}
              </select>
              {hoods ? (
                <>
                  <label>Selecciona un barrio: </label>
                  <select name="hoodsgroup" id="hoodsgroup">
                    <optgroup>
                      <option value={""}>Todos los barrios</option>
                      {hoods.map((hood) => (
                        <option key={hood}>{hood}</option>
                      ))}
                    </optgroup>
                  </select>
                </>
              ) : null}
              {city ? <button type="submit">Filtrar</button> : null}
            </fieldset>
          </form>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
