import {useState} from "react";

const App = () => {
    const [persons, setPersons] = useState([{
        name: "Arto Hellas", phone: '01234567891'
    }]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState('');

    function handleNameChange(e) {
        setNewName(e.target.value);
    }

    function handleNumberChange(e) {
        setNewNumber(e.target.value);
    }

    function addRecord(e) {
        e.preventDefault();
        if (persons.findIndex(person => person.name === newName) === -1)
            setPersons([...persons, {name: newName, phone: newNumber}]);
        else alert(`${newName} is already added to phonebook`)
    }

    return (<>
        <h2>Phonebook</h2>
        <form onSubmit={addRecord}>
            <table>
                <tbody>
                <tr>
                    <td> name:</td>
                    <td><input required={true} value={newName} onChange={handleNameChange}/></td>
                </tr>
                <tr>
                    <td>number:</td>
                    <td><input required={true} value={newNumber} onChange={handleNumberChange}/></td>
                </tr>
                </tbody>
            </table>
            <div>
                <button type="submit">
                    add
                </button>
            </div>
        </form>
        <h2>Numbers</h2>
        <table>
            <tbody>
            {persons.map((person) => (<tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
            </tr>))}
            </tbody>
        </table>
    </>);
};

export default App;
