import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [personsToShow, setPersonsToShow] = useState(persons);

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleNumberChange(e) {
    setNewNumber(e.target.value);
  }

  function addRecord(e) {
    e.preventDefault();
    if (persons.findIndex((person) => person.name === newName) === -1)
      setPersons([...persons, { name: newName, number: newNumber }]);
    else alert(`${newName} is already added to phonebook`);
  }

  function search(e) {
    const q = e.target.value;
    if (q) {
      console.log("yes");
      const result = persons.filter((person) =>
        person.name.toLowerCase().includes(q),
      );
      setPersonsToShow(result);
    } else {
      console.log("no");
      setPersonsToShow(persons);
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={search} />
      </div>
      <form onSubmit={addRecord}>
        <h2>add a new</h2>
        <table>
          <tbody>
            <tr>
              <td> name:</td>
              <td>
                <input
                  required={true}
                  value={newName}
                  onChange={handleNameChange}
                />
              </td>
            </tr>
            <tr>
              <td>number:</td>
              <td>
                <input
                  required={true}
                  value={newNumber}
                  onChange={handleNumberChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {personsToShow.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
