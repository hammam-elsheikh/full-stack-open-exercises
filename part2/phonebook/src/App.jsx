import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import phoneServices from "./services/phoneRecords";
import { Notification } from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [successMsg, setSuccessMsg] = useState(null);

  useEffect(() => {
    phoneServices.getAll().then((data) => {
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
    const recordIndex = persons.findIndex((person) => person.name === newName);
    if (recordIndex === -1) {
      const newRecord = { name: newName, number: newNumber };
      phoneServices
        .create(newRecord)
        .then((returnedRecord) => {
          setPersons([...persons, returnedRecord]);
          setNewName("");
          setNewNumber("");
        })
        .catch((err) => console.log(err));
    } else {
      const updatePhone = confirm(
        `${newName} is already added to phonebook, do you want to replace the old phone number with the new one?`,
      );

      if (updatePhone) {
        const personsCopy = [...persons];
        const recordToUpdate = personsCopy[recordIndex];
        recordToUpdate.number = newNumber;

        phoneServices.update(recordToUpdate, recordToUpdate.id).then(() => {
          setPersons(personsCopy);
          setSuccessMsg(`${newName}'s phone number updated successfully 🥳`);
          setNewName("");
          setNewNumber("");
          setTimeout(() => {
            setSuccessMsg(null);
          }, 5000);
        });
      }
    }
  }

  function deleteRecord(person) {
    const del = window.confirm(`Delete ${person.name} ?`);
    if (del) {
      phoneServices
        .remove(person.id)
        .then((returnedRecord) =>
          setPersons(
            persons.filter((person) => person.id !== returnedRecord.id),
          ),
        );
    }
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
      <Notification successMsg={successMsg} />

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

      <Persons deleteRecord={deleteRecord} personsToShow={personsToShow} />
    </>
  );
};

export default App;
