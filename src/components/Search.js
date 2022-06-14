import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexto/AuthContext";
import { getCitiesService, getHoodsByCityService } from "../services";

export const Search = () => {
  //const { user, token } = useContext(AuthContext);
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

  /* FUNCION QUE DEBE FUNCIONAR PARA PASAR A FORMULARIO */
  return (
    <section>
      <form>
        <fieldset>
          <legend>Búsqueda</legend>
          <label>Seleccione una ciudad: </label>
          <select
            name="citiesgroup"
            id="citiesgroup"
            onChange={(e) => setCity(e.target.value)}
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
              <label>Seleccione un barrio: </label>
              <select name="hoodsgroup" id="hoodsgroup">
                <optgroup>
                  {hoods.map((hood) => (
                    <option>{hood}</option>
                  ))}
                </optgroup>
              </select>
            </>
          ) : null}
          <button type="submit">Filtrar</button>
        </fieldset>
      </form>
      {error ? <p>{error}</p> : null}
    </section>
  );
};
