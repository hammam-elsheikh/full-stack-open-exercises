import { useState } from "react";
import "./App.css";
import countriesServices from "./services/countries";
import Country from "./components/Country";

function App() {
  // store either an array of matching country objects or a status message string
  const [matches, setMatches] = useState([]);
  const [countryToShowIndex, setCountryToShowIndex] = useState(null);

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
        // console.log(filtered[0]);
        setMatches(filtered);
      }
    });
  };

  if (typeof countryToShowIndex === "number") {
    console.log("show");
    return (
      <Country
        name={matches[countryToShowIndex].name.common}
        capital={matches[countryToShowIndex].capital}
        area={matches[countryToShowIndex].area}
        flag={matches[countryToShowIndex].flags.svg}
        languages={matches[countryToShowIndex].languages}
      />
    );
  }

  return (
    <>
      <div>
        find countries <input onChange={search} type="text" />
      </div>
      <div>
        <ul>
          {matches ? (
            Array.isArray(matches) ? (
              matches.length === 1 ? (
                <Country
                  name={matches[0].name.common}
                  capital={matches[0].capital}
                  area={matches[0].area}
                  flag={matches[0].flags.svg}
                  languages={matches[0].languages}
                />
              ) : (
                matches.map((c, index) => (
                  <li key={c.ccn3}>
                    {c.name.common}{" "}
                    <button
                      onClick={() => {
                        setCountryToShowIndex(index);
                      }}
                    >
                      show
                    </button>
                  </li>
                ))
              )
            ) : (
              matches
            )
          ) : (
            ""
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
