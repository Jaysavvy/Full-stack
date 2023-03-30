import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  console.log(newNumber);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: newNumber,
      id: persons.length + 1,
    };
    console.log(personObject);

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");

    const existing_names = persons.map((person) => person.name);

    if (existing_names.includes(newName)) {
      alert(`${newName} is already added to the phone book.`);
    }
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Filter Shown with{" "}
          <input value={newName} onChange={handleNameChange} />
        </div>
      </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          phone: <input value={newNumber} onChange={handlePhoneChange} />
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
      <ul>
        {persons.map((person) => (
          <p>{person.phone ? `${person.name} ${person.phone}` : ""}</p>
        ))}
      </ul>
    </div>
  );
};

export default App;
