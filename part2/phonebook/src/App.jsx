import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      const data = res.data;
      setPersons(data);
    });
  }, []);

  let personsToShow;

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleNumberChange(e) {
    setNewNumber(e.target.value);
  }

  function addRecord(e) {
    e.preventDefault();
    if (persons.findIndex((person) => person.name === newName) === -1) {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    } else alert(`${newName} is already added to phonebook`);
  }

  function search(e) {
    setSearchQuery(e.target.value);
  }

  if (searchQuery) {
    personsToShow = persons.filter((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  } else {
    personsToShow = [...persons];
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
