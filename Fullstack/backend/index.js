const express = require('express');
const Serializer = require('sequelize-to-json');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, async () => {
  console.log(`Server is starting on port ${PORT}`);
});

const db = require('./db.js');

//connecting db
db.authenticate()
  .then(() => {
    console.log('Database connection succeeded!');
  })
  .catch((err) => {
    console.log('No database connection!');
  });
//sync db
db.sync({})
  .then(() => {
    console.log('Database sync!');
  })
  .catch((err) => {
    console.log('No database sync');
  });

const Reg = require('../models/r1022');
app.get('/', (req, res) => {
  Reg.then((response) => {
    res.send(response);
  }).catch((error) => {
    res.status(500).send(error);
  });
});
