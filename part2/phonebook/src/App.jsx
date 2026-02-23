import {useState} from "react";

const App = () => {
    const [persons, setPersons] = useState([{name: "Arto Hellas"}]);
    const [newName, setNewName] = useState("");

    function handleInputChange(e) {
        setNewName(e.target.value);
    }

    function addName(e) {
        e.preventDefault();
        if(persons.findIndex(person=>person.name === newName) === -1)
         setPersons([...persons, {name: newName}]);
        else alert(`${newName} is already added to phonebook`)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleInputChange}/>
                </div>
                <div>
                    <button type="submit">
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => (
                    <li key={person.name}> {person.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
