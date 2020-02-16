const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cvsearch"
);

const searchSeed = [
  {
    statesearch: "The Dead Zone",
    reason: "Stephen King",
    date: new Date(Date.now())
  },
  {
    statesearch: "The Dead Zone",
    reason: "Stephen King",
    date: new Date(Date.now())
  },
  {
    statesearch: "The Dead Zone",
    reason: "Stephen King",
    date: new Date(Date.now())
  },
  {
    statesearch: "The Dead Zone",
    reason: "Stephen King",
    date: new Date(Date.now())
  },
  {
    statesearch: "The Dead Zone",
    reason: "Stephen King",
    date: new Date(Date.now())
  },
  {
    statesearch: "The Dead Zone",
    reason: "Stephen King",
    date: new Date(Date.now())
  },
  {
    statesearch: "The Dead Zone",
    reason: "Stephen King",
    date: new Date(Date.now())
  }
];

db.StateSearch
  .remove({})
  .then(() => db.StateSearch.collection.insertMany(searchSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
