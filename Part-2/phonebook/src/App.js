import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arthur Hellas" }]);
  const [newName, setNewName] = useState("");

  // console.log(persons);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };

    console.log(personObject);
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
