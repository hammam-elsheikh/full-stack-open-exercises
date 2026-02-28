import { useState } from "react";
import "./App.css";
import countriesServices from "./services/countries";
import Country from "./components/Country";

function App() {
  // store either an array of matching country objects or a status message string
  const [matches, setMatches] = useState([]);

  const search = (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      setMatches([]);
      return;
    }

    countriesServices.getAll().then((data) => {
      // find objects whose common name includes the query
      const filtered = data.filter((country) =>
        country.name.common.toLowerCase().includes(query),
      );

      if (filtered.length === 0) {
        setMatches("zero matches");
      } else if (filtered.length > 10) {
        setMatches("too many matches, specify another filter");
      } else {
        setMatches(filtered);
      }
    });
  };

  return (
    <>
      <div>
        find countries <input onChange={search} type="text" />
      </div>
      <div>
        {matches ? (
          Array.isArray(matches) ? (
            matches.length === 1 ? (
              <Country
                name={matches[0].name.common}
                capital={matches[0].capital}
                area={matches[0].area}
                flag={matches[0].flags.png}
                languages={matches[0].languages}
              />
            ) : (
              matches.map((c) => <p key={c.ccn3}>{c.name.common}</p>)
            )
          ) : (
            matches
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
