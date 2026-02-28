export default function Country({ name, capital, flag, languages, area }) {
  console.log(Object.values(languages));
  return (
    <div>
      <h1>{name}</h1>
      <div>Capital {capital}</div>
      <div>Area {area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flag} alt="country flag" />
    </div>
  );
}
