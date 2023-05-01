const http = require("http");

const express = require("express");
const app = express();

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
  {
    name: "John Walker",
    number: "23456778",
    id: 5,
  },
  {
    name: "Alexander Mcqueen ",
    number: "435434343",
    id: 6,
  },
  {
    name: "",
    number: "",
    id: 7,
  },
  {
    name: "",
    number: "",
    id: 8,
  },
  {
    name: "dkdk",
    number: "djd",
    id: 9,
  },
];

const count = persons.filter((item) => item.name).length;

app.get("/", (request, response) => {
  response.send("<h1>Hello You Bad Ass!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  console.log(id);
  const person = persons.find((person) => person.id == id);

  if (person) {
    response.json(person);
  } else {
    response.status(404);
    response.send("<h2>You've enter the wrong id</h2>");
  }
});

app.get("/info", (request, response) => {
  response.send(
    `
  The phone book has the info for ${count}
  ${new Date().toString()}
  `
  );
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
