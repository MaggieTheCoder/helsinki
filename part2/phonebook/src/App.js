import { useState } from "react";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setNewSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = [
      {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      },
    ];

    const inPhonebook = persons.some((person) => {
      if (person.name === newName) {
        return true;
      }
      return false;
    });

    if (inPhonebook) {
      alert(`${newName} already exists`);
      return;
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const filtered = !search
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };
  return (
    <div>
      <h2>Phone book</h2>
      <div>
        <Search search={search} handleSearchChange={handleSearchChange} />
      </div>
      <h1>add a new</h1>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filtered} />
    </div>
  );
};

export default App;
