const express = require("express");
const path = require("node:path");

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

function generateId() {
  return String(Math.floor(Math.random() * 10000000000));
}

app.get("/", (req, res) => {
  res.send("hello, world");
});
app.get("/api/persons", (req, res) => {
  res.json(persons);
});
app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (body.name?.trim() && body.number?.trim()) {
    const id = generateId();
    const newPerson = {
      id,
      name: body.name.trim(),
      number: body.number.trim(),
    };

    persons.push(newPerson);
    console.log(`${newPerson.name} info added successfully`);
    res.json(newPerson);
  } else {
    console.log(`unvalid person info`);
    res.status(400).end("unvalid person info");
  }
});
app.get(`/api/persons/:id`, (req, res) => {
  const id = req.params.id;
  const person = persons.find((persons) => persons.id === id);
  if (!person) return res.status(404).end();

  res.json(person);
});
app.delete(`/api/persons/:id`, (req, res) => {
  const id = req.params.id;
  const person = persons.find((persons) => persons.id === id);
  if (!person) return res.status(404).end();

  persons = persons.filter((person) => person.id !== id);
  console.log(`${person.name} record was deleted`);
  res.json(person);
});

app.get("/info", (req, res) => {
  const entries = persons.length;
  const time = new Date();

  res.send(`<p>phonebook has info for ${entries} people</p><p>${time}</p>`);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
