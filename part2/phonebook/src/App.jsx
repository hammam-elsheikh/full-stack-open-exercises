import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

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
    setPersonsToShow([...persons, { name: newName, number: newNumber }]);
  }

  function search(e) {
    const q = e.target.value;
    if (q) {
      const result = persons.filter((person) =>
        person.name.toLowerCase().includes(q),
      );
      setPersonsToShow(result);
    } else {
      setPersonsToShow(persons);
    }
  }

  return (
    <>
      <h2>Phonebook</h2>

      <Filter search={search} />

      <h2>add a new</h2>

      <PersonForm
        addRecord={addRecord}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} />
    </>
  );
};

export default App;
