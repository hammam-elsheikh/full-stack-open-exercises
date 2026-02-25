export default function Persons({ personsToShow, deleteRecord }) {
  return (
    <table>
      <tbody>
        {personsToShow.map((person) => (
          <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td>
              <button onClick={() => deleteRecord(person)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
