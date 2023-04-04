import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

//Componets
import { Filter } from "./components/Filter";
import { Persons } from "./components/Persons";
import { PersonsForm } from "./components/PersonsForm";
import Personsser from "./services/Personsser";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  // const promise = axios.get("http://localhost:3001/persons");

  // promise.then((response) => {
  //   console.log(response);
  // });

  useEffect(() => {
    console.log("effect");
    Personsser.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "notes");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      // receives content from the components newName state
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    Personsser.create(personObject).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
    });

    const existing_names = persons.map((person) => person.name);

    if (existing_names.includes(newName)) {
      alert(`${newName} is already added to the phone book.`);
    }
  };

  const deleteEntry = (person) => {
    const msg = `Delete ${person.name}?`;
    const confirm = window.confirm(msg);
    if (confirm) {
      Personsser.deletePerson(person.id).then((person) => setPersons(persons));
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

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  const personsToShow = newFilter
    ? persons.filter((person) => person.name.toLowerCase().includes(newFilter))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Filter Shown with{" "}
          <input value={newFilter} onChange={handleFilterChange} />
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
        {personsToShow.map((person) => (
          <li>
            `{person.name} {person.number}`
            <button onClick={deleteEntry}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
